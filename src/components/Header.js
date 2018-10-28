import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <nav className="navigation-wrapper">
      <ul>
        <li>
          <Link to="/">Universe</Link>
        </li>
        <li>
          <Link to="/planet/earth">Earth</Link>
        </li>
        <li>
          <Link to="/planet/mars">Mars</Link>
        </li>
        <li>
          <Link to="/planet/venus">Venus</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
