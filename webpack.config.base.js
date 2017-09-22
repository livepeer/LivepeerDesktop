import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;

export default {
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, { test: /\.svg$/, loader: 'svg-inline-loader' },
        {
            test: /^((?!\.global).)*\.css$/,
            loader: ExtractTextPlugin.extract(
      'style-loader',
      'postcss-loader'
    )
        }
        ]
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
    // root:[],
        extensions: ['', '.js', '.jsx', '.json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './app/static', to: path.join(__dirname, './dist/static') },
            { from: './app/static', to: path.join(__dirname, './web/static') },
            { from: './app/index.html', to: path.join(__dirname, './web/index.html') }
        ]),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                WEB: JSON.stringify(process.env.WEB)
            }
        })
    ]
}
