import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableStyled = ({ title }) => {
    const data = [
        {
            name: 'Tomas',
            age: 21,
            birthYear: 2001,
            phoneNumber: '098-287-65-20',
        },
        {
            name: 'Lucas',
            age: 22,
            birthYear: 2000,
            phoneNumber: '098-233-33-22',
        },
        {
            name: 'Donald',
            age: 32,
            birthYear: 1990,
            phoneNumber: '097-123-63-10',
        },
        {
            name: 'Hannah',
            age: 21,
            birthYear: 2001,
            phoneNumber: '050-227-21-98',
        },
        {
            name: 'Peter',
            age: 11,
            birthYear: 2011,
            phoneNumber: '096-121-21-61',
        },
    ];

    const columnDefs = [
        {
            headerName: 'Name',
            field: 'name',
            tooltipField: 'name',
        },
        {
            headerName: 'Age',
            field: 'age',
            // cellStyle: (params) =>
            //     params.value > 20
            //         ? { background: 'green' }
            //         : { background: 'lightgreen' },
            cellClass: (params) =>
                params.value > 20 ? 'olderThan20' : 'youngerThan20',
        },
        {
            headerName: 'Birth Year',
            field: 'birthYear',
        },
        {
            headerName: 'Phone Number',
            field: 'phoneNumber',
        },
    ];

    return (
        <>
            <h2>{title}</h2>
            <div
                className='ag-theme-alpine'
                style={{ height: '60vh', width: '100%' }}
            >
                <AgGridReact
                    rowData={data}
                    columnDefs={columnDefs}
                    defaultColDef={{ flex: 1, minWidth: 100 }}
                    enableBrowserTooltips={true}
                ></AgGridReact>
            </div>
        </>
    );
};

export default TableStyled;
