const { resolve } = require('path');
const nodeExternals = require("webpack-node-externals");
const baseCssLoaders = require("./config/cssLoader.js");

module.exports ={
    mode:'development',
    target: 'node',
    entry: resolve("src/web/index.server.tsx"),
    output:{
        // filename: 'server.js',
        path: resolve('src/server/dist'),
        libraryTarget: 'commonjs2'
    },  
    resolve: {
        alias: {
            "@pages": resolve("src/web/pages"),
            "@components": resolve("src/web/components"),
            "@store": resolve("src/web/store")
        },
        extensions: ['.js','.jsx', '.ts', '.tsx']
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js)?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                include: [resolve("src")],
                exclude: /node_modules/,
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    // ...prodCssLoader,
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
}