import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  // Function to render ExpenseItem components based on the items array
  const renderExpenseItems = () => {
    return props.items.map((item) => (
      <ExpenseItem
        key={item.id} // It's a good practice to provide a unique key when rendering a list of components
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={new Date(item.date)}
      />
    ));
  };

  return <Card className="expenses">{renderExpenseItems()}</Card>;
};

export default Expenses;
