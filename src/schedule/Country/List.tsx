import MUIDataTable from 'mui-datatables';
import React from 'react';
import muiDataTablesPl from '../../app/muiDataTablesPl';

function List() {
  return (
    <div style={{ padding: 24 }}>
      <MUIDataTable
        title="Kraje"
        columns={[
          { name: 'id', label: 'Id' },
          { name: 'iso', label: 'Iso' },
          { name: 'iso3', label: 'Iso3' },
          { name: 'name', label: 'Nazwa' }
        ]}
        data={[
          { id: 1, iso: 'PL', iso3: 'POL', name: 'Poland' },
          { id: 2, iso: 'DE', iso3: 'DEU', name: 'Germany' },
          { id: 3, iso: 'CZ', iso3: 'CZE', name: 'Czechia' },
          { id: 4, iso: 'SK', iso3: 'SVK', name: 'Slovakia' },
          { id: 5, iso: 'FR', iso3: 'FRA', name: 'France' }
        ]}
        options={{
          filterType: 'textField',
          onTableChange: (action, state) => console.log(action, state),
          serverSide: true,
          textLabels: muiDataTablesPl
        }}
      />
    </div>
  );
}

export default List;
