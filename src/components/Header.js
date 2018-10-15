import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <nav className="navigation-wrapper">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/first">First</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
        <li>
          <Link to="/third">Third</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
