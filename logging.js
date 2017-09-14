/*
    Logging
*/

import log from 'electron-log';
import shell from 'shelljs';
import fs from 'fs';
import os from 'os';
import { main } from './config/config';

const { homeDir } = main;
const ifaces = os.networkInterfaces();
const apiKey = 'key-b3ca6551d733367cdb89b04ee6b51f08';
const domain = 'sandboxd3a92ba5697e455bb770bf0142cdf741.mailgun.org';
const mailgun = require('mailgun-js')({ apiKey, domain });


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
        log.info('Making Logging Dir')
        shell.mkdir('-p', `${homeDir}/Livepeer/`);
    }
  // Remove log file
    if (fs.existsSync(`${homeDir}/Livepeer/log.txt`)) {
        shell.rm(`${homeDir}/Livepeer/log.txt`)
    }
    log.transports.file.stream = fs.createWriteStream(`${homeDir}/Livepeer/log.txt`, { flags: 'a' });

    log.transports.file.appName = 'LivepeerDesktop';

    log.info('Logging started')
};

const sendBugReport = () => new Promise((resolve) => {
    log.info('Sending logfile to Livepeer')
  // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  // Local ip address that we're trying to calculate
    let address;
    for (const dev in ifaces) {
    // ... and find the one that matches the criteria
        const iface = ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false);
        if (iface.length > 0) address = iface[0].address;
    }

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

        mailgun.messages().send(res, (error, body) => {
            log.info(body);
            resolve('Bug report sent');
        });
    })
})

export default { Logging: { setLogging, sendBugReport } }
