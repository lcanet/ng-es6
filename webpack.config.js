var path = require('path');
var loader = require('babel-loader');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, ''),
                loader: 'babel-loader' }
        ]
    }
};