import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Nav.css";


const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const linkToggleHamburger = () => {
    if (hamburgerOpen) toggleHamburger();
  };

  return (
    <Router>
      <nav className={hamburgerOpen ? "nav nav__active" : "nav"}>
        <h2 className="nav__heading"><Link to="/#home">KJP</Link></h2>
        <ol>
          <li className="nav__list-item"><Link to="/#home" onClick={linkToggleHamburger}>Home</Link></li>
          <li className="nav__list-item"><Link to="/#about" onClick={linkToggleHamburger}>About</Link></li>
          <li className="nav__list-item"><Link to="/#work" onClick={linkToggleHamburger}>Work</Link></li>
          <li className="nav__list-item"><Link to="/#contact" onClick={linkToggleHamburger}>Contact</Link></li>
        </ol>
        {hamburgerOpen ? <IoMdClose
            className="nav__hamburger" size="1.7em" onClick={toggleHamburger} /> :
          <GiHamburgerMenu className="nav__hamburger" size="1.7em" onClick={toggleHamburger} />}
      </nav>
    </Router>
  );
};

export default Nav;