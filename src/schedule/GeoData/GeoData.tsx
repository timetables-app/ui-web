import { AppBar, Tab, Tabs } from '@material-ui/core';
import React from 'react';

const GeoData = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      style={{ marginTop: '-8px' }}
    >
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Miejsca" />
        <Tab label="Miejscowości" />
        <Tab label="Powiaty" />
        <Tab label="Województwa" />
        <Tab label="Kraje" />
      </Tabs>
    </AppBar>
  );
};

export default GeoData;
