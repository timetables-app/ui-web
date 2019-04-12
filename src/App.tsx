import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import {
  Carrier,
  CompanyList,
  Impediment,
  LogIn,
  LostAndFound,
  MyCompany,
  Register
} from './community';
import Layout, { appBarTitleReducer, linearProgressReducer } from './Layout';
import { GeoData, Line, Timetable, Vehicle } from './schedule';
import { SearchMap } from './search';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/login" exact component={LogIn} />
            <Route path="/register" exact component={Register} />

            <Route path="/" exact component={SearchMap} />
            <Route path="/impediments" exact component={Impediment} />
            <Route path="/carriers" exact component={Carrier} />
            <Route path="/lost-and-found" exact component={LostAndFound} />

            <Route path="/my-company" exact component={MyCompany} />
            <Route path="/vehicles" exact component={Vehicle} />
            <Route path="/lines" exact component={Line} />
            <Route path="/timetables" exact component={Timetable} />

            <Route path="/companies" exact component={CompanyList} />
            <Route path="/geodata" component={GeoData} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

const typedWindow = window as any;

const store = createStore(
  combineReducers({
    appBarTitle: appBarTitleReducer,
    linearProgress: linearProgressReducer
  }),
  undefined,
  typeof typedWindow !== 'undefined' && typedWindow.__REDUX_DEVTOOLS_EXTENSION__
    ? typedWindow.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export default App;
