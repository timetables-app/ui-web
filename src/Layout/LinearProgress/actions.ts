export const INCREMENT_PROGRESS = 'TT/INCREMENT_PROGRESS';

export interface IncrementProgressAction {
  readonly type: typeof INCREMENT_PROGRESS;
}

export const incrementProgressActionCreator = (): IncrementProgressAction => ({
  type: INCREMENT_PROGRESS
});

export const DECREMENT_PROGRESS = 'TT/DECREMENT_PROGRESS';

export interface DecrementProgressAction {
  readonly type: typeof DECREMENT_PROGRESS;
}

export const decrementProgressActionCreator = (): DecrementProgressAction => ({
  type: DECREMENT_PROGRESS
});
