import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExpenseList = ({ expenses, DeleteExpense }) => {
  return (
    <>
      <table className="table table-dark" style={{ marginTop: 50 }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Expense For</th>
            <th scope="col">Amount in Rs</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.ID}>
              <td>{expense.ID}</td>

              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => DeleteExpense(expense.ID)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {expenses.map((expense) => (
        <div key={expense.ID}> {expense.expenseType}</div>
      ))}
    </>
  );
};

export default ExpenseList;
