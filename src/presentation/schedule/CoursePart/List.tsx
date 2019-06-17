import { IconButton, Tooltip } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTable from '../../framework/DataTable';
import { setTitle } from '../../framework/title';

const List: FunctionComponent<Props> = ({ setTitle: dispatchSetTitle }) => {
  dispatchSetTitle('Elementy kursów');
  return (
    <DataTable
      title="Elementy kursów"
      url="http://localhost:8080/courseParts"
      columns={[
        { name: 'source', label: 'Początek' },
        { name: 'sourceTime', label: 'Czas początku' },
        { name: 'destination', label: 'Cel' },
        { name: 'destinationTime', label: 'Czas celu' },
        { name: 'lineNumber', label: 'Numer linii' },
        { name: 'vehicleType', label: 'Typ pojazdu' },
        // { name: 'validFrom', label: 'Rozkład ważny od' },
        // { name: 'validUntil', label: 'Rozkład ważny do' },
        { name: 'supportedCompany', label: 'Firma obsługująca' }
      ]}
      customToolbar={toolbar}
      dataAdapter={adapter}
    />
  );
};

const toolbar = () => (
  <Tooltip title="Dodaj">
    <IconButton {...{ component: Link, to: '/course-parts/new' } as any}>
      <AddCircleOutline />
    </IconButton>
  </Tooltip>
);

const adapter = (data: any) => data._embedded.courseParts;

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
