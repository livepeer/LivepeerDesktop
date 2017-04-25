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
    // MediaStreamTrack.getSources(
    // console.log("webcamPrep")
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
    // console.log('current video source :',videoSource[videoIndex]);
    // const constraints = {
    //     audio: false,
    //     video: {
    //         mandatory: {
    //             sourceId:videoSource[videoIndex].id
    //         }
    //     }
    // }

    var constraints = {
      audio: true,
      video: true
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


function loadCamVideo() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      console.log("stopping track: ", track);
      track.stop();
    });
  }

  var constraints = {
    audio: true,
    video: true
  }

  // navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError);
  navigator.webkitGetUserMedia(constraints, successCallback, errorCallback);
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
    // var ffmpegProc = remote.getGlobal('sharedObj').ffmpegProc;
    // if (ffmpegProc != null) {
    //   console.log(ffmpegProc);
    //   process.kill(ffmpegProc.pid, 'SIGINT');
    //   remote.getGlobal('sharedObj').ffmpegProc = null;
    // }
    ipcRenderer.send('stopFFMpeg', '');
}

function fillStreamID() {
  request("http://localhost:"+httpPort+"/localStreams", function(err, res, body) {
    if (err != null) {
      dialog.showMessageBox({ message: "Having problem getting stream ID.  Make sure your local node is running.", buttons: ["OK"] });
    }

    var streams = JSON.parse(body);
    var hlsStrmID;

    streams.forEach(function(s, i) {
      if (s["source"] == "local" && s["format"] == "hls") {
        hlsStrmID = s["streamID"];
      }
    })

    $("#stream-id").val(hlsStrmID);
  }); 
}

function start() {
  broadcastButton.addEventListener('click', function() {

    request("http://localhost:"+httpPort+"/createStream", function(err, res, body) {
      if (err != null) {
        console.log(err)
        dialog.showMessageBox({ message: "Having problem connecting to Livepeer.  Make sure your local node is running.", buttons: ["OK"] });
        return;
      }

      var rtmpStrmID = JSON.parse(body)["streamID"]

      // var ffmpegCmd = "ffmpeg -f avfoundation -framerate 30 -pixel_format uyvy422 -i \"0:0\" -vcodec libx264 -tune zerolatency -b 900k -x264-params keyint=60:min-keyint=60 -f flv rtmp://localhost:"+rtmpPort+"/stream/"+rtmpStrmID;

      var appRootDir = require('app-root-dir').get();
      var ffmpegpath = appRootDir+'/node_modules/ffmpeg/ffmpeg';
      var ffmpegCmd = ffmpegpath + " -f avfoundation -framerate 30 -pixel_format uyvy422 -i \"0:0\" -vcodec libx264 -tune zerolatency -b 900k -x264-params keyint=60:min-keyint=60 -f flv rtmp://localhost:"+rtmpPort+"/stream/"+rtmpStrmID;
      ipcRenderer.send('startFFMpeg', ffmpegCmd)

      setTimeout(fillStreamID, 1500);
      refreshButtons();
    });
  })

  stopButton.addEventListener('click', function() {
    stopBroadcastProc();
    refreshButtons();
  })

  // loadCamVideo();
  webcamPrep();
  // playVideo();
}

start();