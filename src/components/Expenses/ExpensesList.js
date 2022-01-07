import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
const ExpensesList = (props) => {
  const [enteredYear, setEnteredYear] = useState();
  const extensesHandler = (filteredYear) => {
    setEnteredYear(filteredYear);
    console.log("Inside extensesHandler", filteredYear);
  };
  return (
    <div>
      <ExpensesFilter selected={enteredYear} filterHandler={extensesHandler} />
      <Card>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default ExpensesList;
