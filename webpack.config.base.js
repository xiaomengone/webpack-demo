var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'app1',
    template: './src/assets/test.html'
  }),
],
devtool: 'inline-source-map',
devServer: {
 contentBase: './dist'
 },
};