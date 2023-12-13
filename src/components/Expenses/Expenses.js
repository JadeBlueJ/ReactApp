import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(props.year);
  const filteredItems = props.items.filter((item) => {
    if (filteredYear === "") return item;
    return (
      new Date(item.date).getFullYear().toString() === filteredYear.toString() //added new Date() here
    );
  });
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
