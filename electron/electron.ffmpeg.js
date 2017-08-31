/*
    FFMpeg wrapper
*/

import log from 'electron-log';
import { spawn } from 'child_process';
import { main } from '../config/config';

const { rtmpPort, frameConfig } = main;

/* track if user stopped the process */
let userStopFFmpeg = false;

const startFFMpeg = (sender, configIdx = 0) => new Promise((resolve, reject) => {
    log.info(`Launching FFmpeg with config: ${configIdx}`)
    userStopFFmpeg = false  /* reset !!*/

    const framerate = frameConfig[configIdx].framerate
    const keyint = frameConfig[configIdx].keyint
    const FFMPeArgs = [
        '-f', 'avfoundation',
        '-framerate', framerate,
        '-pixel_format', 'uyvy422',
        '-i', '0:0',
        '-vcodec', 'libx264',
        '-tune', 'zerolatency',
        '-b', '900k',
        '-x264-params', `keyint=${keyint}:min-keyint=${keyint}`,
        '-acodec', 'aac',
        '-ac', '1',
        '-b:a', '96k',
        '-f', 'flv',
        `rtmp://localhost:${rtmpPort}/movie`];

    const broadcastProc = spawn(global.ffmpegPath, FFMPeArgs);
    global.sharedObj.ffmpegProc = broadcastProc;

    resolve({ success: 'ok' });

    broadcastProc.stdout.on('data', (data) => {
        log.info(`stdout: ${data}`);
        return;
    });

    broadcastProc.stderr.on('data', (data) => {
      // Don't do anything here, because ffmpeg mistakenly outputs everything to stderr
        log.info(`stderr: ${data}`);
        return;
    })

    broadcastProc.on('close', (code, signal) => {
        if (userStopFFmpeg) {
            return log.info(`ffmpeg - terminated by the user (stopFFMpeg)`);
        }
        log.info(`ffmpeg ~ ${FFMPeArgs.join(' ')}`);
        log.info(`ffmpeg ${code} ~ child process terminated due to receipt of signal ${signal}`);

        if (configIdx < frameConfig.length - 1) {
            startFFMpeg(sender, configIdx + 1)
        } else {
            sender.send('notifier', { error: 3 });
            reject({ message: 'FFMpeg process closed' });
        }
    });

    // Todo: Improve with promise like>
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
});

const stopFFMpeg = () => new Promise((resolve) => {
    const ffmpegProc = global.sharedObj.ffmpegProc
    if (ffmpegProc != null) {
        log.info(`Killing FFMPeg pid: ${ffmpegProc.pid}`)
        userStopFFmpeg = true
        global.sharedObj.ffmpegProc.kill()
        global.sharedObj.ffmpegProc = null;
    }

    resolve('FFMpeg Closed');
})


export default { windowFFMpeg: { startFFMpeg, stopFFMpeg } }
