import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import merge from 'webpack-merge'
import baseConfig from '../webpack.config.base'

const config = merge(baseConfig, {
    devtool: 'cheap-module-source-map',
    debug: true,
    entry: './app/index-electron',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })],

    target: 'electron-renderer'
})

export default config
