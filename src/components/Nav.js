import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <a class="navbar-brand">Expense Tracker</a>
        </Link>
        <div className="navbar-nav ml-auto">
          <Link to="/About">
            <a className="nav-link" style={{ fontSize: 20 }}>
              About
            </a>
          </Link>
          <Link to="/Contact">
            <button
              class="btn btn-primary mx-4"
              type="button"
              style={{ fontSize: 20 }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
