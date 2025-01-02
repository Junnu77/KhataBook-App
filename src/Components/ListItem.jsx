import React from "react";

const ListItem = ({ transaction, deleteTransaction, editTransaction }) => {
  return (
    <li
      className={
        transaction.type == "income"
          ? "list-group-item my-2 w-100 rounded-0 border  border-3 border-success"
          : "list-group-item my-2 w-100 rounded-0 border border-2  border-danger"
      }
    >
      <p>{transaction.text}</p>
      <h2
        className={
          transaction.type == "income"
            ? "display-6 text-success fw-semibold"
            : "display-6 text-danger fw-semibold"
        }
      >
        {transaction.type === "income"
          ? `+${transaction.amount}`
          : `-${transaction.amount}`}
      </h2>
      <span className="float-end">
        <button
          className="btn btn-warning mx-1 rounded-0"
          onClick={() => editTransaction(transaction)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger mx-1 rounded-0"
          onClick={() => deleteTransaction(transaction.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
