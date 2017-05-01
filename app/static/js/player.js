'use strict';

var electron = require('electron');
var request = require('request');
var dialog = electron.remote.dialog;
var rtmpPort = "1935";
var httpPort = "8935";
var hls;

function backClicked() {
    window.location.href='index.html'
}

function start() {

  $("button#start").click(function() {
    var strmID = $("input#stream-id").val();
    // console.log("New stream: " + strmID);
    request("http://localhost:"+httpPort+"/stream/"+strmID+".m3u8", function(err, res, body) {
      if (err != null) {
        console.log(err)
        dialog.showMessageBox({ message: "Having problem connecting to Livepeer.  Make sure your local node is running.", buttons: ["OK"] });
        return;
      }
      loadNetworkVideo(strmID);
    });
  });

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

function loadNetworkVideo(activeVideo) {
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

    var networkVideoElement = document.getElementById('network-video');

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
          // console.log("fatal network error encountered, try to recover");
          dialog.showMessageBox({ message: "Fatal network error", buttons: ["OK"] });
          // hls.startLoad();
          break;
        case Hls.ErrorTypes.MEDIA_ERROR:
          dialog.showMessageBox({ message: "Fatal media error", buttons: ["OK"] });
          // console.log("fatal media error encountered, try to recover");
          // hls.recoverMediaError();
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
}

start();