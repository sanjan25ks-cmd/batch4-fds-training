import React from "react";

function Summary({ transactions }) {
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce(
      (total, transaction) =>
        total + Math.abs(transaction.amount),
      0
    );

  const balance = income - expense;

  return (
    <div>
      {/* Balance */}
      <div className="balance-section">
        <p className="balance-label">
          YOUR BALANCE
        </p>

        <h2>
          $
          {balance.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </h2>
      </div>

      
      <div className="summary">

        <div className="summary-item">
          <h3>INCOME</h3>

          <p className="income">
            $
            {income.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>

        <div className="divider"></div>

        <div className="summary-item">
          <h3>EXPENSE</h3>

          <p className="expense">
            $
            {expense.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Summary;