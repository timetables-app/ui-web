import { IconButton, Tooltip } from '@material-ui/core';
import { BugReport } from '@material-ui/icons';
import axios from 'axios';
import MuiDataTable from 'mui-datatables';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import i18n from '../../../i18n';
import {
  decrementProgressActionCreator,
  incrementProgressActionCreator
} from '../../../Layout';

const List: FunctionComponent<Props> = ({
  incrementProgress,
  decrementProgress
}) => {
  const [data, setData] = useState([]);
  const [rowsCount, setRowsCount] = useState(0);
  useEffect(() => {
    fetchData(10, 0);
  }, []);

  const onTableChange = (action: string, tableState: object) => {
    const typedTableState = tableState as TableState;

    const sort = typedTableState.columns
      .filter(c => c.sortDirection)
      .map(c => `${c.name},${c.sortDirection}`);
    fetchData(
      typedTableState.rowsPerPage,
      typedTableState.page,
      sort.length ? sort[0] : undefined
    );
  };

  interface TableState {
    rowsPerPage: number;
    page: number;
    columns: TableStateColumn[];
  }

  interface TableStateColumn {
    name: string;
    sort: boolean;
    sortDirection: string;
  }

  const fetchData = (size: number, page: number, sort?: string) => {
    incrementProgress();
    axios
      .get('http://localhost:8080/countries', {
        params: { size, page, sort }
      })
      .then(response => {
        setData(response.data._embedded.countries);
        setRowsCount(response.data.page.totalElements);
      })
      .finally(decrementProgress);
  };

  return (
    <>
      <div style={{ padding: 24 }}>
        <MuiDataTable
          title="Kraje"
          columns={[
            { name: 'iso', label: 'Iso' },
            { name: 'iso3', label: 'Iso3' },
            { name: 'name', label: 'Nazwa' }
          ]}
          data={data}
          options={{
            count: rowsCount,
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
            onTableChange,
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

interface Props {
  decrementProgress: () => void;
  incrementProgress: () => void;
}

const mapDispatchToProps = {
  decrementProgress: decrementProgressActionCreator,
  incrementProgress: incrementProgressActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(List);
