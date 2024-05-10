import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import "./../App.css"
import { rows, columns } from '../constants/tableData';
import Navbar from './Navbar';

export default function DataTable() {

  return (
    <div>
      <Navbar />
      <div className='table'>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            className='dataTable'
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 15]}
            checkboxSelection
            autoHeight={false}
          />
        </div>
      </div>
    </div>
  );
}
