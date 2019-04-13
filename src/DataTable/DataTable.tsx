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
  pageDataAdapter,
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
      sort.length ? sort[0] : undefined,
      typedTableState.searchText
    );
  };

  interface TableState {
    rowsPerPage: number;
    page: number;
    columns: TableStateColumn[];
    searchText?: string;
  }

  interface TableStateColumn {
    name: string;
    sort: boolean;
    sortDirection: string;
  }

  const fetchData = (size: number, page: number, sort?: string, q?: string) => {
    incrementProgress();
    axios
      .get(q ? `${url}/search/q` : url, {
        params: { size, page, sort, q }
      })
      .then(response => {
        setRowsCount(
          pageDataAdapter
            ? pageDataAdapter(response.data)
            : response.data.page.totalElements
        );
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
  pageDataAdapter?: (data: any) => never[];
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
