import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = (e) => {
    const id = e.target.id;

    const expenseItem = e.target.closest(".expense-item");

    if (expenseItem) {
      expenseItem.remove();
      console.log("ExpenseItem removed:", id);
    }
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler} id={props.id}>
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
