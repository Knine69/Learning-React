import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const formSubmitHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addNewExpense(expenseData);
  };
  const [showForm, setShowForm] = useState(false);

  const formToggle = () => {
    setShowForm(!showForm);
  };

  let buttonOp = <button onClick={formToggle}>Add New Expense</button>;

  if (showForm) {
    buttonOp = (
      <ExpenseForm onFormSubmit={formSubmitHandler} toggleForm={formToggle} />
    );
  }

  return <div className="new-expense">{buttonOp}</div>;
};

export default NewExpense;
