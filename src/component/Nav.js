import React, { useState } from "react";
import "./Nav.css";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className={hamburgerOpen ? "nav nav__active" : "nav"}>
      <h2 className="nav__heading"><a href="#home">KJP</a></h2>
      <ol>
        <li className="nav__list-item"><a href="Home">Home</a></li>
        <li className="nav__list-item"><a href="#about">About</a></li>
        <li className="nav__list-item"><a href="#work">Work</a></li>
        <li className="nav__list-item"><a href="#contact">Contact</a></li>
      </ol>
      <FaBars className="nav__hamburger" size="1.5em" onClick={toggleHamburger} />
    </nav>
  );
};

export default Nav;