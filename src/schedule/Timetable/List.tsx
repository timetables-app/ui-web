import { IconButton, Tooltip } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from '../../framework/DataTable';
import { setTitle } from '../../framework/title';

const List: FunctionComponent<Props> = ({ setTitle: dispatchSetTitle }) => {
  dispatchSetTitle('Rozkłady');
  return (
    <DataTable
      title="Rozkłady jazdy"
      url="http://localhost:8080/timetables"
      columns={[
        { name: 'validFrom', label: 'Ważny od' },
        { name: 'validUntil', label: 'Ważny do' },
        { name: 'supportedCompany', label: 'Firma obsługująca' }
      ]}
      customToolbar={toolbar}
      dataAdapter={adapter}
    />
  );
};

const toolbar = () => (
  <Tooltip title="Dodaj">
    <IconButton {...{ component: Link, to: '/timetables/new' } as any}>
      <AddCircleOutline />
    </IconButton>
  </Tooltip>
);

const adapter = (data: any) => data._embedded.timetables;

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
