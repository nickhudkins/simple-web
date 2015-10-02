import path from 'path';
import express from 'express';
import webpack from 'webpack';
import nunjucks from 'nunjucks';



let app = express();

nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app
});

const makeServer = (env, config) => {

  if (env === 'development') {

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
    res.render('base.html', {'env': process.env.NODE_ENV});
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
