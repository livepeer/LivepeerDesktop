/*
    LivePeer wrapper
    https://stackoverflow.com/questions/33152533/bundling-precompiled-binary-into-electron-app
*/

import shell from 'shelljs';
import rimraf from 'rimraf';
import request from 'request';
import log from 'electron-log';
import { spawn } from 'child_process';
import { main } from '../config/config';

const { httpPort, homeDir } = main;

const startLivepeer = (sender) => {
    request(`http://localhost:${httpPort}/localStreams`, (err) => {
        if (err == null) {
            global.sharedObj.livepeerProc = 'local';
            log.info('LivePeer is already running.');
        } else if (global.sharedObj.livepeerProc == null) {
            const args = [
                '--ffmpegPath', global.ffmpegPath,
                '--datadir', `${homeDir}/Livepeer/livepeernet`
            ];
            const livepeerProc = spawn(global.livepeerPath, args)
            livepeerProc.stdin.write('\n\n\n\n\n')
            global.sharedObj.livepeerProc = livepeerProc;

            livepeerProc.on('close', (code) => {
                log.info(`livepeer child process exited with code ${code}`);
                sender.send('notifier', { error: 2 });
            });

            log.info('Livepeer running on port 8935')
        }
    })
}

const stopLivepeer = () => new Promise((resolve) => {
    log.info('Stopping Livepeer')
    const livepeerProc = global.sharedObj.livepeerProc
    if (livepeerProc != null && livepeerProc !== 'local') {
        log.info(`Sending SIGTERM to ${livepeerProc.pid}`)
        global.sharedObj.livepeerProc.kill()
        global.sharedObj.livepeerProc = null;
    }
    resolve('LivePeer Closed');
})

const resetLivepeer = (sender) => {
    log.info('ResetLivepeer - Deleting Livepeer datadir')

    rimraf(`${homeDir}/Livepeer/livepeernet/`, () => { log.info('Removed livepeer dir') })
    shell.mkdir('-p', `${homeDir}/Livepeer/livepeernet/`);
    stopLivepeer()

    const err = startLivepeer(sender)
    if (err != null) {
        return err
    }
}

const createStream = (sender) => new Promise((resolve, reject) => {
    request(`http://localhost:${httpPort}/createStream`, (err, res, body) => {
        if (err != null) {
            sender.send('notifier', { error: 4 });
            reject({ message: 'Having problem connecting to Livepeer.  Make sure your local node is running.', buttons: ['OK'] })
        }
        resolve({ rtmpStrmID: JSON.parse(body).streamID });
    });
})

const getHlsStrmID = (sender) => {
    request(`http://localhost:${httpPort}/localStreams`, (err, res, body) => {
        if (err != null) {
            sender.send('notifier', { error: 4 });
            return;
        }

        const streams = JSON.parse(body);
        let hlsStrmID;

        streams.forEach((s) => {
            if (s.source === 'local' && s.format === 'hls') {
                hlsStrmID = s.streamID;
            }
        })

        if (hlsStrmID == null) {
            setTimeout(() => getHlsStrmID(sender), 1000)
            return
        }

        sender.send('broadcast', { hlsStrmID });
    });
}


const getVideo = ({ strmID }) => new Promise((resolve, reject) => {
    request(`http://localhost:${httpPort}/stream/${strmID}.m3u8`, (err, res, body) => {
        if (!body) {
            reject({ error: 1 })
            return;
        }
        resolve({ strmID });
    });
})


export default { windowLivepeer: { startLivepeer, stopLivepeer, resetLivepeer, createStream, getHlsStrmID, getVideo } }
