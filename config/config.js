/*
    Configuration store for the dependencies and frame config
*/

const homeDir = require('os').homedir();
const appRootDir = require('app-root-dir').get();

const frameConfig = [
    { framerate: 15, keyint: 75 },
    { framerate: 30, keyint: 150 },
    { framerate: 60, keyint: 300 }
];
const rtmpPort = '1935';
const httpPort = '8935';
const env = process.env.NODE_ENV;

export default {
    main: { homeDir, frameConfig, rtmpPort, httpPort, appRootDir, env }
}
