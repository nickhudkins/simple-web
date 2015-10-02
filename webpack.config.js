var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      './src/assets/css/app',
      './src/client/entry'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    //'' is a necessary extension
    root: [
      path.join(__dirname, 'src'),
      /*
      Friendly CSS Modules!
      Add src/assets/css/css-modules/
      so that import 'styles/foo.(less|styl|sass|scss)' can resolve
      to src/assets/css/css-modules/styles/foo...
      */
      path.join(__dirname, 'src', 'assets', 'css', 'css-modules'),
    ],
    modulesDirectories: [
      'node_modules',
      'css-modules', //Friendly CSS Modules! (See config.resolve.root...)
    ],
    extensions: ['', '.js', '.json', '.less'],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!less'),
      }
    ]
  }
};
