/*
    Listener to dialog bettween dependencies (LivePeer, FFMpeg, Electron) and the app
    @return a events received in the stores
*/


export const ffmpegEvents = ({ api, emitter, listener }) => {
    /*
        Toggle the broadcaster state
    */
    listener.on('broadcast', (event, arg) => {
        const { fromState } = arg;
        const sender = event.sender;
        if (!fromState) {
                // create a stream, then startFFMpeg
            api.startFFMpeg().then(() => {
                api.getHlsStrmID();
            }).catch((err) => console.error(err));
        } else if (fromState) {
            api.stopFFMpeg();
            event.sender.send('broadcast', 0);
        }
    })

    api.on('broadcast', (args) => { emitter.send('broadcast', args) })
}
