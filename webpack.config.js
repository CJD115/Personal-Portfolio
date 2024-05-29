const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 1234,
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
        },
    },
    mode: 'development',
};