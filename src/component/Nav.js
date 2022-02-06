import React from "react";
import "./Nav.css"

const Nav = () => {
  return (
    <nav className="nav">
      <h2 className="nav__heading"><a href="#home" >Kaspar J. Pärtel</a></h2>
      <ol>
        <li className="nav__list-item"><a href="Home">Home</a></li>
        <li className="nav__list-item"><a href="#about">About</a></li>
        <li className="nav__list-item"><a href="#work">Work</a></li>
        <li className="nav__list-item"><a href="#contact">Contact</a></li>
      </ol>
    </nav>
  );
};

export default Nav;