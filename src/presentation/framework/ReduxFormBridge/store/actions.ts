import { History } from 'history';
import {
  FormActionTypes,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS
} from './types';

export function submitFormStart(): FormActionTypes {
  return {
    type: SUBMIT_FORM_START
  };
}

export function submitFormSuccess(redirect?: {
  path: string;
  history: History;
}): FormActionTypes {
  return {
    redirect,
    type: SUBMIT_FORM_SUCCESS
  };
}

export function submitFormError(): FormActionTypes {
  return {
    type: SUBMIT_FORM_ERROR
  };
}
