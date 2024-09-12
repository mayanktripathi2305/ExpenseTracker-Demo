import React from "react";
import "./Expense.css";

import { container, nav, navbar } from "bootstrap";

// import styled from "styled-components";
// const Navitem = styled.reactstrap.NavItem`
//   font-size: 2.5em;
// `;

const Header = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto Header">
          <h2>MANAGE YOUR EXPENSES</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
