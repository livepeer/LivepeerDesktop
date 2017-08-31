/*
    Bootstrap of Electron 🚀
*/

import { app, BrowserWindow, Menu } from 'electron';
import log from 'electron-log';
import { windowMenu, windowFFMpeg, windowLivepeer, listener } from './electron';

/* Handle binaries paths */
const livepeer = require('livepeer-static').path;
const ffmpeg = require('ffmpeg-static').path;

const paths = { livepeer, ffmpeg };
const transformBinaryPath = (name) => paths[name].replace('bin', `node_modules/${name}-static/bin`).replace('app.asar', 'app.asar.unpacked')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null
let menu

// global shared object
global.sharedObj = { ffmpegProc: null, livepeerProc: null };

// add binaries path
if (process.env.NODE_ENV === 'development') {
    global.livepeerPath = paths.livepeer;
    global.ffmpegPath = paths.ffmpeg;
} else {
    global.livepeerPath = transformBinaryPath('livepeer');
    global.ffmpegPath = transformBinaryPath('ffmpeg');
}

const installExtensions = async () => {
    if (process.env.NODE_ENV === 'development') {
        require('electron-debug')();

        const installer = require('electron-devtools-installer') // eslint-disable-line global-require

        const extensions = ['REACT_DEVELOPER_TOOLS', 'REACT_PERF']

        const forceDownload = !!process.env.UPGRADE_EXTENSIONS
        for (const name of extensions) {
            try {
                await installer.default(installer[name], forceDownload);
      } catch (e) {} // eslint-disable-line
        }
    }
}

app.on('ready', async () => {
    await installExtensions()

    mainWindow = new BrowserWindow({
        width: 1024,
        height: 728,
        frame: false,
        backgroundColor: '#04050A',
        show: false
    })

    mainWindow.loadURL(`file://${__dirname}/app/index.html`)

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show()
        mainWindow.focus()
    });

    mainWindow.on('closed', () => { mainWindow = null })

    mainWindow.on('enter-full-screen', () => {
      // Send async message to renderer process to update the store
        mainWindow.webContents.send('fullscreen-toggled', true);
    });

    mainWindow.on('leave-full-screen', () => {
      // Send async message to renderer process to update the store
        mainWindow.webContents.send('fullscreen-toggled', false);
    });

    listener(app, mainWindow);

    if (process.env.NODE_ENV === 'development') {
        mainWindow.openDevTools()
        mainWindow.webContents.on('context-menu', (e, props) => {
            const { x, y } = props

            Menu.buildFromTemplate([{
                label: 'Inspect element',
                click() {
                    mainWindow.inspectElement(x, y)
                }
            }]).popup(mainWindow)
        });
    }

    menu = Menu.buildFromTemplate(windowMenu);

    if (process.platform === 'darwin') {
        Menu.setApplicationMenu(menu)
    } else {
        mainWindow.setMenu(menu)
    }
})
