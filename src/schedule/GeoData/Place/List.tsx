import { IconButton, Tooltip } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../../../DataTable';

const List = () => {
  return (
    <DataTable
      title="Miejsca"
      url="http://localhost:8080/places"
      columns={[
        { name: 'name', label: 'Nazwa' },
        { name: 'locality', label: 'Miejscowość', options: { sort: false } },
        { name: 'region', label: 'Powiat', options: { sort: false } },
        { name: 'state', label: 'Województwo', options: { sort: false } },
        { name: 'country', label: 'Kraj', options: { sort: false } }
      ]}
      customToolbar={toolbar}
      dataAdapter={adapter}
    />
  );
};

const toolbar = () => (
  <Tooltip title="Dodaj">
    <IconButton {...{ component: Link, to: '/geodata/places/new' } as any}>
      <AddCircleOutline />
    </IconButton>
  </Tooltip>
);

const adapter = (data: any) => data._embedded.places;

export default List;
