import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

export default class AppContainer extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render () {
    const { children } = this.props;
    return (
      <div id="app-container">
        <Provider store={ store }>
          { children }
        </Provider>
      </div>
    );
  }
}
