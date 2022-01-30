import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import axiosInstance from '../axiosInstance';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableStyled = ({ title }) => {
    const columnDefs = [
        {
            headerName: 'ID',
            field: 'id',
            tooltipField: 'name',
        },
        {
            headerName: 'Name',
            field: 'name',
            cellClass: (params) =>
                params.value > 20 ? 'olderThan20' : 'youngerThan20',
        },
        {
            headerName: 'Email',
            field: 'email',
        },
        {
            headerName: 'Comment',
            field: 'body',
        },
    ];

    const onGridReady = (params) => {
        console.log('grid is ready');
        axiosInstance
            .get('/comments')
            .then((res) => params.api.applyTransaction({ add: res.data }));
    };

    return (
        <>
            <h2>{title}</h2>
            <div
                className='ag-theme-alpine'
                style={{ height: '60vh', width: '100%' }}
            >
                <AgGridReact
                    columnDefs={columnDefs}
                    defaultColDef={{ flex: 1, minWidth: 100, editable: true }}
                    enableBrowserTooltips={true}
                    onGridReady={onGridReady}
                ></AgGridReact>
            </div>
        </>
    );
};

export default TableStyled;
