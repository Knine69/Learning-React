import { useState } from "react";
import "./ExpenseForm.css";

/*Preferable to use variables for each useState*/
const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredNumber: "",
  //   enteredDate: "",
  // });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (Event) => {
    setEnteredTitle(Event.target.value);
    // If using Object, better do so like this
    // setUserInput((prevStatus) => {
    //   return {
    //     ...prevStatus,
    //     enteredTitle: Event.target.value,
    //   };
  };

  const numberChangeHandler = (Event) => {
    setEnteredNumber(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredNumber: Event.target.value,
    // });
  };
  const dateChangeHandler = (Event) => {
    setEnteredDate(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: Event.target.value,
    // });
  };

  const submitHandler = (Event) => {
    Event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredNumber,
      date: new Date(enteredDate),
    };
    props.onFormSubmit(expenseData);
    setEnteredTitle("");
    setEnteredNumber("");
    setEnteredDate("");
  };

  const dismissalHandler = () => {
    props.toggleForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__control">
        <label>Number</label>
        <input
          value={enteredNumber}
          type="number"
          min="0.01"
          step="0.01"
          onChange={numberChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" value={enteredDate} onChange={dateChangeHandler} />
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={dismissalHandler}>
          Add expense
        </button>
        <button onClick={dismissalHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
