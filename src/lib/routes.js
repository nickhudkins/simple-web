import React from 'react';
import { Route } from 'react-router';
import { App, Foo } from './components';

const routes = (
  <Route path="/" component={ App }>
    <Route path="foo" component={ Foo } />
  </Route>
);

export default routes;
