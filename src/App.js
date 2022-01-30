import './App.css';
import TableBasic from './components.jsx/TableBasic';
import TableStyled from './components.jsx/TableStyled';
import TableUsers from './components.jsx/TableUsers';

function App() {
    return (
        <div className='App'>
            <h1>AG Grid</h1>
            <TableBasic />
            <TableUsers />
            <TableStyled />
        </div>
    );
}

export default App;
