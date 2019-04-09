import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import Layout from './app/Layout';
import appBarTitle from './app/reducer/appBarTitle';
import { CountryList } from './schedule/Country';
import { SearchMap } from './search';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={SearchMap} />
            <Route path="/countries" exact component={CountryList} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

const typedWindow = window as any;

const store = createStore(
  combineReducers({ appBarTitle }),
  undefined,
  typeof typedWindow !== 'undefined' && typedWindow.__REDUX_DEVTOOLS_EXTENSION__
    ? typedWindow.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export default App;
