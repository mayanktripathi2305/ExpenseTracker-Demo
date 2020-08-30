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

const TotalIncome = localStorage.getItem("incomes")
  ? JSON.parse(localStorage.getItem("incomes"))
  : [];

// const ALL_EXPENCES = [
//   { ID: 1, name: "abbb", amount: 22 },
//   { ID: 2, name: "bbb", amount: 32 },
// ];

function App() {
  const EXPENSES_TYPE = ["Food", "Grocery", "Entertainment", "Fuel"];
  const [expenses, setExpenses] = useState(ALL_EXPENCES);

  const [ID, setID] = useState(1);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [incomes, setIncomes] = useState(TotalIncome);
  const [income, setIncome] = useState(0);
  const [expenseType, setExpenseType] = useState("");
  // const [accessToken, setAccessToken] = useState("");

  const AddName = (e) => {
    setName(e.target.value);
  };

  const AddAmount = (e) => {
    setAmount(e.target.value);
  };

  const AddIncome = (e) => {
    setIncome(e.target.value);
  };

  const AddExpenseType = (e) => {
    setExpenseType(e.target.value);
  };
  const AddID = () => {
    setID((prevState) => prevState + 1);
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    AddID();

    if (name !== "" && amount > 0) {
      const newexpense = { ID, name, amount, expenseType };

      setExpenses([...expenses, newexpense]);
      setName("");
      setAmount("");
    } else {
      console.log("Invalid Input");
    }
  };

  const SubmitIncome = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (income !== "" && income > 0) {
      const newIncome = { income };
      setIncomes([...incomes, newIncome]);
      setIncome("");
    } else {
      console.log("Income must be greater than 0");
    }
  };

  const DeleteAll = () => {
    localStorage.clear();
    setID(1);
    setExpenses([]);
  };

  const DeleteExpense = (id) => {
    const newExpenseList = expenses.filter((item) => item.ID !== id);
    //localStorage.removeItem(id);
    setExpenses(newExpenseList);
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("income", JSON.stringify(incomes));
  }, [expenses, incomes]);

  return (
    <div>
      <Router>
        <Nav />
        <div className="container App">
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
          <ExpenseTotal expenses={expenses} incomes={incomes} />
          <ExpenseList expenses={expenses} DeleteExpense={DeleteExpense} />
          <AddExpense
            name={name}
            amount={amount}
            expenses_Type={EXPENSES_TYPE}
            income={income}
            AddName={AddName}
            AddAmount={AddAmount}
            AddIncome={AddIncome}
            AddExpenseType={AddExpenseType}
            SubmitForm={SubmitForm}
            SubmitIncome={SubmitIncome}
            DeleteAll={DeleteAll}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
