import {
  DECREMENT_PROGRESS,
  INCREMENT_PROGRESS,
  ProgressActionTypes
} from './types';

const initialState = 0;

export function progressReducer(
  state = initialState,
  action: ProgressActionTypes
) {
  switch (action.type) {
    case INCREMENT_PROGRESS:
      return ++state;
    case DECREMENT_PROGRESS:
      return Math.max(0, --state);
    default:
      return state;
  }
}
