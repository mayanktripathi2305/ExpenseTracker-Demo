import React from "react";
import "./Expense.css";

import { container, nav, navbar } from "bootstrap";

// import styled from "styled-components";
// const Navitem = styled.reactstrap.NavItem`
//   font-size: 2.5em;
// `;

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Expense Tracker
        </a>
        <div className="navbar-nav ml-auto">
          <a className="nav-link" href="#" style={{ fontSize: 20 }}>
            About
          </a>
          <button
            class="btn btn-primary mx-4"
            type="button"
            style={{ fontSize: 20 }}
          >
            Contact Us
          </button>
        </div>
      </nav>

      <div className="container-md" style={{ marginTop: 100 }}>
        <div className="row justify-content-center">
          <h2>Expense Tracker</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
