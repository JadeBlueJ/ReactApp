import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const clickHandler = (e) => {
    setTitle("Updated");
  };
  const updateAmt = () => {
    setAmount("100 $");
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler} id={props.id}>
        Change Title
      </button>
      <button onClick={updateAmt} id={props.id}>
        Change Amt
      </button>
    </Card>
  );
};

export default ExpenseItem;
