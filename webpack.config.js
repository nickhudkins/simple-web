var path = require('path');

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
    //'' is a necessary extension
    extensions: ['', '.js', '.json', '.less'],
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          stage: 0,
          env: {
            development: {
              plugins: [
                'react-transform'
              ],
              extra: {
                'react-transform': {
                  transforms: [{
                    transform: 'react-transform-hmr',
                    imports: ['react'],
                    locals: ['module']
                  }]
                }
              }
            }
          }
        }
      }
    ]
  }
};
