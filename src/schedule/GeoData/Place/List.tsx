import React from 'react';
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
      dataAdapter={adapter}
    />
  );
};

const adapter = (data: any) => data._embedded.places;

export default List;
