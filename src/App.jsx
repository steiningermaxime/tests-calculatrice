import React, { useState } from 'react';
import './App.css';

export function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

function App() {
    const [displayValue, setDisplayValue] = useState('0');
    const [firstOperand, setFirstOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    const resetCalculator = () => {
        setDisplayValue('0');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    const inputDigit = (digit) => {
        if (waitingForSecondOperand) {
            setDisplayValue(digit);
            setWaitingForSecondOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
        }
    };

    const inputDecimal = (dot) => {
        if (waitingForSecondOperand) return;

        if (!displayValue.includes(dot)) {
            setDisplayValue(displayValue + dot);
        }
    };

    const handleOperator = (nextOperator) => {
        const inputValue = parseFloat(displayValue);

        if (operator && waitingForSecondOperand) {
            setOperator(nextOperator);
            return;
        }

        if (firstOperand == null) {
            setFirstOperand(inputValue);
        } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator);
            setDisplayValue(String(result));
            setFirstOperand(result);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
    };

    return (
        <div className="calculator">
            <div id="display" className="display">{displayValue}</div>
            <div className="buttons">
                <button className="button" onClick={() => inputDigit('7')}>7</button>
                <button className="button" onClick={() => inputDigit('8')}>8</button>
                <button className="button" onClick={() => inputDigit('9')}>9</button>
                <button className="button operator" onClick={() => handleOperator('+')}>+</button>
                <button className="button" onClick={() => inputDigit('4')}>4</button>
                <button className="button" onClick={() => inputDigit('5')}>5</button>
                <button className="button" onClick={() => inputDigit('6')}>6</button>
                <button className="button operator" onClick={() => handleOperator('-')}>-</button>
                <button className="button" onClick={() => inputDigit('1')}>1</button>
                <button className="button" onClick={() => inputDigit('2')}>2</button>
                <button className="button" onClick={() => inputDigit('3')}>3</button>
                <button className="button operator" onClick={() => handleOperator('*')}>×</button>
                <button className="button" onClick={() => inputDigit('0')}>0</button>
                <button className="button" onClick={() => inputDecimal('.')}>.</button>
                <button className="button operator" onClick={() => handleOperator('/')}>÷</button>
                <button className="button" id="equals" onClick={() => handleOperator('=')}>=</button>
                <button className="button" id="reset" onClick={resetCalculator}>C</button>
            </div>
        </div>
    );
}

export default App;
