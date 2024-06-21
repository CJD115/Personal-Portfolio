const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'script.js',
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Path to your HTML template file
            filename: 'index.html', // Output HTML filename
            inject: 'body', // Inject scripts into the body or head
        }),
        ],
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
        },
    },
    mode: 'development',
};
