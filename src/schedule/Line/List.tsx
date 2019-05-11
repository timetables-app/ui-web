import { IconButton, Tooltip } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from '../../framework/DataTable';
import { setTitle } from '../../framework/title';

const List: FunctionComponent<Props> = ({ setTitle: dispatchSetTitle }) => {
  dispatchSetTitle('Linie');
  return (
    <DataTable
      title="Linie"
      url="http://localhost:8080/lines"
      columns={[
        { name: 'number', label: 'Numer' },
        { name: 'vehicleType', label: 'Typ pojazdu' }
      ]}
      customToolbar={toolbar}
      dataAdapter={adapter}
    />
  );
};

const toolbar = () => (
  <Tooltip title="Dodaj">
    <IconButton {...{ component: Link, to: '/lines/new' } as any}>
      <AddCircleOutline />
    </IconButton>
  </Tooltip>
);

const adapter = (data: any) => data._embedded.lines;

interface Props {
  setTitle: (title: string) => void;
}

const mapDispatchToProps = {
  setTitle
};

export default connect(
  null,
  mapDispatchToProps
)(List);
