import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="nav" className="navbar">
      <div className="container">
        <h1>
          <i className="fas fa-video"></i>
          <a href="/">Movies Info</a>
        </h1>
      </div>
    </div>
  );
};
export default Navbar;
