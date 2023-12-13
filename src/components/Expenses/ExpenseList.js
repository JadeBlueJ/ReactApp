import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  if (props.items.length === 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((item) => {
          return (
            //return optional
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
        {<h2 className="expenses-list__fallback">Please add more</h2>}
      </ul>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          //return optional
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
