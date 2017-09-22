/*
    Listener to dialog bettween dependencies (LivePeer, FFMpeg, Electron) and the app
    @return a events received in the stores
*/

export const livepeerEvents = ({ api, emitter, listener, config }) => {
    const { httpPort } = config;

    /*
        Listen for API callbacks
    */
    api.on('notifier', (args) => {
        emitter.send('notifier', args);
    })

    /*
        Start LivePeer
    */
    listener.on('startLivepeer', () => {
        api.startLivepeer()
    })

    /*
        Reset LivePeer
    */
    listener.on('resetLivepeer', () => {
        api.resetLivepeer()
    })

    /*
        Toggle the player state
    */
    listener.on('play', (event, arg) => {
        const { strmID } = arg;
        if (strmID) {
            // create a stream, then startFFMpeg
            api.getVideo({ strmID }).then(() => {
                const videoURL = `http://localhost:${httpPort}/stream/${strmID}.m3u8`;
                emitter.send('play', { videoURL });
                /**/
            }).catch((err) => event.sender.send('notifier', err));
        } else if (!strmID) {
            emitter.send('play', { strmID: 0 });
        }
    })
}
