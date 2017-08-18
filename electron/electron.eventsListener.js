/*
    Listener to dialog bettween dependencies (LivePeer, FFMpeg, Electron) and the app
    @return a events received in the stores
*/

import { ipcMain } from 'electron';
import log from 'electron-log';
import request from 'request';
import { windowFFMpeg, windowLivepeer, windowLogging } from './';
import { main } from '../config/config';

const { httpPort } = main;


export const listener = (app, mainWindow) => {
    // Start logging
    windowLogging.setLogging();

    const checkIfRunning = setInterval(
    () => {
        request(`http://localhost:${httpPort}/peersCount`, (err, res, body) => {
            if (err != null) {
                err.code === 'ECONNREFUSED' && mainWindow.webContents.send('loading', { type: 'add', key: 1 });
                return
            }
            const peerCount = JSON.parse(body).count;
            mainWindow.webContents.send('loading', { type: 'delete', key: 1 });
            mainWindow.webContents.send('peerCount', { peerCount });
        })
    }, 1500);

    /*
        Toggle the broadcaster state
    */
    ipcMain.on('broadcast', (event, arg) => {
        const { fromState } = arg;
        const sender = event.sender;
        if (!fromState) {
            // create a stream, then startFFMpeg
            windowFFMpeg.startFFMpeg(sender).then(() => {
                windowLivepeer.getHlsStrmID(sender);
            }).catch((err) => console.error(err));
        } else if (fromState) {
            windowFFMpeg.stopFFMpeg();
            event.sender.send('broadcast', 0);
        }
    })

    /*
        Toggle the player state
    */
    ipcMain.on('play', (event, arg) => {
        const { strmID } = arg;
        if (strmID) {
            // create a stream, then startFFMpeg
            windowLivepeer.getVideo({ strmID }).then(() => {
                const videoURL = `http://localhost:${httpPort}/stream/${strmID}.m3u8`;
                event.sender.send('play', { videoURL });
                /**/
            }).catch((err) => event.sender.send('notifier', err));
        } else if (!strmID) {
            event.sender.send('play', { strmID: 0 });
        }
    })

    /*
        Send bug report
    */
    ipcMain.on('sendBugReport', () => {
        // windowLogging.sendBugReport()
    })

    /*
        Start LivePeer
    */
    ipcMain.on('startLivepeer', (event) => {
        windowLivepeer.startLivepeer(event.sender)
    })

    /*
        Reset LivePeer
    */
    ipcMain.on('resetLivepeer', (event) => {
        windowLivepeer.resetLivepeer(event.sender)
    })

    /*
        Forward loading from the app to the LoaderStore
    */
    ipcMain.on('loading', (event, arg) => event.sender.send('loading', arg));


    /*
        Forward notifier from the app to the LoaderStore
    */
    ipcMain.on('notifier', (event, arg) => event.sender.send('notifier', arg));


    /*
        Refresh window
    */

    ipcMain.on('criticalRefresh', () => {
        windowLogging.sendBugReport().then(() => mainWindow.reload())
    });


    /*
        App restart
    */


    ipcMain.on('restart', () => {
        app.relaunch();
        app.exit();
    });

    /*
        Toggle the fullscreen mode
    */
    ipcMain.on('toggle-fullscreen-editor-window', () => {
        mainWindow.setFullScreen(!mainWindow.isFullScreen())
    });

    /*
        Minimize window
    */

    ipcMain.on('minimize', () => mainWindow.minimize());

    /*
        Close window
    */

    ipcMain.on('close', () => {
        /* Remove interval to prevent sending events on a destroyed window :-) */
        clearInterval(checkIfRunning);
        mainWindow.close();
    });
}
