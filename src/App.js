import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
// import TableBasic from './components.jsx/TableBasic';
import TableUsers from './components.jsx/TableUsers';

const testArr = [1, 2, 3, 4, 5];

function App() {
    const [count, setCount] = useState(0);
    const cashedCounter = useRef(0);

    useEffect(() => {
        if (count > 3) {
            cashedCounter.current += 1;
            setCount(0);
        }
        if (cashedCounter.current === testArr.length) {
            cashedCounter.current = 0;
        }
    }, [count]);

    const filteredArr = useMemo(() => {
        return testArr.filter((item) => item !== cashedCounter.current + 1);
    }, [cashedCounter.current]);

    console.log(cashedCounter.current);

    return (
        <div className='App'>
            <h1>AG Grid</h1>
            {/* <TableBasic /> */}
            <TableUsers filteredArr={filteredArr} />
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                increase
            </button>
            {count}
        </div>
    );
}

export default App;
