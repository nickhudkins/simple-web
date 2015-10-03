import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as CounterActions from 'lib/actions/CounterActions';

@connect((state) => ({
    counter: state.Counter.get('counter'),
  })
)
export default class CounterExample extends React.Component {
  static propTypes = {
    counter: PropTypes.number
  }

  handleClick() {
    this.props.dispatch(
      CounterActions.add(1)
    );
  }

  render() {
    const { counter, ...other} = this.props;
    return (
      <div>
        <Link to="/">Go Home</Link>
        <h1>Welcome to the Counter Example</h1>
        <div>Hello Counter! ({counter}). <button onClick={::this.handleClick}>+</button></div>
      </div>
    );
  }
}
