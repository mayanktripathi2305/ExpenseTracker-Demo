import React from "react";
import "./Expense.css";

const expenseTotal = ({ expenses }) => {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row justify-content-center">
        <div className="col-md-auto TotalExpense">
          <h3>Total Expense </h3>
        </div>
        <div className="col-md-auto TotalExpense">
          <h3>
            Rs.{" "}
            {expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount));
            }, 0)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default expenseTotal;
