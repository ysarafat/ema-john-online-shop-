import React from "react";
import "./navbar.css";
import logo from "../../assets/images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <Link to="/order-review">Order Review</Link>
        </li>
        <li>
          <Link to="/manage-inventory">Manage Inventory</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
