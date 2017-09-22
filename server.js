/* Developement server */
/* eslint no-console: 0 */

import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import path from 'path'

let config;

if (process.env.WEB) {
    config = require('./config/webpack.config.web');
} else {
    config = require('./config/webpack.config.dev');
}

const app = express()
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
})

app.use(devMiddleware)

app.use(webpackHotMiddleware(compiler))

const server = app.listen(PORT, 'localhost', err => {
    if (err) return console.error(err)

    console.log(`Listening at http://localhost:${PORT}`)
});

if (process.env.WEB) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'app/index.html'));
    });
}


process.on('SIGTERM', () => {
    console.log('Stopping dev server')
    devMiddleware.close()
    server.close(() => process.exit(0))
})


//
// const express = require('express');
// const path =  require('path');
// const app = express();
// const port = process.env.PORT || 3000;
//
// if (process.env.NODE_ENV !==  'production') {
//
//   var webpackDevMiddleware = require("webpack-dev-middleware");
//   var webpack = require("webpack");
//   var config = require('./../webpack.config');
//   var compiler = webpack(config);
//   app.use(webpackDevMiddleware(compiler, {
//     publicPath : config.output.publicPath,
//   }));
//
// } else {
//
//   app.use(express.static(path.resolve(__dirname + '/../dist/')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
//   });
//
// }
//
// app.listen(port, () => console.log('Started on port:', port));
