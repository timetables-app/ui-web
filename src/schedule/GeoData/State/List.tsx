import { IconButton, Tooltip } from '@material-ui/core';
import { BugReport } from '@material-ui/icons';
import MuiDataTable from 'mui-datatables';
import React, { FunctionComponent } from 'react';
import i18n from '../../../i18n';

const List: FunctionComponent<{}> = () => {
  return (
    <>
      <div style={{ padding: 24 }}>
        <MuiDataTable
          title="Województwa"
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
            customToolbarSelect: () => (
              <Tooltip title="Oznacz jako nieaktualne">
                <IconButton>
                  <BugReport />
                </IconButton>
              </Tooltip>
            ),
            download: false,
            elevation: 1,
            filterType: 'textField',
            onTableChange: (action, state) => console.log(action, state),
            print: false,
            responsive: 'scroll',
            search: false,
            serverSide: true,
            textLabels: i18n.pl.dataTables,
            viewColumns: false
          }}
        />
      </div>
    </>
  );
};

export default List;
