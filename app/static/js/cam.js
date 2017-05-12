/*
* Livepeer Camera Page
*/

'use strict';

const {remote, ipcRenderer} = require('electron');
// var electron = require('electron');
// var remote = electron.remote;
var shell = require('shelljs');
var request = require('request');
var dialog = remote.dialog;

var broadcastButton = document.querySelector('button#broadcast');
var stopButton = document.querySelector('button#stop');
var rtmpPort = "1935";
var httpPort = "8935";

var videoSource = [];
var videoIndex = 0;
var videoSourceLength = 0;

function backClicked() {
    stopBroadcastProc();
    window.location.href='index.html'
}

function refreshButtons() {
  if (remote.getGlobal('sharedObj').ffmpegProc == null) {
    broadcastButton.style.display="";
    stopButton.style.display="none";
    $("#stream-id-div").hide();
  } else {
    broadcastButton.style.display="none";
    stopButton.style.display="";
    $("#stream-id-div").show();
  }
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

function hasGetUserMedia(){
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
}

function webcamPrep(){
    navigator.mediaDevices.enumerateDevices().then(
        function(sourceInfos){
          // console.log(sourceInfos);
            var tempVideoIndex = 0;

            for (let i = 0; i != sourceInfos.length; ++i){
                //console.log(sourceInfos[i]);
                if (sourceInfos[i].kind === 'videoinput') {
                    //console.log('video source found: ', sourceInfos);
                    videoSource[tempVideoIndex] = sourceInfos[i];
                    videoSourceLength++;
                    tempVideoIndex++;

                }
            }
            playVideo();
        }
    );
}

function playVideo(){
    videoIndex = videoIndex % videoSourceLength;

    var constraints = {
      audio: false,
      video: true,
      mandatory: {
        width: { min: 640 },
        height: { min: 480 }
      },
      optional: [
        { width: 650 },
        { width: { min: 650 }},
        { frameRate: 60 },
        { width: { max: 800 }},
        { facingMode: "user" }
      ]
    }

    navigator.webkitGetUserMedia(
        constraints,
        successCallback,
        errorCallback
    );

}

function errorCallback(err){
    console.log('Rejected', err);
}

function successCallback(stream){
    const video = document.querySelector('#cam-video');
    video.src = window.URL.createObjectURL(stream);
}

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  var ve = document.querySelector('video#cam-video');
  ve.srcObject = stream;
  var devices = navigator.mediaDevices.enumerateDevices();
  console.log("gotStream devices: " + devices);
  return devices
}

function stopBroadcastProc() {
    ipcRenderer.send('stopFFMpeg', '');
}

function fillStreamID() {
  request("http://localhost:"+httpPort+"/localStreams", function(err, res, body) {
    if (err != null) {
      dialog.showMessageBox({ message: "Having problem getting stream ID.  Make sure your local node is running.", buttons: ["OK"] });
      return
    }

    var streams = JSON.parse(body);
    var hlsStrmID;

    streams.forEach(function(s, i) {
      if (s["source"] == "local" && s["format"] == "hls") {
        hlsStrmID = s["streamID"];
      }
    })

    if (hlsStrmID == null) {
      console.log("Re-fetching streamID...")
      setTimeout(fillStreamID, 1000)
      return
    }

    $("#stream-id").val(hlsStrmID);
    $("#video-link").val("https://s3.amazonaws.com/livepeer/webplayer/player.html?strmID="+hlsStrmID+".m3u8");
  }); 
}

function start() {
  broadcastButton.addEventListener('click', function() {
    $("#stream-id").val("")
    $("#video-link").val("")

    request("http://localhost:"+httpPort+"/createStream", function(err, res, body) {
      if (err != null) {
        console.log(err)
        dialog.showMessageBox({ message: "Having problem connecting to Livepeer.  Make sure your local node is running.", buttons: ["OK"] });
        return;
      }

      var rtmpStrmID = JSON.parse(body)["streamID"]
      ipcRenderer.send('startFFMpeg', rtmpStrmID)

      setTimeout(fillStreamID, 1000);
      refreshButtons();
    });
  })

  stopButton.addEventListener('click', function() {
    stopBroadcastProc();
    refreshButtons();
  })

  webcamPrep();

  setInterval(
    function() {
        request("http://localhost:"+httpPort+"/peersCount", function(err, res, body) {
          if (err != null) {
            console.log("Connecting to local livepeer node...")
            return
          }
          var count = JSON.parse(body)["count"]
          $("#peers-count").text("Peers: " + count);
        })
    }, 3000);
}

start();