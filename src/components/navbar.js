import React from "react";
import './navbar.css';

function Navbar(){

    return(
        <nav>
      <ul className="navbar">
        <li>
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li>
          <a href="/about" className="navbar-link">About</a>
        </li>
        <li>
          <a href="/contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  
    )

}

export default Navbar;