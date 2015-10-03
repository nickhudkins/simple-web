/* globals __INITIAL_STATE__:true */

import { createStore, combineReducers, compose } from 'redux';
import * as reducers from './reducers';
import { devTools } from 'redux-devtools';

const reducer = combineReducers(reducers);
const store = compose(
  devTools()
)(createStore)(reducer);


// const reducer = combineReducers(reducers);
// const store = compose(
//   devTools()
// )(createStore)(reducer, __INITIAL_STATE__);

export default store;
