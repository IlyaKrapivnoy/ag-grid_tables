import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableBasic = ({ title }) => {
    const data = [
        { label: 'Toyota', model: 'Celica', price: 35000 },
        { label: 'Ford', model: 'Mondeo', price: 32000 },
        { label: 'Porsche', model: 'Boxter', price: 72000 },
    ];

    const columns = [
        {
            headerName: 'Car Label',
            field: 'label',
            checkboxSelection: true,
        },
        {
            headerName: 'Model',
            field: 'model',
        },
        {
            headerName: 'Price',
            field: 'price',
        },
        {
            headerName: 'Action',
            field: 'price',
        },
    ];

    const defaultColDef = {
        flex: 1,
        sortable: true,
        filter: true,
        editable: true,
    };

    let gridApi;
    const onGridReady = (params) => {
        gridApi = params.api;
    };
    const onExportClick = () => {
        gridApi.exportDataAsCsv();
    };

    return (
        <>
            <h2>{title}</h2>
            <div
                className='ag-theme-alpine'
                style={{ height: 200, width: '100%' }}
            >
                <AgGridReact
                    rowData={data}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                ></AgGridReact>
            </div>
            <button className='exportButton' onClick={() => onExportClick()}>
                Export
            </button>
        </>
    );
};

export default TableBasic;
