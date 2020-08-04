import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Button,
  Row,
} from "reactstrap";

const AddExpense = ({ name, amount, AddName, AddAmount, SubmitForm }) => {
  return (
    <Container className="text-center" style={{ marginTop: 20 }}>
      <h2>Add Your Expense</h2>
      <Form style={{ marginTop: 20 }} onSubmit={SubmitForm}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Expense Type">Expense For</Label>
              <Input
                type="text"
                value={name}
                placeholder="Add Expense Type"
                onChange={AddName}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Expense Amount">Expense Amount</Label>
              <Input
                type="number"
                value={amount}
                placeholder="Add Expense Amount"
                onChange={AddAmount}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Button color="primary">Add</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddExpense;
