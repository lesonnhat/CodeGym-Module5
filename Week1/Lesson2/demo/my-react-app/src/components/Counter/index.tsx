import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const subClick = () => {
        setCount(count - 1);
    }

    const addClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={subClick}>-</button>
            <button onClick={addClick}>+</button>
        </>
    )
}

export default Counter;