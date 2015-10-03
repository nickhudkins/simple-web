import path from 'path';
import express from 'express';
import webpack from 'webpack';
import nunjucks from 'nunjucks';
var clc = require('cli-color');

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
    res.render('base.html', { 'env': env });
  });

  app.listen(3000, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('🚀  ' +
     clc.green('SERVER CREATED') +
     ' | ' +
     clc.yellow('HOST: ') + clc.magenta('localhost') +
     ' | ' +
     clc.yellow('PORT:') + clc.magenta('3000') +
     '  🚀');
  });
};

export default makeServer;
