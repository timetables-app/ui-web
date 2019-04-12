import React from 'react';
import DataTable from '../../../DataTable';

const List = () => {
  return (
    <DataTable
      title="Powiaty"
      url="http://localhost:8080/regions"
      columns={[
        { name: 'name', label: 'Nazwa' },
        { name: 'code', label: 'Kod' },
        { name: 'state', label: 'Województwo' },
        { name: 'country', label: 'Kraj' }
      ]}
      dataAdapter={adapter}
    />
  );
};

const adapter = (data: any) => data._embedded.regions;

export default List;
