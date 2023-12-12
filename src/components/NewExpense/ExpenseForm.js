import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, enteredTitle] = useState("");
  const [amount, enteredAmount] = useState("");
  const [date, enteredDate] = useState("");
  // const [userInput, setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:'',
  // })
  const titleChangeHandler = (e) => {
    enteredTitle(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:e.target.value
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    enteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    enteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let expenseData = {
      title,
      amount,
      date,
    };
    props.onSaveExpenseData(expenseData);
    enteredTitle("");
    enteredAmount("");
    enteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
