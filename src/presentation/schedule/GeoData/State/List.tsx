import React from 'react';
import DataTable from '../../../framework/DataTable';

const List = () => {
  return (
    <DataTable
      title="Województwa"
      url="http://localhost:8080/states"
      columns={[
        { name: 'name', label: 'Nazwa' },
        { name: 'code', label: 'Kod' },
        { name: 'country', label: 'Kraj', options: { sort: false } }
      ]}
      dataAdapter={adapter}
    />
  );
};

const adapter = (data: any) => data._embedded.states;

export default List;
