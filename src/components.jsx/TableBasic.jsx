import React from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableBasic = () => {
    const rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];

    const defaultColDef = {
        flex: 1,
    };

    return (
        <div className='ag-theme-alpine' style={{ height: 400, width: '100%' }}>
            <AgGridReact rowData={rowData} defaultColDef={defaultColDef}>
                <AgGridColumn field='make'></AgGridColumn>
                <AgGridColumn field='model'></AgGridColumn>
                <AgGridColumn field='price'></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default TableBasic;
