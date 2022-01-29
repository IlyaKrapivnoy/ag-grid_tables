import React from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableBasic = () => {
    const data = [
        { label: 'Toyota', model: 'Celica', price: 35000 },
        { label: 'Ford', model: 'Mondeo', price: 32000 },
        { label: 'Porsche', model: 'Boxter', price: 72000 },
    ];

    const columns = [
        {
            headerName: 'Car Label',
            field: 'label',
            cellClass: 'grid-cell-centered',
        },
        {
            headerName: 'Model',
            field: 'model',
        },
        {
            headerName: 'Price',
            field: 'price',
        },
    ];

    const defaultColDef = {
        flex: 1,
        cellClass: 'grid-cell-centered',
    };

    return (
        <div className='ag-theme-alpine' style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={data}
                columnDefs={columns}
                defaultColDef={defaultColDef}
            >
                <AgGridColumn field='make'></AgGridColumn>
                <AgGridColumn field='model'></AgGridColumn>
                <AgGridColumn field='price'></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default TableBasic;
