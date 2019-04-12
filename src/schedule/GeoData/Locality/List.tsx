import React from 'react';
import DataTable from '../../../DataTable';

const List = () => {
  return (
    <DataTable
      title="Miejscowości"
      url="http://localhost:8080/localities"
      columns={[
        { name: 'name', label: 'Nazwa' },
        { name: 'region', label: 'Powiat' },
        { name: 'state', label: 'Województwo' },
        { name: 'country', label: 'Kraj' }
      ]}
      dataAdapter={adapter}
    />
  );
};

const adapter = (data: any) => data._embedded.localities;

export default List;
