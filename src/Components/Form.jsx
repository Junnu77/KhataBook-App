import React, { useEffect, useState } from "react";

const Form = ({ addTransaction, edit, updateTransaction }) => {
  const [type, setType] = useState("income");
  const [transactionText, setTransactionText] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddTransaction = (e) => {
    e.preventDefault();
    edit.isEdit === false
      ? addTransaction({ type, transactionText, amount })
      : updateTransaction({
          id: edit.transaction.id,
          text: transactionText,
          amount,
          type,
        });
    setAmount("");
    setTransactionText("");
  };

  useEffect(() => {
    if (edit.isEdit) {
      setType(edit.transaction.type);
    }
    setTransactionText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  const handleEvent = (e) => {
    const value = e.target.value;
    const num = Number(value);
    setAmount(value === "" ? "" : num);
  };

  return (
    <form onSubmit={(e) => handleAddTransaction(e)} className="my-3 px-5">
      <div className="my-2 w-100 d-flex align-items-center justify-content-center">
        <input
          type="radio"
          className="btn-check"
          name="options-outlined"
          id="success-outlined"
          autoComplete="off"
          defaultChecked
          value="income"
          onChange={(e) => setType(e.target.value)}
          checked={type === "income"}
        />
        <label
          className="btn btn-outline-success rounded-0"
          for="success-outlined"
          style={{ width: "50%" }}
        >
          Income
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options-outlined"
          id="danger-outlined"
          autoComplete="off"
          value="expense"
          onChange={(e) => setType(e.target.value)}
          checked={type === "expense"}
        />
        <label
          className="btn btn-outline-danger rounded-0"
          for="danger-outlined"
          style={{ width: "50%" }}
        >
          Expense
        </label>
      </div>
      <input
        type="text"
        className="form-control my-2 rounded-0 w-100"
        placeholder="Transaction"
        required
        onChange={(e) => setTransactionText(e.target.value)}
        value={transactionText}
      />
      <input
        type="number"
        className="form-control my-2 rounded-0 w-100"
        placeholder="Amount"
        required
        onChange={(e) => handleEvent(e)}
        value={amount}
      />
      <button className="btn btn-primary w-100 rounded-0">
        Save Transaction
      </button>
    </form>
  );
};

export default Form;
