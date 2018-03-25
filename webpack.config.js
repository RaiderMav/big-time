const path = require('path'),
  webpack = require('webpack'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname + '/dist',
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    }]},
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
