import {
  DECREMENT_PROGRESS,
  INCREMENT_PROGRESS,
  ProgressActionTypes
} from './types';

export function incrementProgress(): ProgressActionTypes {
  return {
    type: INCREMENT_PROGRESS
  };
}

export function decrementProgress(): ProgressActionTypes {
  return {
    type: DECREMENT_PROGRESS
  };
}
