import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({
  transactions,
  deleteTransaction,
  editTransaction,
  theme,
}) => {
  if (transactions.length === 0) {
    return (
      <h2
        className={theme ? "my-5 text-center text-light" : "my-5 text-center"}
      >
        No Transactions Yet...
      </h2>
    );
  }

  return (
    <ul className="list-group my-3 px-5">
      {transactions.map((transaction) => {
        return (
          <ListItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            editTransaction={editTransaction}
          />
        );
      })}
    </ul>
  );
};

export default ListGroup;
