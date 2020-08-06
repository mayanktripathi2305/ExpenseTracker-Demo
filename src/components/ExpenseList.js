import React from "react";
import { ListGroup, ListGroupItem, Container } from "reactstrap";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <div className="container-md" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              {expenses.map((expense) => (
                <li className="list-group-item" key={expense.id}>
                  {expense.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6">
            <ul className="list-group">
              {expenses.map((expense) => (
                <li className="list-group-item" key={expense.id}>
                  Rs. {expense.amount}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
