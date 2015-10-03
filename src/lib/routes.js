import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, CounterExample } from './components';
import AppContainer from './main/AppContainer';

const routes = (
  <Route path="/" component={ AppContainer }>
    <IndexRoute component={ App } />
    <Route path="counter" component={ CounterExample } />
  </Route>
);

export default routes;
