import Immutable from 'immutable';
import ActionTypes from 'lib/const/ActionTypes';
import createReducer from 'lib/util/createReducer';

const initialState = Immutable.fromJS({ counter: 0 });

export default createReducer(initialState, {
  [ActionTypes.Counter.add](state, { amount }) {
    const newCounter = state.get('counter') + amount;
    return state.set('counter', newCounter);
  }
});
