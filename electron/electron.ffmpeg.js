/*
    FFMpeg wrapper
*/

import log from 'electron-log';
// https://discuss.atom.io/t/not-able-to-spawn-npm-modules-from-electron-package-in-os-x-solved/18905/9
var childProcess = require('child_process');
import path from 'path';
import { main } from '../config/config';
const { rtmpPort, appRootDir, frameConfig } = main;


function getWithExt(name) {
  return process.platform === 'win32' ? `${name}.exe` : name;
}
// https://github.com/mifi/lossless-cut/blob/master/src/ffmpeg.js
// const execa = require('execa');
// function canExecuteFfmpeg(ffmpegPath) {
//   return execa(ffmpegPath, ['-version']);
// }
// return canExecuteFfmpeg(internalFfmpeg)
//   .then(() => internalFfmpeg)
//   .catch(() => {
//     console.log('Internal ffmpeg unavail');
//     return which('ffmpeg');
//   });

let userStopFFmpeg = false;

const startFFMpeg = (sender, rtmpStrmID, configIdx = 0) => {
  log.info("Launching FFmpeg with config: " + configIdx)
  userStopFFmpeg = false  /* reset !!*/

  var framerate = frameConfig[configIdx]["framerate"]
  var keyint = frameConfig[configIdx]["keyint"]
  const internalFFMpeg = path.join(appRootDir, 'node_modules', 'ffmpeg', getWithExt('ffmpeg'));

  var broadcastProc = childProcess.spawn(internalFFMpeg, ["-f",  "avfoundation", "-framerate", framerate,  "-pixel_format", "uyvy422", "-i", "0:0", "-vcodec", "libx264", "-tune", "zerolatency", "-b", "900k", "-x264-params", "keyint="+keyint+":min-keyint="+keyint, "-acodec", "aac", "-ac", "1", "-b:a", "96k", "-f", "flv", "rtmp://localhost:"+rtmpPort+"/stream/"+rtmpStrmID])

  global.sharedObj.ffmpegProc = broadcastProc;

  broadcastProc.on('close', (code, signal) => {
      if (userStopFFmpeg) {
          return log.info(`ffmpeg - terminated by the user (stopFFMpeg)`);
      }
      log.info(`ffmpeg - child process terminated due to receipt of signal ${signal}`);
      sender.send('notifier', { error: 3 });

    // autorestart ?
      if (configIdx < frameConfig.length-1) {
          console.log("restart FFMPeg");
          startFFmpeg(rtmpStrmID, configIdx+1)
      } else {
          sender.send('notifier', { error: 3 });
      }
  });
}

const stopFFMpeg = () => {
    return new Promise((resolve, reject) => {

          var ffmpegProc = global.sharedObj.ffmpegProc
          if (ffmpegProc != null) {
            log.info("Killing FFMPeg pid: " + ffmpegProc.pid)
            userStopFFmpeg = true
            global.sharedObj.ffmpegProc.kill()
            global.sharedObj.ffmpegProc = null;
          }

          resolve('FFMpeg Closed');

    });
}


export default { windowFFMpeg: { startFFMpeg, stopFFMpeg } }
