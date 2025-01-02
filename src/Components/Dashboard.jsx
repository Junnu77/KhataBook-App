import React, { useState } from "react";

const Dashboard = ({ transactions }) => {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((p, c) => p + c.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((p, c) => p + c.amount, 0);

  const balance = income - expense;

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  return (
    <div className="container p-5">
      <div className="row g-3">
        <div className="col-md-4 col-sm-12">
          <div className="bg-success p-3">
            <h3 className="display-5 text-light">Income</h3>
            <h3 className="display-6 text-light">{formatAmount(income)}</h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="bg-danger p-3">
            <h3 className="display-5 text-light">Expenses</h3>
            <h3 className="display-6 text-light">{formatAmount(expense)}</h3>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="bg-warning p-3">
            <h3 className="display-5 text-light">Balance</h3>
            <h3 className="display-6 text-light">{formatAmount(balance)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
