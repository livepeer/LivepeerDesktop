/*
    Listener to dialog bettween dependencies (LivePeer, FFMpeg, Electron) and the app
    @return a events received in the stores
*/


export const ffmpegEvents = ({ api, emitter, listener }) => {
    /*
        Listen for API callbacks
    */
    api.on('broadcast', (args) => { emitter.send('broadcast', args) })

    /*
        Toggle the broadcaster state
    */
    listener.on('broadcast', (event, arg) => {
        const { fromState } = arg;
        if (!fromState) {
            api.startFFMpeg().then(() => {
                api.getHlsStrmID();
            }).catch((err) => console.error(err));
        } else if (fromState) {
            api.stopFFMpeg();
            emitter.send('broadcast', 0);
        }
    })
}
