/*
    Listener to dialog bettween dependencies (LivePeer, FFMpeg, Electron) and the app
    @return a events received in the stores
*/

import { ipcMain } from 'electron';
import { apiLivepeer } from '../api';


export const ffmpegEvents = (api, emitter) => {
    /*
        Toggle the broadcaster state
    */
    ipcMain.on('broadcast', (event, arg) => {
        const { fromState } = arg;
        const sender = event.sender;
        if (!fromState) {
                // create a stream, then startFFMpeg
            api.startFFMpeg(sender).then(() => {
                api.getHlsStrmID(sender);
            }).catch((err) => console.error(err));
        } else if (fromState) {
            api.stopFFMpeg();
            event.sender.send('broadcast', 0);
        }
    })

    api.on('broadcast', (args) => { emitter.send('broadcast', args) })
}
