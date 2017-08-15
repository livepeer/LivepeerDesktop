/*
    Logging
*/


const fs = require('fs');
const shell = require('shelljs');

const setLogging = () => {
  // Same as for console transport
    log.transports.file.level = 'info';
    log.transports.file.format = '{h}:{i}:{s}:{ms} {text}';

  // Set approximate maximum log size in bytes. When it exceeds,
  // the archived log will be saved as the log.old.log file
    log.transports.file.maxSize = 5 * 1024 * 1024;

  // Write to this file, must be set before first logging
  // log.transports.file.file = __dirname + '/log.txt';
    log.transports.file.file = `${homeDir}/Livepeer/log.txt`;

  // fs.createWriteStream options, must be set before first logging
    log.transports.file.streamConfig = { flags: 'w' };

  // set existed file stream
    if (!fs.existsSync(`${homeDir}/Livepeer/`)) {
        console.log('Making Logging Dir')
        shell.mkdir('-p', `${homeDir}/Livepeer/`);
    }
  // Remove log file if it's too big
    if (fs.existsSync(`${homeDir}/Livepeer/log.txt`)) {
        const stats = fs.statSync(`${homeDir}/Livepeer/log.txt`)
        if (stats.size > 10 * 1000 * 1000) {
            shell.rm(`${homeDir}/Livepeer/log.txt`)
        }
    }
    log.transports.file.stream = fs.createWriteStream(`${homeDir}/Livepeer/log.txt`, { flags: 'a' });

    log.transports.file.appName = 'LivepeerDesktop';
};

const sendBugReport = () => {
    log.info('Sending logfile to Livepeer')

    const api_key = 'key-b3ca6551d733367cdb89b04ee6b51f08';
    const domain = 'sandboxd3a92ba5697e455bb770bf0142cdf741.mailgun.org';
  // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    let
      // Local ip address that we're trying to calculate
        address,
      // Provides a few basic operating-system related utility functions (built-in)
        os = require('os'),
      // Network interfaces
        ifaces = os.networkInterfaces();

    for (const dev in ifaces) {
    // ... and find the one that matches the criteria
        const iface = ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false);
        if (iface.length > 0) address = iface[0].address;
    }


  // fs.readFile( __dirname + '/log.txt', function (err, data) {
    fs.readFile(`${homeDir}/Livepeer/log.txt`, (err, data) => {
        if (err) {
            throw err;
        }

        const res = {
            from: `Bug Reporter ${address} <user@sandboxd3a92ba5697e455bb770bf0142cdf741.mailgun.org>`,
            to: 'eric@livepeer.org',
            subject: 'Sending Bug Report',
            text: data.toString()
        };

    // mailgun.messages().send(res, function (error, body) {
    //   log.info(body);
    // });
    })
}


export default { windowLogging: { setLogging, sendBugReport } }
