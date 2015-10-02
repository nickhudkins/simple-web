var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/assets/css/app',
      './src/client/entry'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
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
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'], // See .babelrc for full config
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.less$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!less',
      }
    ]
  }
};
