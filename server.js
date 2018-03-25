const express = require('express'),
  webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  app = express(),
  config = require('./webpack.config.js'),
  compiler = webpack(config),
  port = process.env.PORT || 3000

// Tell express to use the webpack-dev-middleware
// and use the webpack.config.js configuration file
// as a base
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

// Serve the files on port 3000
app.listen(port, () => {
  console.log(`Example app now listening on port ${port}!\n`)
})
