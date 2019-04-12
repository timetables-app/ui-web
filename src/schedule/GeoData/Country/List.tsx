import React from 'react';
import DataTable from '../../../DataTable';

const List = () => {
  return (
    <DataTable
      title="Kraje"
      url="http://localhost:8080/countries"
      columns={[
        { name: 'iso', label: 'Iso' },
        { name: 'iso3', label: 'Iso3' },
        { name: 'name', label: 'Nazwa' }
      ]}
    />
  );
};

export default List;
