var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

config.devtool = 'eval';
config.entry.app.unshift('webpack-hot-middleware/client');

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __REDUX_DEBUG__: JSON.stringify(JSON.parse(process.env.REDUX_DEBUG || 'false'))
  })
];

config.module.loaders = config.module.loaders.concat([
  {
    test: /\.less$/,
    loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!less',
  }
]);

module.exports = config;
