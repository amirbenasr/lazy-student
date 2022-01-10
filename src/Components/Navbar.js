import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <h2>Lazy~Student</h2>
      </div>
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
          <Link to="/start">Start</Link>
      </div>
    </div>
  );
}

export default Navbar;
