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

    $("#network-video").removeClass('error')
    $("#network-video").addClass('loading')
    request("http://localhost:"+httpPort+"/stream/"+strmID+".m3u8", function(err, res, body) {
      if (err != null) {
        console.log(err)
        dialog.showMessageBox({ message: "Having problem connecting to Livepeer.  Make sure your local node is running, or try restarting the application.", buttons: ["OK"] });
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
    // $(networkVideoElement).on('loadstart', function(event) {
    //   $(this).addClass('loading')
    // });
    $(networkVideoElement).on('canplay', function (event) {
      $(this).removeClass('loading')
    })
    hls.on(Hls.Events.MEDIA_DETACHED,function() {
      console.log("media detached");
    });
    hls.on(Hls.Events.MEDIA_DETACHED,function() {
      console.log('MediaSource detached...');
    })
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      console.log("playing video");
      networkVideoElement.play();
    });
    hls.on(Hls.Events.ERROR, function(event,data) {
      console.warn(data);
      $(networkVideoElement).removeClass('loading')
      networkVideoElement.pause()
      networkVideoElement.src = ""
      networkVideoElement.load()
      $(networkVideoElement).addClass('error')

      switch(data.details) {
        case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
          try {
            $("#HlsStatus").html("cannot Load <a href=\"" + data.context.url + "\">" + url + "</a><br>HTTP response code:" + data.response.code + " <br>" + data.response.text);
              if(data.response.code === 0) {
                $("#HlsStatus").append("this might be a CORS issue, consider installing <a href=\"https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi\">Allow-Control-Allow-Origin</a> Chrome Extension");
              }
          } catch(err) {
            $("#HlsStatus").html("cannot Load <a href=\"" + data.context.url + "\">" + url + "</a><br>Reason:Load " + data.response.text);
          }
          break;
        case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
          $("#HlsStatus").text("timeout while loading manifest");
          break;
        case Hls.ErrorDetails.MANIFEST_PARSING_ERROR:
          $("#HlsStatus").text("error while parsing manifest:" + data.reason);
          break;
        case Hls.ErrorDetails.LEVEL_LOAD_ERROR:
          $("#HlsStatus").text("error while loading level playlist");
          break;
        case Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT:
          $("#HlsStatus").text("timeout while loading level playlist");
          break;
        case Hls.ErrorDetails.LEVEL_SWITCH_ERROR:
          $("#HlsStatus").text("error while trying to switch to level " + data.level);
          break;
        case Hls.ErrorDetails.FRAG_LOAD_ERROR:
          $("#HlsStatus").text("error while loading fragment " + data.frag.url);
          break;
        case Hls.ErrorDetails.FRAG_LOAD_TIMEOUT:
          $("#HlsStatus").text("timeout while loading fragment " + data.frag.url);
          break;
        case Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
          $("#HlsStatus").text("Frag Loop Loading Error");
          break;
        case Hls.ErrorDetails.FRAG_DECRYPT_ERROR:
          $("#HlsStatus").text("Decrypting Error:" + data.reason);
          break;
        case Hls.ErrorDetails.FRAG_PARSING_ERROR:
          $("#HlsStatus").text("Parsing Error:" + data.reason);
          break;
        case Hls.ErrorDetails.KEY_LOAD_ERROR:
          $("#HlsStatus").text("error while loading key " + data.frag.decryptdata.uri);
          break;
        case Hls.ErrorDetails.KEY_LOAD_TIMEOUT:
          $("#HlsStatus").text("timeout while loading key " + data.frag.decryptdata.uri);
          break;
        case Hls.ErrorDetails.BUFFER_APPEND_ERROR:
          $("#HlsStatus").text("Buffer Append Error");
          break;
        case Hls.ErrorDetails.BUFFER_ADD_CODEC_ERROR:
          $("#HlsStatus").text("Buffer Add Codec Error for " + data.mimeType + ":" + data.err.message);
          break;
        case Hls.ErrorDetails.BUFFER_APPENDING_ERROR:
          $("#HlsStatus").text("Buffer Appending Error");
          break;
        default:
          break;
      }
      if(data.fatal) {
        console.log('fatal error :' + data.details);
        switch(data.type) {
          case Hls.ErrorTypes.MEDIA_ERROR:
            handleMediaError();
            break;
          case Hls.ErrorTypes.NETWORK_ERROR:
            $("#HlsStatus").append(",network error ...");
            break;
          default:
            $("#HlsStatus").append(", unrecoverable error");
            hls.destroy();
            break;
        }
        console.log($("#HlsStatus").text());
      }
      var stats = {}
      // if(!stats) stats = {};
      // track all errors independently
      if (stats[data.details] === undefined) {
        stats[data.details] = 1;
      } else {
        stats[data.details] += 1;
      }
      // track fatal error
      if (data.fatal) {
        if (stats.fatalError === undefined) {
          stats.fatalError = 1;
        } else {
            stats.fatalError += 1;
        }
      }
      $("#HlsStats").text(JSON.stringify(sortObject(stats),null,"\t"));
  });


  } else {
    dialog.showMessageBox({ message: "HLS is not supported.  This is likely an error in Livepeer.", buttons: ["OK"] });
  }
}

function sortObject(obj) {
  if(typeof obj !== 'object')
      return obj
  var temp = {};
  var keys = [];
  for(var key in obj)
      keys.push(key);
  keys.sort();
  for(var index in keys)
      temp[keys[index]] = sortObject(obj[keys[index]]);
  return temp;
}

start();