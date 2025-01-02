import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";

const App = () => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(theme ? false : true);
  };

  const [transactions, setTransactions] = useState([
    { id: 1, text: "Salary", amount: 500000, type: "income" },
  ]);

  const [edit, setEdit] = useState({ transaction: {}, isEdit: false });

  const addTransaction = ({ type, transactionText, amount }) => {
    setTransactions([
      { id: crypto.randomUUID(), text: transactionText, amount, type },
      ...transactions,
    ]);
    // console.log({
    //   id: crypto.randomUUID(),
    //   text: transactionText,
    //   amount,
    //   type,
    // });
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const editTransaction = (transaction) => {
    setEdit({ transaction: transaction, isEdit: true });
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        updatedTransaction.id === transaction.id
          ? updatedTransaction
          : transaction
      )
    );
    // console.log(updatedTransaction);
    setEdit({ transaction: {}, isEdit: false });
  };
  return (
    <div className={theme ? "main-container bg-dark" : "main-container"}>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <div className="container" style={{ minHeight: "93vh" }}>
        <Dashboard transactions={transactions} />
        <Form
          addTransaction={addTransaction}
          edit={edit}
          updateTransaction={updateTransaction}
        />
        <ListGroup
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />
      </div>
    </div>
  );
};

export default App;
