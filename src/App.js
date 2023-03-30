import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.23, date: new Date(2023, 2, 14) },
    { title: "Toilet Paper", amount: 10.23, date: new Date(2023, 2, 12) },
    { title: "New Desk", amount: 100.23, date: new Date(2023, 2, 18) },
    { title: "Grocery", amount: 50.11, date: new Date(2023, 2, 16) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
