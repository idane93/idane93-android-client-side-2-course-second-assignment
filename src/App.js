import './App.css';
import Clock from './components/Clock';
import ExpenseForm from './components/ExpenseForm';
import Expenses from './components/Expenses';
import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { title: 'mazda', amount: 5000, date: new Date(2023, 3, 23) },
    { title: 'toyota', amount: 3000, date: new Date(2021, 5, 7) },
    { title: 'honda', amount: 10000, date: new Date(2021, 2, 14) },
    { title: 'ford', amount: 8000, date: new Date(2024, 6, 25) }
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Clock />
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />
      <br />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
