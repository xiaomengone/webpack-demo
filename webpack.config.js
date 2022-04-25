var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
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
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devtool: 'inline-source-map',
    devServer: {
     contentBase: './dist'
     },
};