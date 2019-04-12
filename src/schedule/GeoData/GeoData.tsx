import { AppBar, Tab, Tabs } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const GeoData: FunctionComponent<RouteComponentProps<{}>> = ({
  location: { pathname }
}) => {
  return (
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
  );
};

export default withRouter(GeoData);
