import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import axiosInstance from '../axiosInstance';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableStyled = ({ title }) => {
    const [gridApi, setGridApi] = useState();

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
        setGridApi(params);
        console.log('grid is ready');
        axiosInstance.get('/comments').then((res) => {
            params.api.applyTransaction({ add: res.data });
            params.api.paginationGoToPage(10);
        });
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

    const onPaginationChange = (pageSize) => {
        gridApi.api.paginationSetPageSize(pageSize);
    };

    return (
        <>
            <h2>{title}</h2>
            <select onChange={(e) => onPaginationChange(e.target.value)}>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>

            <div
                className='ag-theme-alpine'
                style={{ height: '567px', width: '100%' }}
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
                    pagination={true}
                    paginationPageSize={10}
                    // paginationAutoPageSize={true}
                ></AgGridReact>
            </div>
        </>
    );
};

export default TableStyled;
