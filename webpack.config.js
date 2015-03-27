var webpack = require('webpack');

var config = {
    entry: {
        app: [
            'webpack/hot/dev-server', 
            './app/entry.js'
        ]
    },
    output: {
        path: __dirname+'/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/,   loader: "style!css" },
            { test: /\.js$/,    exclude: ["/bower_components/","/node_modules/"], loader: "babel-loader"},
            { test: /\.woff$/,  loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/,   loader: "file-loader" },
            { test: /\.eot$/,   loader: "file-loader" },
            { test: /\.svg$/,   loader: "file-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],
}; 

module.exports = config;
