import "./App.css";
import ExpensesList from "./components/Expenses/ExpensesList";
import "./components/Expenses/ExpensesList.css";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 1,
      title: "car insurance",
      amount: "whatever amount",
      date: new Date(),
    },
    {
      id: 2,
      title: "my_car insurance",
      amount: "how much",
      date: new Date(),
    },
    {
      id: 3,
      title: "no_car insurance",
      amount: "whatever much",
      date: new Date(),
    },
  ];

  const newExpenseHandler = (expenseData) => {
    console.log("Inside ExpenseHandler", expenseData);
  };

  return (
    <div className="App">
      <div className="expenses">
        <NewExpense addNewExpense={newExpenseHandler} />
        <ExpensesList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
