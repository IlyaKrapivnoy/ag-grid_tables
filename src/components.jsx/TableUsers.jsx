import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import axiosInstance from '../axiosInstance';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableUsers = () => {
    const columns = [
        {
            headerName: 'Username',
            field: 'username',
            checkboxSelection: true,
        },
        {
            headerName: 'City',
            field: 'address.city',
        },
        {
            headerName: 'Email',
            field: 'email',
        },
        {
            headerName: 'Phone',
            field: 'phone',
        },
    ];

    const defaultColDef = {
        flex: 1,
        sortable: true,
        filter: true,
        editable: true,
    };

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        axiosInstance.get('/users').then((result) => setRowData(result.data));
    }, []);

    return (
        <>
            <div
                className='ag-theme-alpine'
                style={{ height: '80vh', width: '100%' }}
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                >
                    {console.log(rowData)}
                </AgGridReact>
            </div>
        </>
    );
};

export default TableUsers;
