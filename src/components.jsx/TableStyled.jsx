import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import axiosInstance from '../axiosInstance';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableStyled = ({ title }) => {
    const defaultColDef = {
        flex: 1,
        minWidth: 100,
        editable: true,
        filter: true,
        floatingFilter: true,
    };

    const columnDefs = [
        {
            headerName: 'ID',
            field: 'id',
            tooltipField: 'name',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            cellClass: (params) =>
                params.value < 10 ? 'olderThan20' : 'youngerThan20',
        },
        {
            headerName: 'Name',
            field: 'name',
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

    const rowSelectionType = 'multiple';

    const onSelectionChanged = (e) => {
        console.log(e.api.getSelectedRows());
    };

    const isRowSelectable = (node) => {
        return node.data
            ? node.data.id % 2 === 0 || node.data.email.includes('.com')
            : false;
    };

    return (
        <>
            <h2>{title}</h2>
            <div
                className='ag-theme-alpine'
                style={{ height: '400px', width: '100%' }}
            >
                <AgGridReact
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    enableBrowserTooltips={true}
                    onGridReady={onGridReady}
                    rowSelection={rowSelectionType}
                    onSelectionChanged={onSelectionChanged}
                    rowMultiSelectWithClick={true}
                    isRowSelectable={isRowSelectable}
                ></AgGridReact>
            </div>
        </>
    );
};

export default TableStyled;
