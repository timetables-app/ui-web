import { IconButton, Tooltip } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from '../../framework/DataTable';
import { setTitle } from '../../framework/title';

const List: FunctionComponent<Props> = ({ setTitle: dispatchSetTitle }) => {
  dispatchSetTitle('Kursy');
  return (
    <DataTable
      title="Kursy"
      url="http://localhost:8080/courses"
      columns={[
        { name: 'vehicleType', label: 'Typ pojazdu' },
        { name: 'lineNumber', label: 'Numer linii' },
        { name: 'supportedCompany', label: 'Firma obsługująca' }
      ]}
      customToolbar={toolbar}
      dataAdapter={adapter}
    />
  );
};

const toolbar = () => (
  <Tooltip title="Dodaj">
    <IconButton {...{ component: Link, to: '/courses/new' } as any}>
      <AddCircleOutline />
    </IconButton>
  </Tooltip>
);

const adapter = (data: any) => data._embedded.courses;

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
