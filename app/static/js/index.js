'use strict';

const {remote, ipcRenderer} = require('electron');
var request = require('request');
var httpPort = 8935

function start() {
  $("#loadModal").modal("show")
  $("#msg-div").hide()
  setInterval(
    function() {
        request("http://localhost:"+httpPort+"/peersCount", function(err, res, body) {
          if (err != null) {
            console.log("Connecting to local livepeer node...")
            return
          }
          var count = JSON.parse(body)["count"]
          $("#peers-count").text("Peers: " + count);
          $("#loadModal").modal("hide")
        })
    }, 1500);

  console.log("Starting Livepeer")
  ipcRenderer.send("startLivepeer", "")
}

function reportBug() {
  ipcRenderer.send('sendBugReport', "")
}

ipcRenderer.on('showMsg', (event, arg) => {
  $("#msg").text(arg)

  $("#msg-div").delay(2000).fadeTo(2000, 500).fadeIn(500, function(){
    $("#msg-div").fadeOut(500);
  });
})

function reconfigure() {
  ipcRenderer.send('resetLivepeer', "")
}

start()