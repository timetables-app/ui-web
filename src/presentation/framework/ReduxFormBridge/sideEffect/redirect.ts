import { call, takeLatest } from 'redux-saga/effects';
import {
  isSubmitFormSuccessRedirect,
  SubmitFormSuccessRedirect
} from '../store/types';

export default function*() {
  yield takeLatest(isSubmitFormSuccessRedirect, function*(
    action: SubmitFormSuccessRedirect
  ) {
    const {
      redirect: { history, path }
    } = action;
    yield call(history.push, { pathname: path });
  });
}
