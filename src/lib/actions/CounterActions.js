import ActionTypes from 'lib/const/ActionTypes';

export function add(amount) {
  return {
    type: ActionTypes.Counter.add,
    amount
  };
}
