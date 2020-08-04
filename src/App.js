import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
//import { Container } from "reactstrap";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";

// [
//   { id: 1, name: "Breakfast", amount: "200" },
//   { id: 2, name: "Cab", amount: "300" },
//   { id: 3, name: "Recharge", amount: "489" },
// ];

const ALL_EXPENCES = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENCES);

  const [id, setID] = useState(1);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const AddName = (e) => {
    setName(e.target.value);
  };

  const AddAmount = (e) => {
    setAmount(e.target.value);
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    setID((prevID) => prevID + 1);

    if (name !== "" && amount > 0) {
      const newexpense = { id, name, amount };

      setExpenses([...expenses, newexpense]);
      setName("");
      setAmount("");
    } else {
      console.log("Invalid Input");
    }
  };

  const DeleteAll = () => {
    setExpenses([]);
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  return (
    <div>
      <Header />
      <ExpenseTotal expense={expenses} />
      <ExpenseList expenses={expenses} />
      <AddExpense
        name={name}
        amount={amount}
        AddName={AddName}
        AddAmount={AddAmount}
        SubmitForm={SubmitForm}
        DeleteAll={DeleteAll}
      />
    </div>
  );
}

export default App;
