import './App.css';
import TableBasic from './components.jsx/TableBasic';
import TableStyled from './components.jsx/TableStyled';
import TableUsers from './components.jsx/TableUsers';

function App() {
    return (
        <div className='App'>
            <h1>AG Grid</h1>
            <TableBasic title='0. Car Table' />
            <TableUsers title='1. Users Table' />
            <TableStyled title='2. Styled Table' />
        </div>
    );
}

export default App;
