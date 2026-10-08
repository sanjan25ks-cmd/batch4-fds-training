import React from "react";

function ExpenseList({ transactions }) {
  return (
    <div className="history-section">

      <h2 className="section-title">
        History
      </h2>

      <div className="purple-line"></div>

      {transactions.map((transaction) => (
        <div
          className={`transaction ${
            transaction.amount > 0
              ? "income-border"
              : "expense-border"
          }`}
          key={transaction.id}
        >

          <span className="transaction-title">
            {transaction.title}
          </span>

          <span className="transaction-amount">
            {transaction.amount > 0
              ? "+"
              : "-"}
            $
            {Math.abs(
              transaction.amount
            ).toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </span>

        </div>
      ))}

    </div>
  );
}

export default ExpenseList;