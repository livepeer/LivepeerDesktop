/*
    Bootstrap of Electron 🚀
*/

import { app, BrowserWindow, Menu, shell, ipcMain, ipcRenderer } from 'electron';
import log from 'electron-log';
import path from 'path';
import request from 'request';
import { main } from './config/config';
const { httpPort } = main;
import { windowMenu, windowFFMpeg, windowLivepeer, windowLogging, listener } from './electron';


//if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
//}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null
let menu

// global shared object
global.sharedObj = {ffmpegProc: null, livepeerProc: null};

const installExtensions = async () => {
 if (process.env.NODE_ENV === 'development') {
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

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  log.info("All windows closed.  Shutting down FFMpeg and Livepeer...")

  windowFFMpeg.stopFFMpeg().then(() => {
      windowLivepeer.stopLivepeer().then(() => {
          app.quit()
      })
  });

})

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

  listener(app,mainWindow);

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
