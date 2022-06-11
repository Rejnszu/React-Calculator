import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator/calculator";
import Display from "./components/display/display";
import Button from "./components/buttons/button";
function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [resultNumber, setresultNumber] = useState(null);
  const [isNumber, setIsNumber] = useState(undefined);
  const [isfirstEquation, setIsFirstEquation] = useState(true);
  const [lastestEquation, setLatestEquation] = useState(undefined);

  console.log(lastestEquation);
  function equationInitialState(value) {
    setIsNumber(false);
    setCurrentNumber(0);
    setIsFirstEquation(false);
    setLatestEquation(value);
  }
  function onClickHandler(e) {
    switch (e.target.value) {
      case "+":
        setresultNumber(
          resultNumber === 0 && isfirstEquation
            ? currentNumber
            : resultNumber + Number(currentNumber)
        );
        equationInitialState(e.target.value);
        break;
      case "-":
        setresultNumber(
          resultNumber === 0 && isfirstEquation
            ? currentNumber
            : resultNumber - Number(currentNumber)
        );
        equationInitialState(e.target.value);
        break;
      case "*":
        setresultNumber(
          resultNumber === 0
            ? currentNumber
            : resultNumber * Number(currentNumber)
        );
        equationInitialState(e.target.value);
        break;
      case "/":
        setresultNumber(
          resultNumber === 0
            ? currentNumber
            : resultNumber / Number(currentNumber)
        );
        equationInitialState(e.target.value);
        break;
      case "AC":
        setCurrentNumber(0);
        setresultNumber(0);
        setIsFirstEquation(true);
        break;
      case "=":
        if (lastestEquation === "+") {
          setresultNumber(resultNumber + currentNumber);
          setCurrentNumber(0);
        }
        if (lastestEquation === "-") {
          setresultNumber(resultNumber - currentNumber);
          setCurrentNumber(0);
        }
        if (lastestEquation === "*") {
          setresultNumber(resultNumber * currentNumber);
          setCurrentNumber(0);
        }
        if (lastestEquation === "/") {
          setresultNumber(resultNumber / currentNumber);
          setCurrentNumber(0);
        }
        break;
      case ".":
        if (currentNumber.toString().includes(".")) {
          return;
        }
        setCurrentNumber(currentNumber + ".");
        break;
      case "DEL":
        setCurrentNumber(Number(currentNumber.toString().slice(0, -1)));
        break;
      default:
        setIsNumber(true);
        setCurrentNumber(Number.parseFloat(currentNumber + e.target.value));
        break;
    }
  }

  return (
    <div className="App">
      <Calculator>
        <Display currentNumber={currentNumber} resultNumber={resultNumber} />
        <Button value={1} onClick={onClickHandler} />
        <Button value={2} onClick={onClickHandler} />
        <Button value={3} onClick={onClickHandler} />
        <Button
          classes={!isNumber ? "equation-button-disabled" : ""}
          value={"+"}
          onClick={onClickHandler}
        />
        <Button value={4} onClick={onClickHandler} />
        <Button value={5} onClick={onClickHandler} />
        <Button value={6} onClick={onClickHandler} />
        <Button
          classes={!isNumber ? "equation-button-disabled" : ""}
          value={"-"}
          onClick={onClickHandler}
        />
        <Button value={7} onClick={onClickHandler} />
        <Button value={8} onClick={onClickHandler} />
        <Button value={9} onClick={onClickHandler} />
        <Button
          classes={!isNumber ? "equation-button-disabled" : ""}
          value={"*"}
          onClick={onClickHandler}
        />
        <Button value={0} onClick={onClickHandler} />
        <Button value={"."} onClick={onClickHandler} />
        <Button value={"AC"} onClick={onClickHandler} />
        <Button
          classes={!isNumber ? "equation-button-disabled" : ""}
          value={"/"}
          onClick={onClickHandler}
        />
        <Button value={"DEL"} onClick={onClickHandler} />
        <Button value={"="} onClick={onClickHandler} classes="equal" />
      </Calculator>
    </div>
  );
}

export default App;
