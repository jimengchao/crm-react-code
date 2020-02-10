const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    mode: 'development',
    optimization:{
        nodeEnv: 'development',
        namedModules: true
    },
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        port: 9000,
        quiet: true,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins:[
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
              messages: ['You application is running here http://localhost:9000'],
            },
            clearConsole: true,
        }),
    ]
}