import { SET_TITLE, TitleActionTypes } from './types';

const initialState = '';

export function titleReducer(state = initialState, action: TitleActionTypes) {
  if (action.type === SET_TITLE) {
    return action.title;
  }

  return state;
}
