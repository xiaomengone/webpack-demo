const base =require('./webpack.config.base.js')
module.exports = {
  ...base,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  }
};