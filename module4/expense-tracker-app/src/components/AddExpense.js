import React, { useState } from "react";

function AddExpense({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !type) {
      alert("Please enter all details");
      return;
    }

    onAdd(title, amount, type);

    setTitle("");
    setAmount("");
    setType("");
  };

  return (
    <div className="add-section">

      <h2 className="section-title">
        Add new transaction
      </h2>

      <div className="purple-line"></div>

      <form
        className="add-form"
        onSubmit={handleSubmit}
      >

        {/* Title */}
        <label>Title</label>

        <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        {/* Amount */}
        <label>Amount</label>

        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        {/* Income */}
        <label className="radio-option">

          <input
            type="radio"
            name="type"
            value="income"
            checked={type === "income"}
            onChange={(e) =>
              setType(e.target.value)
            }
          />

          <span>Income</span>

        </label>

        {/* Expense */}
        <label className="radio-option">

          <input
            type="radio"
            name="type"
            value="expense"
            checked={type === "expense"}
            onChange={(e) =>
              setType(e.target.value)
            }
          />

          <span>Expense</span>

        </label>

        <button type="submit">
          Add transaction
        </button>

      </form>

    </div>
  );
}

export default AddExpense;