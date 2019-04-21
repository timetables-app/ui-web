import { History } from 'history';

export const SUBMIT_FORM_START = 'TT/SUBMIT_FORM_START';
export const SUBMIT_FORM_SUCCESS = 'TT/SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_ERROR = 'TT/SUBMIT_FORM_ERROR';

export function isSubmitFormSuccessRedirect(
  action: any
): action is SubmitFormSuccessRedirect {
  return (
    action &&
    action.type &&
    action.type === SUBMIT_FORM_SUCCESS &&
    action.redirect
  );
}

interface SubmitFormStart {
  type: typeof SUBMIT_FORM_START;
}

type SubmitFormSuccess = SubmitFormSuccessRaw | SubmitFormSuccessRedirect;

interface SubmitFormSuccessRaw {
  type: typeof SUBMIT_FORM_SUCCESS;
}

export interface SubmitFormSuccessRedirect {
  type: typeof SUBMIT_FORM_SUCCESS;
  redirect: {
    path: string;
    history: History;
  };
}

interface SubmitFormError {
  type: typeof SUBMIT_FORM_ERROR;
}

export type FormActionTypes =
  | SubmitFormStart
  | SubmitFormSuccess
  | SubmitFormError;
