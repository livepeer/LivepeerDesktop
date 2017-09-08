/*
    Listener to dialog bettween dependencies (LivePeer, FFMpeg, Electron) and the app
    @return a events received in the stores
*/

import { ipcMain } from 'electron';
import { apiLivepeer } from '../api';

export const livepperEvents = (api, emitter) => {
    /*
        Start LivePeer
    */
    ipcMain.on('startLivepeer', () => {
        api.startLivepeer()
    })

    /*
        Reset LivePeer
    */
    ipcMain.on('resetLivepeer', () => {
        api.resetLivepeer()
    })

    /*
        Toggle the player state
    */
    ipcMain.on('play', (event, arg) => {
        const { strmID } = arg;
        if (strmID) {
            // create a stream, then startFFMpeg
            api.getVideo({ strmID }).then(() => {
                const videoURL = `http://localhost:${httpPort}/stream/${strmID}.m3u8`;
                event.sender.send('play', { videoURL });
                /**/
            }).catch((err) => event.sender.send('notifier', err));
        } else if (!strmID) {
            event.sender.send('play', { strmID: 0 });
        }
    })


    api.on('notifier', (args) => {
        emitter.send('notifier', args);
    })
}
