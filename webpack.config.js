var config = {
    entry: "./src/entry.js",
        output: {
            path: __dirname+'/src',
                filename: "bundle.js"
            },
        module: {
            loaders: [
                { test: /\.css$/, loader: "style!css" }
            ]
        }
}; 

module.exports = config;
