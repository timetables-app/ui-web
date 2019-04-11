export const SET_APP_BAR_TITLE = 'TT/SET_APP_BAR_TITLE';

export interface SetAppBarTitleAction {
  readonly type: typeof SET_APP_BAR_TITLE;
  readonly payload: string;
}

export const setAppBarTitleActionCreator = (
  title: string
): SetAppBarTitleAction => ({
  payload: title,
  type: SET_APP_BAR_TITLE
});
