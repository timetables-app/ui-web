export const SET_APP_BAR_TITLE = 'TT/SET_APP_BAR_TITLE';

export interface SetAppBarTitleAction {
  readonly type: typeof SET_APP_BAR_TITLE;
  readonly payload: string;
}
