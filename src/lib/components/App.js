import React, { PropTypes } from 'react';

class App extends React.Component {
  render () {
    return (
      <div>
        APP CONTAINER
        { this.props.children }
      </div>
    );
  }
}

export default App;
