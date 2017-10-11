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
const host = 'http://localhost';
const httpPort = '8935';
const monitorHost = 'http://viz.livepeer.org:8081/metrics';
const env = process.env.NODE_ENV;

export default {
    main: { homeDir, frameConfig, rtmpPort, host, httpPort, monitorHost, appRootDir, env }
}
