import React from "react";
import { Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <Container className="text-center" style={{ marginTop: 100 }}>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <h2>Expense Tracker</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
