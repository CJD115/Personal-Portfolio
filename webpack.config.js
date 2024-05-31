const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname), // Serve files from the root directory
        },
        compress: true,
        port: 1234,
        historyApiFallback: true, // Ensures SPA routing works correctly
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
        },
    },
    mode: 'development',
};
