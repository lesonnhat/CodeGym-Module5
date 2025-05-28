import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const add = () => setResult(parseInt(num1) + parseInt(num2));
    const subtract = () => setResult(parseInt(num1) - parseInt(num2));
    const multiply = () => setResult(parseInt(num1) * parseInt(num2));
    const divide = () => setResult(parseInt(num1) / parseInt(num2));

    return (
        <div style={{ padding: '20px', border: '1px solid black', width: '200px' }}>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div>
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={multiply}>x</button>
                <button onClick={divide}>/</button>
            </div>
            <h3>Result: {result}</h3>
        </div>
    );
}

export default Calculator;