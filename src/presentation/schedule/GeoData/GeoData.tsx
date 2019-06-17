import { AppBar, Tab, Tabs } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from 'react-router';
import { Link } from 'react-router-dom';
import { setTitle } from '../../framework/title';
import { CountryList } from './Country';
import { LocalityList } from './Locality';
import { PlaceCreate, PlaceList } from './Place';
import { RegionList } from './Region';
import { StateList } from './State';

const GeoData: FunctionComponent<Props> = ({
  location: { pathname },
  setTitle: dispatchSetTitle
}) => {
  dispatchSetTitle('GeoDane');

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        style={{ marginTop: '-8px' }}
      >
        <Tabs
          value={normalizePathname(pathname)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {[
            { label: 'Miejsca', to: '/geodata/places' },
            { label: 'Miejscowości', to: '/geodata/localities' },
            { label: 'Powiaty', to: '/geodata/regions' },
            { label: 'Województwa', to: '/geodata/states' },
            { label: 'Kraje', to: '/geodata/countries' }
          ].map(({ label, to }, idx) => (
            <Tab
              key={idx}
              label={label}
              value={to}
              {...{ component: Link, to } as any}
            />
          ))}
        </Tabs>
      </AppBar>
      <Switch>
        <Redirect from="/geodata" to="/geodata/places" exact />
        <Route component={PlaceList} exact path="/geodata/places" />
        <Route component={PlaceCreate} exact path="/geodata/places/new" />
        <Route component={LocalityList} exact path="/geodata/localities" />
        <Route component={RegionList} exact path="/geodata/regions" />
        <Route component={StateList} exact path="/geodata/states" />
        <Route component={CountryList} exact path="/geodata/countries" />
      </Switch>
    </>
  );
};

const normalizePathname = (pathname: string) => {
  const splitted = pathname.split('/');
  if (splitted.length < 3) {
    return '/geodata/places';
  }

  return splitted.slice(0, 3).join('/');
};

interface Props extends RouteComponentProps<{}> {
  setTitle: (title: string) => void;
}

const mapDispatchToProps = {
  setTitle
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(GeoData)
);
