import React from "react";
import { ListGroup, ListGroupItem, Container } from "reactstrap";

const ExpenseList = ({ expenses }) => {
  return (
    <Container className="text-center" style={{ marginTop: 20 }}>
      <ListGroup>
        {expenses.map((expense) => (
          <ListGroupItem key={expense.id}>
            {expense.name} Rs. {expense.amount}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ExpenseList;
