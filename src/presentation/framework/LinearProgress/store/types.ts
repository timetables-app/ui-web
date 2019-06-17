export const INCREMENT_PROGRESS = 'TT/INCREMENT_PROGRESS';
export const DECREMENT_PROGRESS = 'TT/DECREMENT_PROGRESS';

interface IncrementProgress {
  type: typeof INCREMENT_PROGRESS;
}

interface DecrementProgress {
  type: typeof DECREMENT_PROGRESS;
}

export type ProgressActionTypes = IncrementProgress | DecrementProgress;
