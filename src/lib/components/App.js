import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to Simple Web</h1>
        <p>If you came for the <Link to="/counter">Counter Example</Link> you are in the right place</p>
        { this.props.children }
      </div>
    );
  }
}

export default App;
