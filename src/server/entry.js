import path from 'path';
import express from 'express';
import webpack from 'webpack';

let app = express();

const makeServer = (config) => {

  if (process.env.NODE_ENV === 'development') {

    let compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
  } else {
    app.use('/static', express.static(path.join('dist')));
  }

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'base.html'));
  });

  app.listen(3000, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://localhost:3000');
  });

};

export default makeServer;
