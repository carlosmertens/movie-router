import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  // console.log("Props provided by React Router:");
  // console.log(props);
  return (
    <nav className="blue darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Movie Fan
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
