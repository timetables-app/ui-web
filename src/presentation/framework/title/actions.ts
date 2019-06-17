import { SET_TITLE, TitleActionTypes } from './types';

export function setTitle(title: string): TitleActionTypes {
  return {
    title,
    type: SET_TITLE
  };
}
