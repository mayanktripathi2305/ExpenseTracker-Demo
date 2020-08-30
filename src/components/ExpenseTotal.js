import React from "react";
import "./Expense.css";

const expenseTotal = ({ expenses, incomes }) => {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row justify-content-center">
        <div className="col-md-auto ManageExpense">
          <h3>Total Expense </h3>
        </div>
        <div className="col-md-auto ManageExpense">
          <h3>
            Rs.{" "}
            {expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount));
            }, 0)}
          </h3>
        </div>

        <div className="col-md-auto ManageExpense">
          <h3>Total Income </h3>
        </div>
        <div className="col-md-auto ManageExpense">
          <h3>
            Rs.{" "}
            {incomes.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.income));
            }, 0)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default expenseTotal;
