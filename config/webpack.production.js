const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { resolve, join } = require('path');
module.exports = {
    mode: 'production',
    output: {
        path: join(__dirname, '../src/server/dist'),
        filename: 'assets/script/[name].[hash:5].js',
        chunkFilename: 'assets/script/[name].[contenthash:5].bundle.js',
    },
    devtool:'source-map',
    optimization:{
        nodeEnv: 'production',
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins:[
        new ManifestPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/style/[name][hash:5].css',
            chunkFilename: 'assets/style/[name].[contenthash:5].css',
            ignoreOrder: false
        }),
    ]
}
