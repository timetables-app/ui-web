import React from 'react';
import DataTable from '../../DataTable';

const List = () => {
  return (
      <DataTable
          title="Firmy"
          url="http://localhost:8080/companies"
          columns={[
            { name: 'id', label: 'Id' },
            { name: 'name', label: 'Nazwa' },
            { name: 'phone', label: 'Telefon' },
            { name: 'founded', label: 'Założona w' },
            { name: 'registered', label: 'Zarejestrowana w' },
            { name: 'approved', label: 'Zatwierdzona' },
          ]}
          dataAdapter={adapter}
          pageDataAdapter={pageAdapter}
      />
  );
};

const adapter = (data: any) => data.content;
const pageAdapter = (data: any) => data.totalElements;

export default List;
