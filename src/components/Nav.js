import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <div className="navbar-brand">Expense Tracker </div>
        </Link>
        <div className="navbar-nav">
          <Link to="/About">
            <div className="nav-link" style={{ fontSize: 20 }}>
              About
            </div>
          </Link>
          <Link to="/Contact">
            <div className="nav-link" style={{ fontSize: 20 }}>
              Contact Us
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
