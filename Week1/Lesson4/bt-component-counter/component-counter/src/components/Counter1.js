import React from 'react';
import useIncrement from '../hooks/useIncrement';

function Counter1() {
    const [count, increase] = useIncrement(1); // Tăng 1

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increase}>Add 1</button>
        </div>
    );
}

export default Counter1;