/* globals __REDUX_DEBUG__ */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
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
        { __REDUX_DEBUG__ &&
          <DebugPanel top right bottom>
             <DevTools store={ store } monitor={ LogMonitor } />
          </DebugPanel>
        }
      </div>
    );
  }
}
