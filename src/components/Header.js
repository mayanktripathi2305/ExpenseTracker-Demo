import React from "react";

import { container, nav, navbar } from "bootstrap";

// import styled from "styled-components";
// const Navitem = styled.reactstrap.NavItem`
//   font-size: 2.5em;
// `;

const Header = () => {
  return (
    <>
      <div className="container-md" style={{ marginTop: 100 }}>
        <div className="row justify-content-center">
          <h2>Expense Tracker</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
