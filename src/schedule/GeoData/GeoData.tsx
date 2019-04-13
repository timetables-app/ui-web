import { AppBar, Tab, Tabs } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { setAppBarTitleActionCreator } from '../../Layout';
import { CountryList } from './Country';
import { LocalityList } from './Locality';
import { PlaceCreate, PlaceList } from './Place';
import { RegionList } from './Region';
import { StateList } from './State';

const GeoData: FunctionComponent<Props> = ({
  location: { pathname },
  setAppBarTitle
}) => {
  setAppBarTitle('GeoDane');

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        style={{ marginTop: '-8px' }}
      >
        <Tabs
          value={pathname}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {[
            { label: 'Miejsca', to: '/geodata' },
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
        <Route component={PlaceList} exact path="/geodata" />
        <Route component={PlaceCreate} exact path="/geodata/places/new" />
        <Route component={LocalityList} exact path="/geodata/localities" />
        <Route component={RegionList} exact path="/geodata/regions" />
        <Route component={StateList} exact path="/geodata/states" />
        <Route component={CountryList} exact path="/geodata/countries" />
      </Switch>
    </>
  );
};

interface Props extends RouteComponentProps<{}> {
  setAppBarTitle: (appBarTitle: string) => void;
}

const mapDispatchToProps = {
  setAppBarTitle: setAppBarTitleActionCreator
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(GeoData)
);
