const path = require('path');

module.exports = {
    target: 'node',
    resolve: {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "path": require.resolve("path-browserify"),
            "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
        }
    },
    entry: './src/index.js', // Your entry point
    output: {
        filename: 'bundle.js', // Output bundle filename
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    }
};

