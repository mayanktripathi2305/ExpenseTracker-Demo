import React from "react";

const expenseTotal = ({ expenses }) => {
  return (
    <div className="container-md" style={{ marginTop: 50 }}>
      <div className="row">
        <div className="col-md-6" align="center">
          <h3>Total Expense </h3>
        </div>
        <div className="col-md-6" align="center">
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
