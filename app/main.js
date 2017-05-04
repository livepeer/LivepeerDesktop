// const electron = require('electron')
// Module to control application life.
const {remote, app, ipcMain, Menu, BrowserWindow, dialog} = require('electron')
var log = require('electron-log');
var fs = require('fs');
const spawn = require('child_process').spawn;
var rimraf = require('rimraf');

const path = require('path')
const url = require('url')

var request = require('request');
var rtmpPort = "1935";
var httpPort = "8935";

var homeDir = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
var frameConfig = [{"framerate":15, "keyint": 30}, {"framerate": 30, "keyint": 60}, {"framerate":60, "keyint": 120}]
var userStopFFmpeg = false
var shell = require('shelljs');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

global.sharedObj = {ffmpegProc: null, livepeerProc: null};

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1600, 
    height: 700,
    webPreferences: {
      plugins: true
    }
  })

  reload();
}

function reload() {

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  }) 

  // Create the Application's main menu
  var template = [{
      label: "Application",
      submenu: [
          { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
          { type: "separator" },
          { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
      ]}, {
      label: "Edit",
      submenu: [
          { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
          { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
          { type: "separator" },
          { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
          { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
          { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
          { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
      ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  setLogging()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  log.info("All windows closed.  Shutting down FFMpeg and Livepeer...")
  stopFFMpeg()
  stopLivepeer()
  // if (process.platform !== 'darwin') {
    app.quit()
  // }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('startFFMpeg', (event, rtmpStrmID) => {
  log.info("Starting FFMpeg for: " + rtmpStrmID)

 	//ffmpeg -f avfoundation -framerate 30 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -tune zerolatency -b 900k -x264-params keyint=60:min-keyint=60 -acodec libfdk_aac -ac 1 -b:a 96k -f flv rtmp://localhost:1935/
  startFFmpeg(rtmpStrmID, 0)
})

ipcMain.on('stopFFMpeg', (event, arg) => {
  stopFFMpeg()
})

ipcMain.on('sendBugReport', (event, arg) => {
  sendBugReport()
})

ipcMain.on('startLivepeer', (event, arg) => {
  log.info("Starting Livepeer Node")

  err = startLivepeer(event.sender)
  if (err != null) {
    log.info("Livepeer Node Error: " + err.toString())
    event.sender.send("showMsg", err.toString())
  }
})

ipcMain.on('resetLivepeer', (event, arg) => {
  resetLivepeer(event.sender)
})

function startFFmpeg(rtmpStrmID, configIdx) {
  log.info("Launching FFmpeg with config: " + configIdx)
  userStopFFmpeg = false

  var framerate = frameConfig[configIdx]["framerate"]
  var keyint = frameConfig[configIdx]["keyint"]
  var appRootDir = require('app-root-dir').get();

  var broadcastProc = spawn(appRootDir+"/node_modules/ffmpeg/ffmpeg", ["-f",  "avfoundation", "-framerate", framerate, "-pixel_format", "uyvy422", "-i", "0:0", "-vcodec", "libx264", "-tune", "zerolatency", "-b", "900k", "-x264-params", "keyint="+keyint+":min-keyint="+keyint, "-acodec", "aac", "-ac", "1", "-b:a", "96k", "-f", "flv", "rtmp://localhost:"+rtmpPort+"/stream/"+rtmpStrmID])
  global.sharedObj.ffmpegProc = broadcastProc;
  broadcastProc.stdout.on('data', function(data) {
    log.info(`stdout: ${data}`);
    return;
  });

  broadcastProc.stderr.on('data', function(data) {
    //Don't do anything here, because ffmpeg mistakenly outputs everything to stderr
    log.info(`stderr: ${data}`);
    return;
  })

  broadcastProc.on('close', (code, signal) => {
    log.info(`child process terminated due to receipt of signal ${signal}`);
    if (userStopFFmpeg) {
      return
    }

    if (configIdx < frameConfig.length-1) {
      startFFmpeg(rtmpStrmID, configIdx+1)
    } else {
      dialog.showMessageBox({message: "Broadcasting failed.  It's likely a local configuration problem.  Please report the bug.", button: ["OK"]})
    }
    return
  });
}

function stopFFMpeg() {
  var ffmpegProc = global.sharedObj.ffmpegProc
  if (ffmpegProc != null) {
    log.info("Killing pid: " + ffmpegProc.pid)
    userStopFFmpeg = true
    global.sharedObj.ffmpegProc.kill()
    global.sharedObj.ffmpegProc = null;
  }
}

function startLivepeer(sender) {
  request("http://localhost:"+httpPort+"/localStreams", function(err, res, body) {
    if (err == null) {
      if (global.sharedObj.livepeerProc == null) {
        global.sharedObj.livepeerProc = "local"
        sender.send("showMsg", "Local livepeer node already running. Using that instead of launching new node.")
      }
    } else {
      if (global.sharedObj.livepeerProc == null) {

        var appRootDir = require('app-root-dir').get();
        var livepeerPath = appRootDir+'/node_modules/livepeer/livepeer --ffmpegPath ' + appRootDir + '/node_modules/ffmpeg' + ' < ' + appRootDir + '/node_modules/livepeer/enters.txt';
        var livepeerProc = spawn(appRootDir+"/node_modules/livepeer/livepeer", ["--ffmpegPath", appRootDir+"/node_modules/ffmpeg", "--datadir", homeDir+"/Livepeer/livepeernet"])
        livepeerProc.stdin.write("\n\n\n\n\n")
        global.sharedObj.livepeerProc = livepeerProc;
        livepeerProc.stdout.on('data', (data) => {
          log.info(`stdout: ${data}`);
        });

        livepeerProc.stderr.on('data', (data) => {
          log.info(`stderr: ${data}`);
        });

        livepeerProc.on('close', (code) => {
          log.info(`child process exited with code ${code}`);
        });

        sender.send("showMsg", "Livepeer running on port 8935")
      } else {
        log.info("Livepeer already running.")
      }
    }
  })
}

function stopLivepeer() {
  log.info("Stopping Livepeer")
  var livepeerProc = global.sharedObj.livepeerProc
  if (livepeerProc != null && livepeerProc != "local") {
    log.info("Sending SIGTERM to " + livepeerProc.pid)
    global.sharedObj.livepeerProc.kill()
    global.sharedObj.livepeerProc = null;
  }
}

function resetLivepeer(sender) {
  log.info("ResetLivepeer - Deleting Livepeer datadir")

  rimraf(homeDir+"/Livepeer/livepeernet/", function() { log.info("Removed livepeer dir")})
  shell.mkdir('-p', homeDir+"/Livepeer/livepeernet/");
  stopLivepeer()

  err = startLivepeer(sender)
  if (err != null) {
    return err
  }
}

function sendBugReport() {
  log.info("Sending logfile to Livepeer")

  var api_key = 'key-b3ca6551d733367cdb89b04ee6b51f08';
  var domain = 'sandboxd3a92ba5697e455bb770bf0142cdf741.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var
      // Local ip address that we're trying to calculate
      address
      // Provides a few basic operating-system related utility functions (built-in)
      ,os = require('os')
      // Network interfaces
      ,ifaces = os.networkInterfaces();

  for (var dev in ifaces) {
    // ... and find the one that matches the criteria
    var iface = ifaces[dev].filter(function(details) {
        return details.family === 'IPv4' && details.internal === false;
    });
    if(iface.length > 0) address = iface[0].address;
  }


  // fs.readFile( __dirname + '/log.txt', function (err, data) {
  fs.readFile( homeDir + '/Livepeer/log.txt', function (err, data) {
    if (err) {
      throw err; 
    }

    var res = {
      from: 'Bug Reporter ' + address + ' <user@sandboxd3a92ba5697e455bb770bf0142cdf741.mailgun.org>',
      to: 'eric@livepeer.org',
      subject: 'Sending Bug Report',
      text: data.toString()
    };

    mailgun.messages().send(res, function (error, body) {
      log.info(body);
    });
  })
  
}

function setLogging() {
  // Same as for console transport 
  log.transports.file.level = 'info';
  log.transports.file.format = '{h}:{i}:{s}:{ms} {text}';
  
  // Set approximate maximum log size in bytes. When it exceeds, 
  // the archived log will be saved as the log.old.log file 
  log.transports.file.maxSize = 5 * 1024 * 1024;
  
  // Write to this file, must be set before first logging 
  // log.transports.file.file = __dirname + '/log.txt';
  log.transports.file.file = homeDir + '/Livepeer/log.txt';
  
  // fs.createWriteStream options, must be set before first logging 
  log.transports.file.streamConfig = { flags: 'w' };
  
  // set existed file stream 
  if (!fs.existsSync(homeDir+"/Livepeer/")) {
    console.log("Making Logging Dir")
    shell.mkdir('-p', homeDir+"/Livepeer/");
  }
  //Remove log file if it's too big
  if (fs.existsSync(homeDir+"/Livepeer/log.txt")) {
    var stats = fs.statSync(homeDir+"/Livepeer/log.txt")
    if (stats.size > 10*1000*1000) { 
      shell.rm(homeDir+"/Livepeer/log.txt")
    }
  }
  log.transports.file.stream = fs.createWriteStream(homeDir + '/Livepeer/log.txt', {'flags': 'a'});

  log.transports.file.appName = 'LivepeerDesktop';
}
