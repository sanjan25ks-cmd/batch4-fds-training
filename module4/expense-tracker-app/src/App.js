import React, { useState } from "react";
import Summary from "./components/Summary";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Groceries",
      amount: -50,
    },
    {
      id: 2,
      title: "Salary",
      amount: 2300,
    },
    {
      id: 3,
      title: "Phone",
      amount: -1000,
    },
  ]);

  const addTransaction = (title, amount, type) => {
    const newTransaction = {
      id: Date.now(),
      title: title,
      amount:
        type === "income"
          ? Number(amount)
          : -Number(amount),
    };

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  return (
    <div className="app">
      <div className="container">

        <h1>Expense Tracker</h1>

        <Summary transactions={transactions} />

        <ExpenseList transactions={transactions} />

        <AddExpense onAdd={addTransaction} />

      </div>
    </div>
  );
}

export default App;