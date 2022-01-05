import States from "../../States/StatesConstants";
import "./ExpenseForm.css";

/*Preferable to use variables for each useState*/
const ExpenseForm = () => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredNumber: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (Event) => {
    States.setEnteredTitle(Event.target.value);
    // If using Object, better do so like this
    // setUserInput((prevStatus) => {
    //   return {
    //     ...prevStatus,
    //     enteredTitle: Event.target.value,
    //   };
  };

  const numberChangeHandler = (Event) => {
    States.setEnteredNumber(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredNumber: Event.target.value,
    // });
  };
  const dateChangeHandler = (Event) => {
    States.setEnteredDate(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: Event.target.value,
    // });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__control">
        <label>Number</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={numberChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" onChange={dateChangeHandler} />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
