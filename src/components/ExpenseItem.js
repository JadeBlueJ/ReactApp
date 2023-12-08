import "./ExpenseItem.css";
function ExpenseItem() {
  const date = new Date();
  const title = "Car";
  const amt = 3.3;
  const location = "India";
  return (
    <div>
      <div className="expense-item">
        <div>{date.toDateString()}</div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <h2>{location}</h2>
          <div className="expense-item__price">{amt}</div>
        </div>
      </div>
      <div className="expense-item">
        <div>{date.toDateString()}</div>
        <div className="expense-item__description">
          <h2>{title} </h2>
          <div className="expense-item__price">{amt}</div>
        </div>
      </div>
      <div className="expense-item">
        <div>{date.toDateString()}</div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amt}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
