import React from "react";

const ExpenseTotal = ({ expense }) => {
  return (
    <div class="container-md" style={{ marginTop: 50 }}>
      <div className="row">
        <div class="col-md-6" align="center">
          <h3>Total Expense </h3>
        </div>
        <div class="col-md-6" align="center">
          <h3>
            Rs.{" "}
            {expense.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount));
            }, 0)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTotal;
