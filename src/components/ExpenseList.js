import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <table className="table table-dark" style={{ marginTop: 50 }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Expense</th>
            <th scope="col">Amount in Rs</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.ID}>
              <th scope="row">{expense.ID}</th>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>
                <button type="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
