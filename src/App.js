import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
//import { Container } from "reactstrap";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

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
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact component={Header}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
        </Switch>
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
      </Router>
    </div>
  );
}

export default App;
