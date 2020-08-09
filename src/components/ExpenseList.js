import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <div className="container-md" style={{ marginTop: 20 }}>
        <div className="row justify-content-center">
          <h2>Expenses</h2>
          <ul className="list-group">
            {expenses.map((expense) => (
              <li className="list-group-item" key={expense.ID}>
                {expense.name} Rs. {expense.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
