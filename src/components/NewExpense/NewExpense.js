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
  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={formSubmitHandler} />
    </div>
  );
};

export default NewExpense;
