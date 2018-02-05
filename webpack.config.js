let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: { path: __dirname, filename: 'bundle.js' },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [ "es2015",  "react" ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {modules: true}
                    }
                ]
            }
        ]
    }
};