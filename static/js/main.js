/*
* Livepeer Main Page
*/

'use strict';

var electron = require('electron');
var remote = electron.remote;
var shell = require('shelljs');
var request = require('request');
var dialog = electron.remote.dialog;


var videoElement = document.querySelector('video');
var refreshButton = document.querySelector('span#refresh');
var broadcastButton = document.querySelector('button#broadcast');
var stopButton = document.querySelector('button#stop');
var streamsList = document.querySelector('ul#streams');
var rtmpPort = "1936"
var httpPort = "8936"

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
  // Refresh button list in case labels have become available
  return navigator.mediaDevices.enumerateDevices();
}

function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }

  var constraints = {
    audio: true,
    video: true
  }

  navigator.mediaDevices.getUserMedia(constraints).
      then(gotStream).catch(handleError);


  // var broadcastProc;
  broadcastButton.addEventListener('click', function() {
    if (!shell.which('ffmpeg')) {
        shell.echo('Sorry, this script requires ffmpeg');
        shell.exit(1);
    }

    request("http://localhost:"+httpPort+"/createStream", function(err, res, body) {
      if (err != null) {
        console.log(err)
        dialog.showMessageBox({ message: "Having problem connecting to Livepeer.  Make sure your local node is running.", buttons: ["OK"] });
        return;
      }

      var strmID = JSON.parse(body)["streamID"]
      var ffmpegCmd = "ffmpeg -f avfoundation -framerate 30 -pixel_format uyvy422 -i \"0:0\" -vcodec libx264 -tune zerolatency -b 900k -x264-params keyint=60:min-keyint=60 -f flv rtmp://localhost:"+rtmpPort+"/stream/"+strmID;

      var broadcastProc = shell.exec(ffmpegCmd, {async:true});
      console.log(broadcastProc);
      remote.getGlobal('sharedObj').ffmpegProc = broadcastProc;
      broadcastProc.stdout.on('data', function(data) {
        console.log("Data---");
        console.log(data);
        return;
      });

      broadcastProc.stderr.on('data', function(data) {
        console.log("Error!!!");
        console.log(data);
        return;
      })

      refreshButtons();
    });

    setTimeout(refreshLocalStreams, 2000);
  })

  stopButton.addEventListener('click', function() {
    var ffmpegProc = remote.getGlobal('sharedObj').ffmpegProc;
    if (ffmpegProc == null) {
      dialog.showMessageBox({ message: "Cannot find FFMpeg broadcasting process", buttons: ["OK"] });
    } else {
      console.log(ffmpegProc);
      process.kill(ffmpegProc.pid, 'SIGINT');
      remote.getGlobal('sharedObj').ffmpegProc = null;
    }
    refreshButtons();
    setTimeout(refreshLocalStreams, 1500);
  })

  refreshButton.addEventListener('click', function() {
    refreshLocalStreams();
  })

  refreshLocalStreams();
}

start();

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

function refreshButtons() {
  if (remote.getGlobal('sharedObj').ffmpegProc == null) {
    broadcastButton.style.display="";
    stopButton.style.display="none";
  } else {
    broadcastButton.style.display="none";
    stopButton.style.display="";
  }
}

function refreshLocalStreams() {
  while (streamsList.firstChild) {
      streamsList.removeChild(streamsList.firstChild);
  }

  request("http://localhost:"+httpPort+"/localStreams", function(err, res, body) {
    if (err != null) {
      console.log(err)
      dialog.showMessageBox({ message: "Having problem connecting to Livepeer.  Make sure your local node is running.", buttons: ["OK"] });
      return;
    }

    var streams = JSON.parse(body);
    streams.splice(0, 0, {"source": "local", "streamID":"camera", "format":""});
    // console.log(streams);
    streams.forEach(function(s, i) {
      var li = document.createElement("li");
      li.className = "list-group-item";

      var sp = document.createElement("span");
      sp.className = "streamSource";
      sp.appendChild(document.createTextNode(s["source"]))

      var imgSp = document.createElement("span");
      imgSp.className = "imgWrap";
      var img = document.createElement("img");
      if (s["format"] == "rtmp") {
        img.setAttribute("src", "static/img/rtmp.png");
      } else if (s["format"] == "hls") {
        img.setAttribute("src", "static/img/hls.png");
      }
      imgSp.appendChild(img)

      var p = document.createElement("p");
      p.className="small";
      p.appendChild(document.createTextNode(s["streamID"]));

      li.appendChild(sp);
      li.appendChild(imgSp);
      li.appendChild(p);

      // var item = "<li class=\"list-group-item\">"+s["streamID"]+"</li>";
      streamsList.appendChild(li);
    })
  });


}