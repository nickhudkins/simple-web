var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

config.devtool = 'eval';
config.entry.app.unshift('webpack-hot-middleware/client');

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

config.module.loaders = config.module.loaders.concat([
  {
    test: /\.less$/,
    loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!less',
  }
]);

module.exports = config;
