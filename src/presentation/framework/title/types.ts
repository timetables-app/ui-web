export const SET_TITLE = 'TT/SET_TITLE';

interface SetTitle {
  type: typeof SET_TITLE;
  title: string;
}

export type TitleActionTypes = SetTitle;
