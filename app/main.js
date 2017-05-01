// const electron = require('electron')
// Module to control application life.
const {remote, app, ipcMain, Menu, BrowserWindow, dialog} = require('electron')
const logger = require('./logger');
var log = require('electron-log');
var fs = require('fs');
const spawn = require('child_process').spawn;

const path = require('path')
const url = require('url')

var request = require('request');
var rtmpPort = "1935";
var httpPort = "8935";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

global.sharedObj = {ffmpegProc: null, livepeerProc: null};

function setLogging() {
  // Same as for console transport 
  log.transports.file.level = 'info';
  log.transports.file.format = '{h}:{i}:{s}:{ms} {text}';
  
  // Set approximate maximum log size in bytes. When it exceeds, 
  // the archived log will be saved as the log.old.log file 
  log.transports.file.maxSize = 5 * 1024 * 1024;
  
  // Write to this file, must be set before first logging 
  log.transports.file.file = __dirname + '/log.txt';
  
  // fs.createWriteStream options, must be set before first logging 
  log.transports.file.streamConfig = { flags: 'w' };
  
  // set existed file stream 
  log.transports.file.stream = fs.createWriteStream(__dirname + '/log.txt');

  log.transports.file.appName = 'LivepeerDesktop';
}

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

  // app.commandLine.appendSwitch('ppapi-flash-path', "/Library/Internet\ Plug-Ins/PepperFlashPlayer/PepperFlashPlayer.plugin/")
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

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

  startLivepeer()
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
  console.log("Starting FFMpeg for: " + rtmpStrmID)
  var appRootDir = require('app-root-dir').get();

  var broadcastProc = spawn(appRootDir+"/node_modules/ffmpeg/ffmpeg", ["-f",  "avfoundation", "-framerate", "30", "-pixel_format", "uyvy422", "-i", "0:0", "-vcodec", "libx264", "-tune", "zerolatency", "-b", "900k", "-x264-params", "keyint=60:min-keyint=60", "-f", "flv", "rtmp://localhost:"+rtmpPort+"/stream/"+rtmpStrmID])
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
})

ipcMain.on('stopFFMpeg', (event, arg) => {
  stopFFMpeg()
})

function stopFFMpeg() {
  var ffmpegProc = global.sharedObj.ffmpegProc
  if (ffmpegProc != null) {
    log.info("Killing pid: " + ffmpegProc.pid)
    process.kill(ffmpegProc.pid, 'SIGINT');
    global.sharedObj.ffmpegProc = null;
  }
}

function startLivepeer() {
  log.info("Starting Livepeer")
  
  if (global.sharedObj.livepeerProc == null) {
    var appRootDir = require('app-root-dir').get();
    var livepeerPath = appRootDir+'/node_modules/livepeer/livepeer --ffmpegPath ' + appRootDir + '/node_modules/ffmpeg' + ' < ' + appRootDir + '/node_modules/livepeer/enters.txt';
    var livepeerProc = spawn(appRootDir+"/node_modules/livepeer/livepeer", ["--ffmpegPath", appRootDir+"/node_modules/ffmpeg"])
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

    // request("http://localhost:"+httpPort+"/localStreams", function(err, res, body) {
    //   if (err != null) {
    //     dialog.showMessageBox({ message: "Having problem starting Livepeer node.", buttons: ["OK"] });
    //   }
    // })
  } else {
    log.info("Livepeer already running.")
  }
}

function stopLivepeer() {
  log.info("Stopping Livepeer")
  var livepeerProc = global.sharedObj.livepeerProc
  if (livepeerProc != null) {
    log.info("Sending SIGTERM to " + livepeerProc.pid)
    global.sharedObj.livepeerProc.kill()
    global.sharedObj.livepeerProc = null;
  }
}

setLogging()