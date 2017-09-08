/*
    Listener to dialog bettween dependencies (LivePeer, FFMpeg, Electron) and the app
    @return a events received in the stores
*/

import { ipcMain } from 'electron';
import log from 'electron-log';
import request from 'request';
import { apiFFMpeg, apiLivepeer } from './';
import Logging from '../logging';
import { main } from '../config/config';

const { httpPort } = main;

export const electronEvents = (app, mainWindow, api) => {
    // Start logging
    Logging.setLogging();

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


    // Close properly
    const close = () => {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        log.info('All windows closed.  Shutting down FFMpeg and Livepeer...')

        api.stopFFMpeg().then(() => {
            api.stopLivepeer().then(() => {
                clearInterval(checkIfRunning);
                mainWindow.close();
            })
        });
    }

    /*
        Send bug report
    */
    ipcMain.on('sendBugReport', () => {
        // windowLogging.sendBugReport()
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

    ipcMain.on('close', () => close());
    app.on('will-quit', () => close());
}
