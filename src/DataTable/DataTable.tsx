import { IconButton, Tooltip } from '@material-ui/core';
import { BugReport } from '@material-ui/icons';
import axios from 'axios';
import MuiDataTable, { MUIDataTableColumnDef } from 'mui-datatables';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import i18n from '../i18n';
import {
  decrementProgressActionCreator,
  incrementProgressActionCreator
} from '../Layout';

const DataTable: FunctionComponent<Props> = ({
  incrementProgress,
  decrementProgress,
  title,
  dataAdapter,
  url,
  columns
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
      .get(url, {
        params: { size, page, sort }
      })
      .then(response => {
        setRowsCount(response.data.page.totalElements);
        setData(dataAdapter(response.data));
      })
      .finally(decrementProgress);
  };

  return (
    <>
      <div style={{ padding: 24 }}>
        <MuiDataTable
          title={title}
          columns={columns}
          data={data}
          options={{
            count: rowsCount,
            download: false,
            elevation: 1,
            filter: false,
            onTableChange,
            print: false,
            responsive: 'scroll',
            selectableRows: false,
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
  title: string;
  columns: MUIDataTableColumnDef[];
  dataAdapter: (data: any) => never[];
  url: string;
}

const mapDispatchToProps = {
  decrementProgress: decrementProgressActionCreator,
  incrementProgress: incrementProgressActionCreator
};

export default connect(
  null,
  mapDispatchToProps
)(DataTable);
