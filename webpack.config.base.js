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
 module: {
  rules: [
    {
      test: /\.styl$/,
      use: [
        "style-loader",
        "css-loader",
        "stylus-loader"  
      ]
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: { implementation: require('sass')}
        }
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    }
  ]
}
};