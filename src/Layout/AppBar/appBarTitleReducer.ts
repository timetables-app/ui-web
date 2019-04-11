import { Reducer } from 'redux';
import { SET_APP_BAR_TITLE } from './appBarTitleAction';

const initialState = 'timetables.app';

const appBarTitleReducer: Reducer<string> = (
  previousState = initialState,
  action
) => {
  if (SET_APP_BAR_TITLE === action.type) {
    return action.payload;
  }

  return previousState;
};

export default appBarTitleReducer;
