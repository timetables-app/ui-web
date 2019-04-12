import { Reducer } from 'redux';
import { DECREMENT_PROGRESS, INCREMENT_PROGRESS } from './actions';

const initialState = 0;

const linearProgressReducer: Reducer<number> = (
  previousState = initialState,
  action
) => {
  switch (action.type) {
    case INCREMENT_PROGRESS:
      return ++previousState;
    case DECREMENT_PROGRESS:
      return Math.max(0, --previousState);
    default:
      return previousState;
  }
};

export default linearProgressReducer;
