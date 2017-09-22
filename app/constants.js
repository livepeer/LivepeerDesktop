const CONSTANTS = {
    loading: {
        0: 'App Initialization',
        1: 'Starting Livepeer Node',
        2: 'Camera Aquisition',
        3: 'Start Broadcasting',
        4: 'Starting Streaming Node'
    },
    error: {
        1: {
            message: 'We can\'t play this Stream ID',
            loadingKeys: [4]
        },
        2: {
            message: 'LivePeer exited',
            loadingKeys: [1],
            critical: true
        },
        3: {
            message: 'FFMPeg Broadcast failed',
            critical: true
        },
        4: {
            message: 'Having problem connecting to Livepeer.  Make sure your local node is running.'
        },
        5: {
            message: 'Your camera is busy, release your camera first.',
            critical: true
        }
    },
    webURL: 'http://media.livepeer.org/player.html?strmID='
};

export default CONSTANTS;
