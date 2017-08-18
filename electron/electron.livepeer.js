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
    request(`http://localhost:${httpPort}`, (err) => {
        if (err == null) {
            global.sharedObj.livepeerProc = 'local';
            log.info('LivePeer is already running.');
        } else if (global.sharedObj.livepeerProc == null) {
            const args = [
                '-monitor',
                '-monitorhost', 'http://viz.livepeer.org:8081/metrics'];

            const livepeerProc = spawn(global.livepeerPath, args)
            global.sharedObj.livepeerProc = livepeerProc;

            livepeerProc.stdout.on('data', (data) => {
                log.info(`stdout: ${data}`);
            });

            livepeerProc.stderr.on('data', (data) => {
                log.info(`stderr: ${data}`);
            });

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

const getHlsStrmID = (sender) => new Promise((resolve) => {
    request(`http://localhost:${httpPort}/streamID`, (err, res, hlsStrmID) => {
        if (hlsStrmID === '') {
            setTimeout(() => getHlsStrmID(sender), 1000)
            return
        }
        sender.send('broadcast', { hlsStrmID });
        resolve({ hlsStrmID });
    });
});


const getVideo = ({ strmID }) => new Promise((resolve, reject) => {
    request(`http://localhost:${httpPort}/stream/${strmID}.m3u8`, (err, res, body) => {
        if (!body) {
            reject({ error: 1 })
            return;
        }
        resolve({ strmID });
    });
})


export default { windowLivepeer: { startLivepeer, stopLivepeer, resetLivepeer, getHlsStrmID, getVideo } }
