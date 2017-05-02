'use strict';

var request = require('request');
var httpPort = 8935

function start() {
  $("#loadModal").modal("show")
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
    }, 3000);
}

start()