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
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
const ALL_EXPENCES = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

// const ALL_EXPENCES = [
//   { ID: 1, name: "abbb", amount: 22 },
//   { ID: 2, name: "bbb", amount: 32 },
// ];

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENCES);

  const [ID, setID] = useState(1);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  // const [accessToken, setAccessToken] = useState("");

  const AddName = (e) => {
    setName(e.target.value);
  };

  const AddAmount = (e) => {
    setAmount(e.target.value);
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    setID(ID + 1);

    if (name !== "" && amount > 0) {
      const newexpense = { ID, name, amount };

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

  // const loginSuccess = () => {
  //   setAccessToken();
  // };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // const allProps = {
  //   ID,
  //   expenses,
  //   name,
  //   amount,
  //   AddName,
  //   AddAmount,
  //   SubmitForm,
  //   DeleteAll,
  // };

  return (
    <div>
      <Router>
        <Nav />

        <Switch>
          {/* <Route
            path="/"
            exact
            render={(props) => (
              <>
                <Header />
                <Login />
              </>
            )}
          ></Route> */}
          <Header />
          {/* <ProtectedRoute
            path="/Dashboard"
            component={Dashboard}
          ></ProtectedRoute> */}
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
        </Switch>
        <ExpenseTotal expenses={expenses} />
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
