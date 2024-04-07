import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../src/images/logo.png";

const Header = () => {
  return (
    <header>
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
          }

          .left-content {
            display: flex;
            align-items: center; /* Align items vertically in center */
          }

          .right-content {
            display: flex;
            align-items: center; /* Align items vertically in center */
          }

          nav ul {
            display: flex;
            justify-content: space-between;
            list-style-type: none;
            padding: 0;
          }

          nav ul li {
            margin-right: 10px; /* Adjust spacing between list items */
          }
        `}
      </style>
      <div className="header">
        <img src={logoImage} alt="Logo" style={{ width: "50px" }} />
        <div className="right-content company-name">Company Name</div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
