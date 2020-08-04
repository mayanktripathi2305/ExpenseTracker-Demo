import React from "react";
import { Container, Row, Col } from "reactstrap";

const ExpenseTotal = ({ expense }) => {
  return (
    <Container className="text-center" fluid="md" style={{ marginTop: 50 }}>
      <Row>
        <Col sm={{ size: 3, offset: 3 }}>
          <h3>Total Expense </h3>
        </Col>
        <Col sm={{ size: 4 }}>
          <h3>
            Rs.{" "}
            {expense.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount));
            }, 0)}
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseTotal;
