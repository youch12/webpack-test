const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'file.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        },


        {
            test: /\.css$/,
            use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'],

        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Custom Title",
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),

    ],

    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new UglifyJSPlugin(),
        new OptimizeCSSAssets()
    );
}