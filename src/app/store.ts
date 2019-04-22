import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { FormReducer, reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import {
  ProgressAppStateSubset,
  progressReducer
} from '../framework/LinearProgress';
import { redirectSideEffect } from '../framework/ReduxFormBridge';
import { TitleAppStateSubset, titleReducer } from '../framework/title';

const typedWindow = window as any;

type State =
  | TitleAppStateSubset
  | ProgressAppStateSubset
  | { form: FormReducer };

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers<State>({
    form: formReducer,
    linearProgress: progressReducer,
    title: titleReducer
  }),
  undefined,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof typedWindow !== 'undefined' &&
      typedWindow.__REDUX_DEVTOOLS_EXTENSION__
      ? typedWindow.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

sagaMiddleware.run(redirectSideEffect);

export default store;
