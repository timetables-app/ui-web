import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import moment from 'moment';
// @ts-ignore
import pl from 'moment/locale/pl';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Carrier,
  CompanyList,
  Impediment,
  LogIn,
  LostAndFound,
  MyCompany,
  Register
} from '../community';
import {
  Course,
  CourseCreate,
  CoursePart,
  CoursePartCreate,
  GeoData,
  Line,
  LineCreate,
  Timetable,
  TimetableCreate,
  Vehicle
} from '../schedule';
import { SearchMap } from '../search';
import SearchResult from '../search/SearchResult';
import Layout from './Layout';
import store from './store';

moment.updateLocale('pl', pl);

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
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
              <Route path="/lines/new" exact component={LineCreate} />

              <Route path="/timetables" exact component={Timetable} />
              <Route path="/timetables/new" exact component={TimetableCreate} />

              <Route path="/courses" exact component={Course} />
              <Route path="/courses/new" exact component={CourseCreate} />

              <Route path="/course-parts" exact component={CoursePart} />
              <Route
                path="/course-parts/new"
                exact
                component={CoursePartCreate}
              />

              <Route path="/companies" exact component={CompanyList} />
              <Route path="/geodata" component={GeoData} />

              <Route
                path="/search-result/:srcPlaceId/:destPlaceId/:departureTime"
                component={SearchResult}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
