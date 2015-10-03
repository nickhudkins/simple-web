import React from 'react'; //eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import Router from '../lib/main/Router';
import createHistory from 'history/lib/createBrowserHistory';

import '../assets/css/app.less';

render(
  <Router history={ createHistory() } />,
  document.getElementById('root')
);
