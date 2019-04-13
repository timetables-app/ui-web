import React from 'react';
import DataTable from '../../../DataTable';

const List = () => {
  return (
    <DataTable
      title="Miejsca"
      url="http://localhost:8080/places"
      columns={[
        { name: 'name', label: 'Nazwa' },
        { name: 'locality', label: 'Miejscowość' },
        { name: 'region', label: 'Powiat' },
        { name: 'state', label: 'Województwo' },
        { name: 'country', label: 'Kraj' }
      ]}
      dataAdapter={adapter}
    />
  );
};

const adapter = (data: any) => data._embedded.places;

export default List;
