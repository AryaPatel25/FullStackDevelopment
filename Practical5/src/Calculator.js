import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClear = () => {
    setInput("");
    setResult("");
  };
  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleResult = () => {
    try {
      setResult(evaluate(input));
    } catch {
      setResult("Error");
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
<div className="calculator">
  <div className="display">
    <input type="text" value={input} readOnly />
    <div className="result">{result}</div>
  </div>
  <div className="first-row">
    <button onClick={() => handleInput("/")}>/</button>
    <button onClick={() => handleInput("*")}>*</button>
    <button onClick={() => handleInput("+")}>+</button>
    <button onClick={() => handleInput("-")}>-</button>
    <button onClick={handleDelete}>DEL</button>
  </div>
  <div className="row">
    <button onClick={() => handleInput("1")}>1</button>
    <button onClick={() => handleInput("2")}>2</button>
    <button onClick={() => handleInput("3")}>3</button>
  </div>
  <div className="row">
    <button onClick={() => handleInput("4")}>4</button>
    <button onClick={() => handleInput("5")}>5</button>
    <button onClick={() => handleInput("6")}>6</button>
  </div>
  <div className="row">
    <button onClick={() => handleInput("7")}>7</button>
    <button onClick={() => handleInput("8")}>8</button>
    <button onClick={() => handleInput("9")}>9</button>
  </div>
  <div className="last-row">
    <button onClick={() => handleInput("0")}>0</button>
    <button onClick={() => handleInput(".")}>.</button>
    <button onClick={handleResult}>=</button>
    <button onClick={handleClear}>C</button>
  </div>
    </div>
  );
}

export default Calculator;
