import path from 'path';
import express from 'express';

import React from 'react'; //eslint-disable-line
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from '../lib/routes';

let clc = require('cli-color');

let app = express();
app.set('port', (process.env.PORT || 3000));

const STATIC_PREFIX = '/static';

export default (env, config) => {

  if (env === 'development') {
    const webpack = require('webpack');
    let compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));

  } else {

    app.use(STATIC_PREFIX, express.static(path.join('dist')));

  }

  app.get('*', function(req, res) {
    const extraHead = env === 'production'
      ? `<link rel="stylesheet" href="${STATIC_PREFIX}/app.css" charset="utf-8">`
      : ``;
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const renderedContent = renderToString(<RoutingContext {...renderProps} />);
        res.status(200).send(`
            <!doctype html>
            <html>
              <head>
                <title>React Transform Boilerplate</title>
                ${extraHead}
              </head>
              <body>
                <div id='root'>${renderedContent}</div>
                <script src="/static/app.bundle.js"></script>
              </body>
            </html>
        `);
      } else {
        res.status(404).send('Not found');
      }
    });
  });

  app.listen(app.get('port'), '0.0.0.0', function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(
      clc.yellow('**********************************************************')
    );
    console.log(clc.yellow('*   ') + '🚀  ' +
     clc.green('SERVER CREATED') +
     ' | ' +
     clc.yellow('HOST:') + clc.magenta('0.0.0.0') +
     ' | ' +
     clc.yellow('PORT:') + clc.magenta(app.get('port')) +
     '  🚀' + clc.yellow('    *'));
     console.log(
       clc.yellow('**********************************************************')
     );
     console.log('\n👍  ' + clc.yellow('YOU DID IT!') + '\n');
  });
};
