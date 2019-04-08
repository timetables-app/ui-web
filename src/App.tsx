import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './app/Layout';
import { CountryList } from './schedule/Country';
import { SearchMap } from './search';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={SearchMap} />
          <Route path="/countries" exact component={CountryList} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
