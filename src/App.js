import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { date: new Date(), title: "Car", amt: 66, location: "India" },
    { date: new Date(), title: "Bike", amt: 45, location: "USA" },
    { date: new Date(), title: "Rapido", amt: 334, location: "Mexico" },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amt={expenses[0].amt}
        location={expenses[0].location}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amt={expenses[1].amt}
        date={expenses[1].date}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amt={expenses[2].amt}
        date={expenses[2].date}
        location={expenses[2].location}
      ></ExpenseItem>
    </div>
  );
}

export default App;
