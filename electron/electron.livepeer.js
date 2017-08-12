/*
    LivePeer wrapper
    https://stackoverflow.com/questions/33152533/bundling-precompiled-binary-into-electron-app
*/

import shell from 'shelljs';
import rimraf from 'rimraf';
import request from 'request';
import log from 'electron-log';
import { main } from '../config/config';
import path from 'path';
// Do not use import {spawn} >
// https://discuss.atom.io/t/not-able-to-spawn-npm-modules-from-electron-package-in-os-x-solved/18905/9
var childProcess = require('child_process');

const { httpPort, appRootDir, homeDir } = main;

function getWithExt(name) {
  return process.platform === 'win32' ? `${name}.exe` : name;
}

const startLivepeer = (sender) => {

  request("http://localhost:"+httpPort+"/localStreams", function(err, res, body) {
    if (err == null) {
        global.sharedObj.livepeerProc = "local";
        console.log("LivePeer is already running.");
    } else {
      if (global.sharedObj.livepeerProc == null) {

            const internalLivepeer = path.join(appRootDir, 'node_modules', 'livepeer', getWithExt('livepeer'));
            const internalFFMpeg = path.join(appRootDir, 'node_modules', 'ffmpeg', getWithExt('ffmpeg'));

            var livepeerProc = childProcess.spawn(internalLivepeer, ["--ffmpegPath", internalFFMpeg, "--datadir", homeDir+"/Livepeer/livepeernet"])
            livepeerProc.stdin.write("\n\n\n\n\n")
            global.sharedObj.livepeerProc = livepeerProc;


            // livepeerProc.stderr.on('data', (data) => {
            //    log.info(`stderr: ${data}`);
            // });
            //
            // livepeerProc.stdout.on('data', (data) => {
            //           log.info(`stdout: ${data}`);
            // });

            livepeerProc.on('close', (code) => {
              log.info(`livepeer child process exited with code ${code}`);
              sender.send('notifier', { error: 2 });
            });

            log.info("Livepeer running on port 8935")
      }
    }
  })
}

const stopLivepeer = () => {

    return new Promise((resolve, reject) => {
          log.info("Stopping Livepeer")
          var livepeerProc = global.sharedObj.livepeerProc
          if (livepeerProc != null && livepeerProc != "local") {
            log.info("Sending SIGTERM to " + livepeerProc.pid)
            global.sharedObj.livepeerProc.kill()
            global.sharedObj.livepeerProc = null;
          }
          resolve('LivePeer Closed');

    });
}

const resetLivepeer = (sender) => {
      log.info("ResetLivepeer - Deleting Livepeer datadir")

      rimraf(homeDir+"/Livepeer/livepeernet/", function() { log.info("Removed livepeer dir")})
      shell.mkdir('-p', homeDir+"/Livepeer/livepeernet/");
      stopLivepeer()

      const err = startLivepeer(sender)
      if (err != null) {
        return err
      }
}

const createStream = (sender) => {
    return new Promise((resolve, reject) => {
        request("http://localhost:"+httpPort+"/createStream", function(err, res, body) {
          if (err != null) {
              sender.send('notifier', { error: 4 }); // return;
              reject({ message: "Having problem connecting to Livepeer.  Make sure your local node is running.", buttons: ["OK"] })
          }
          resolve({ rtmpStrmID: JSON.parse(body)["streamID"] });
        });
    });
}

const getHlsStrmID = (sender) => {
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
        setTimeout(() => getHlsStrmID(sender), 1000)
        return
      }

      sender.send('broadcast', { hlsStrmID });
    });
}


const getVideo = ({strmID}) => {
    return new Promise((resolve, reject) => {

        request("http://localhost:"+httpPort+"/stream/"+strmID+".m3u8", function(err, res, body) {

          if (!body) {
            reject({ error: 1 })
            return;
          }
          resolve({ strmID });

        });
    });
}


export default { windowLivepeer: { startLivepeer, stopLivepeer, resetLivepeer, createStream, getHlsStrmID, getVideo } }
