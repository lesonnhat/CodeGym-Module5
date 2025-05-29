import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
        </div>
    );
}

export default Counter;