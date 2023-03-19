import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.23, date: new Date(2023, 2, 14) },
    { title: "Toilet Paper", amount: 10.23, date: new Date(2023, 2, 12) },
    { title: "New Desk", amount: 100.23, date: new Date(2023, 2, 18) },
    { title: "Grocery", amount: 50.11, date: new Date(2023, 2, 16) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
