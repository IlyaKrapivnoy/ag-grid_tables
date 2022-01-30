import { useState } from 'react';
import './App.css';
import Counter from './components.jsx/Counter';
// import TableBasic from './components.jsx/TableBasic';
import TableUsers from './components.jsx/TableUsers';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className='App'>
            <h1>AG Grid</h1>
            <Counter />
            {/* <TableBasic /> */}
            <TableUsers />
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                increase
            </button>
            {count}
        </div>
    );
}

export default App;
