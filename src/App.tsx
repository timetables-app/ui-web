import React from 'react';
import Layout from './app/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {SearchMap} from './search';
import {CountryList} from './schedule/Country';

function App() {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={SearchMap}/>
                    <Route path="/countries" exact component={CountryList}/>
                </Switch>
            </Layout>
        </BrowserRouter>

    );
}

export default App;
