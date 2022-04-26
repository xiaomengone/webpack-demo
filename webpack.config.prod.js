const base =require('./webpack.config.base.js')
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  ...base,
  plugins: [new HtmlWebpackPlugin({
    title: 'app1',
    template: './src/assets/test.html'
  }),
  new MiniCssExtractPlugin()
  ],
    module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  }
};