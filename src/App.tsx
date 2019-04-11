import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import Layout, { appBarTitleReducer } from './Layout';
import { GeoData } from './schedule';
import { SearchMap } from './search';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={SearchMap} />
            <Route path="/geodata" exact component={GeoData} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

const typedWindow = window as any;

const store = createStore(
  combineReducers({ appBarTitle: appBarTitleReducer }),
  undefined,
  typeof typedWindow !== 'undefined' && typedWindow.__REDUX_DEVTOOLS_EXTENSION__
    ? typedWindow.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export default App;
