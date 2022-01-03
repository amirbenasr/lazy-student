import React from "react";
import "../Styles/navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/config">Config</a>
        <a href="/profile">Profile</a>
      </div>
    </div>
  );
}

export default Navbar;
