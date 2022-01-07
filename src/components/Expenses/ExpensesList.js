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

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  let expensesContent = <p>No expenses found this year!</p>;

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <div>
      <ExpensesFilter selected={enteredYear} filterHandler={extensesHandler} />
      <Card>{expensesContent}</Card>
    </div>
  );
};

export default ExpensesList;
