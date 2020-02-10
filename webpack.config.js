const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development'
const _isDev = _mode === 'development'
const webpackConfig = require(`./config/webpack.${_mode}.js`);
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackMerge = require("webpack-merge");
const env = require('./config/env');
// css loader
const baseCssLoaders = require("./config/cssLoader.js");
const prodCssLoader = _isDev ? ['style-loader'] : [MiniCssExtractPlugin.loader]

const publicPath = env[_mode].publicPath;

module.exports = webpackMerge( {

    entry: resolve("src/web/index.client.tsx"),
    devtool:'eval-source-map',
    output:{
        publicPath: publicPath
    },  
    resolve: {
        alias: {
            "@pages": resolve("src/web/pages"),
            "@components": resolve("src/web/components"),
            "@store": resolve("src/web/store")
        },
        extensions: ['.js','.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js)?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    ...prodCssLoader,
                    ...baseCssLoaders
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: 'assets/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('src/web/index.html'),
            filename: _isDev ? 'index.html' : resolve(__dirname, 'src/server/views/index.html')
        })
    ]

}, webpackConfig)