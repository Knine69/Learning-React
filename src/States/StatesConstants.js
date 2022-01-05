import { useState } from "react";
const States = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  return {
    enteredTitle,
    setEnteredTitle,
    enteredNumber,
    setEnteredNumber,
    enteredDate,
    setEnteredDate,
  };
};

export default States;
