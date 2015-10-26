var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.plugins = [
  new ExtractTextPlugin('[name].css'),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.DefinePlugin({
    __REDUX_DEBUG__: JSON.stringify(JSON.parse(process.env.REDUX_DEBUG || 'false'))
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
];

config.module.loaders = config.module.loaders.concat([
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!less'),
  }
]);

module.exports = config;
