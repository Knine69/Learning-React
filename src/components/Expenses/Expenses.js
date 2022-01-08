import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState();
  const extensesHandler = (filteredYear) => {
    setEnteredYear(filteredYear);
    console.log("Inside extensesHandler", filteredYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <ExpensesFilter selected={enteredYear} filterHandler={extensesHandler} />
      <Card>
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
