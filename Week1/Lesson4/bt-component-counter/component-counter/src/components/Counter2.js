import React from 'react';
import useIncrement from '../hooks/useIncrement';

function Counter2() {
    const [count, increase] = useIncrement(2); // Tăng 2

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increase}>Add 2</button>
        </div>
    );
}

export default Counter2;