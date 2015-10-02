import { Router } from 'react-router';
import React, { PropTypes } from 'react';
import routes from './routes';
import { createHistory } from 'history';

class App extends React.Component {
  render () {
    return (
      <Router history={createHistory()}>
        { routes }
      </Router>
    );
  }
}

export default App;
