/*
* Livepeer Main Page
*/

'use strict';

var electron = require('electron');
var remote = electron.remote;
var shell = require('shelljs');
var request = require('request');
var dialog = electron.remote.dialog;

var networkVideoElement;
var refreshButton = document.querySelector('span#refresh');
var broadcastButton = document.querySelector('button#broadcast');
var stopButton = document.querySelector('button#stop');
var streamsList = document.querySelector('div#streams');
var rtmpPort = "1935";
var httpPort = "8935";
// var activeVideo = getURLParam("src", "local");
var activeVideo = "local";
var hls;

// function getURLParam(sParam, defaultValue) {
//   var sPageURL = window.location.search.substring(1);
//   var sURLVariables = sPageURL.split('&');
//   for (var i = 0; i < sURLVariables.length; i++) {
//     var sParameterName = sURLVariables[i].split('=');
//     if (sParameterName[0] == sParam) {
//       return "undefined" == sParameterName[1] ? undefined : "false" == sParameterName[1] ? false : sParameterName[1];
//     }
//   }
//   return defaultValue;
// }

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  var ve = document.querySelector('video#cam-video');
  ve.srcObject = stream;
  // Refresh button list in case labels have become available
  var devices = navigator.mediaDevices.enumerateDevices();
  console.log("gotStream devices: " + devices);
  return devices
}

function start() {
  $("span#add").click(function() {
    $("#new-stream-div").toggle();
  });

  $("button#new-stream-button").click(function() {
    var strmID = $("input#new-stream-id").val();
    // console.log("New stream: " + strmID);
    request("http://localhost:"+httpPort+"/stream/"+strmID+".m3u8", function(err, res, body) {
      if (err != null) {
        console.log(err)
        dialog.showMessageBox({ message: "Having problem connecting to Livepeer.  Make sure your local node is running.", buttons: ["OK"] });
        return;
      }
      // console.log(body);
    });

    setTimeout(refreshLocalStreams, 3000);
  });

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
        // console.log("Error!!!");
        // console.log(data);
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
    remote.getCurrentWindow().reload();

    refreshLocalStreams();
  })

  refreshLocalStreams();
  refreshButtons();
  loadCamVideo();
}


function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

function refreshButtons() {
  if (activeVideo == 'local') {
    if (remote.getGlobal('sharedObj').ffmpegProc == null) {
      broadcastButton.style.display="";
      stopButton.style.display="none";
    } else {
      broadcastButton.style.display="none";
      stopButton.style.display="";
    }
  } else {
    broadcastButton.style.display="none";
    stopButton.style.display="none";
  }
}

function refreshLocalStreams() {
  console.log("refreshing local streams");
  request("http://localhost:"+httpPort+"/localStreams", function(err, res, body) {
    if (err != null) {
      console.log(err)
      dialog.showMessageBox({ message: "Having problem connecting to Livepeer.  Make sure your local node is running.", buttons: ["OK"] });
      return;
    }

    while (streamsList.firstChild) {
        streamsList.removeChild(streamsList.firstChild);
    }

    var streams = JSON.parse(body);
    streams.splice(0, 0, {"source": "local", "streamID":"local", "format":"local"});
    streams.splice(0, 0, {"source": "remote (big bunny)", "streamID":"http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8", "format":"hls"});
    // console.log(streams);
    streams.forEach(function(s, i) {
      var li;
      if (s["format"] == "rtmp") {
        li = '<button class="list-group-item list-group-item-action disabled"><div><span class="streamSource" style="margin-left:0">${source}</span><span class="imgWrap"><img src="static/img/${format}.png"></span></div><p class="small">${streamID}</p></button>'
        li = li.replace("${source}", s["source"]);
        li = li.replace("${format}", s["format"]);
        li = li.replace("${streamID}", s["streamID"]);
      } else {
        if (activeVideo == s["streamID"]) {
          li = '<button class="list-group-item list-group-item-action active" onclick="streamClicked(this)"><div><span class="streamSource" style="margin-left:0">${source}</span><span class="imgWrap"><img src="static/img/${format}.png"></span></div><p class="small">${streamID}</p></button>'
        } else {
          li = '<button class="list-group-item list-group-item-action" onclick="streamClicked(this)"><div><span class="streamSource" style="margin-left:0">${source}</span><span class="imgWrap"><img src="static/img/${format}.png"></span></div><p class="small">${streamID}</p></button>'
        }
        li = li.replace("${source}", s["source"]);
        li = li.replace("${format}", s["format"]);
        li = li.replace("${streamID}", s["streamID"]);
      }
      // console.log("li:" + li);

      $("div#streams").append(li);
    });
  });
}

function loadCamVideo() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      console.log("stopping track: ", track);
      track.stop();
    });
  }

  // if (remote.getGlobal('sharedObj').activeVideo == 'local') { //Load local camera stream
  // if (activeVideo == 'local') { //Load local camera stream
  console.log("loading local video"); 
  var constraints = {
    audio: true,
    video: true
  }

  navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError);

}

function loadNetworkVideo(activeVideo) {
  // } else if (remote.getGlobal('sharedObj').activeVideo != null) { //Load hls stream
  // } else if (activeVideo != null) { //Load hls stream
  if (Hls.isSupported()) {

    if (hls) {
      console.log("destroying hls");
      hls.destroy();
      if(hls.bufferTimer) {
        clearInterval(hls.bufferTimer);
        hls.bufferTimer = undefined;
      }
      hls = null;
    }

    networkVideoElement = document.getElementById('network-video');
    // console.log("found livepeerVideo div");

    if (!hls) {
      console.log("creating hls");
      hls = new Hls({debug:false, enableWorker : true});
    }

    var videoURL = 'http://localhost:' + httpPort + '/stream/' + activeVideo + '.m3u8';
    if (activeVideo == "http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8") {
      videoURL = "http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8";
    }

    console.log("loading video: " + videoURL);
    hls.loadSource(videoURL);
    hls.attachMedia(networkVideoElement);
    hls.on(Hls.Events.MEDIA_DETACHED,function() {
      console.log("media detached");
    });      
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      console.log("playing video");
      networkVideoElement.play();
    });
    hls.on(Hls.Events.ERROR, function (event, data) {
      var errorType = data.type;
      var errorDetails = data.details;
      var errorFatal = data.fatal;
      console.log("HLS Error: " + errorType + ", " + errorDetails + ", " + errorFatal);

      if (data.fatal) {
        switch(data.type) {
        case Hls.ErrorTypes.NETWORK_ERROR:
          //TODO: Should Do A Counter - 5 consecutive network errors result in disconnect
          console.log("fatal network error encountered, try to recover");
          hls.startLoad();
          break;
        case Hls.ErrorTypes.MEDIA_ERROR:
          console.log("fatal media error encountered, try to recover");
          hls.recoverMediaError();
          break;
        default:
        // cannot recover
          hls.destroy();
          break;
        }
      }
    });

  } else {
    dialog.showMessageBox({ message: "HLS is not supported.  This is likely an error in Livepeer.", buttons: ["OK"] });
  }
  // } else {
  //     dialog.showMessageBox({ message: "No stream id is loaded.", buttons: ["OK"] });
  // }
}

function streamClicked(button) {
  var strmID = $(button).find("p.small").text();
  console.log("streamClicked:" + strmID);
  // window.location.href="index.html?src="+strmID
  if (remote.getGlobal('sharedObj').activeVideo != strmID) {
    remote.getGlobal('sharedObj').activeVideo = strmID;
    loadNetworkVideo(remote.getGlobal('sharedObj').activeVideo);
  }

  //   refreshLocalStreams();
  //   loadVideo();
  //   refreshButtons();
  // } 
}

start();
