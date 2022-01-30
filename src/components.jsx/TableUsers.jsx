import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import axiosInstance from '../axiosInstance';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableUsers = ({ filteredArr }) => {
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
        onCellValueChanged: (params) => {
            console.log(params);
            let currentData = JSON.parse(localStorage.getItem('data'));
            if (!Array.isArray(currentData)) {
                currentData = [];
            }
            console.log(currentData);
            const filteredData = currentData.filter(
                (item) => item.id !== params.data.id
            );
            localStorage.setItem(
                'data',
                JSON.stringify([...filteredData, params.data])
            );
        },
    };

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        axiosInstance.get('/users').then((result) => setRowData(result.data));
    }, []);

    console.log(defaultColDef);

    console.log({ filteredArr });

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

export default React.memo(TableUsers);
