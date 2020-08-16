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

const AddExpense = ({
  name,
  amount,
  AddName,
  AddAmount,
  SubmitForm,
  DeleteAll,
}) => {
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="row justify-content-center">
        <div className="col-md-auto">
          <button
            type="button"
            className="ManageExpense"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            Add Expense
          </button>
        </div>
        <div className="col-md-auto">
          <button type="button" className="DeleteExpense" onClick={DeleteAll}>
            Delete All Expenses
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add New Expense
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <FormGroup>
                <Label for="Expense Type">Add Expense Type</Label>
                <Input
                  type="text"
                  value={name}
                  placeholder="e.g Breakfast"
                  onChange={AddName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Expense Amount">Add Expense Amount</Label>
                <Input
                  type="number"
                  value={amount}
                  placeholder="Add Expense Amount"
                  onChange={AddAmount}
                />
              </FormGroup>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={SubmitForm}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
