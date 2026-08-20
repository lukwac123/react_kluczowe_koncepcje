import { useState } from "react";
import Calculation from "./components/Calculation";
import Result from "./components/Result";

function App() {
  const [enteredNumbers, setEnteredNumbers] = useState ({
    first: 0, second:0
  });
  const [chosenOperation, setChosenOperation] = useState('add');

  function changeFirstNumberHandler(event) {
    setEnteredNumbers((prevNumber) => ({
      first: +event.target.value,
      second: prevNumber.second,
    }));
  }

  function changeSecondNumberHandler(event) {
    setEnteredNumbers((prevNumber) => ({
      first: prevNumber.first,
      second: +event.target.value,
    }));
  }

  function updateOperationHandler(event) {
    setChosenOperation(event.target.value);
  }

  let result;
  
  if (chosenOperation === 'add') {
    result = enteredNumbers.first + enteredNumbers.second;
  } else if (chosenOperation === 'substract') {
    result = enteredNumbers.first - enteredNumbers.second;
  } else if (chosenOperation === 'multiply') {
    result = enteredNumbers.first * enteredNumbers.second;
  } else {
    result = enteredNumbers.first / enteredNumbers.second;
  }
  

  return (
    <>
      <Calculation
      onFirstNumberChanged={changeFirstNumberHandler}
      onSecondNumberChanged={changeSecondNumberHandler}
      onOperationChanged={updateOperationHandler}
      />
      <Result calculationResult={result} />
    </>
  );
}

export default App;
