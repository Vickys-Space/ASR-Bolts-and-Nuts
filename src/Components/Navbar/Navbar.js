import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import Image from "../Assets/images/ASR.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="navbar-ASR-logo">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={Image} alt="ARS" />
            </Link>
          </div>

          <div className="navbar-BN-logo">
            <img src="/Img/logo.png" alt="Bolts & Nuts" />
          </div>
        </div>

        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="nav-menu-item">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/About-Us"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Contact-Us"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </div>
          </ul>
          <div>
            <Link to="/sign-up">
            {button && (
              <Button buttonStyle="btn--sign-in" link="/sign-up">
                SIGN UP
              </Button>
            )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
