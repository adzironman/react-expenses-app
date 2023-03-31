import React, { useState } from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_DATA = [
  {
    id: "a1",
    title: "Car Insurance",
    amount: 294.23,
    date: new Date(2022, 2, 14),
  },
  {
    id: "b2",
    title: "Toilet Paper",
    amount: 10.23,
    date: new Date(2023, 2, 12),
  },
  { id: "c3", title: "New Desk", amount: 100.23, date: new Date(2021, 2, 18) },
  { id: "d4", title: "Grocery", amount: 50.11, date: new Date(2020, 2, 16) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
