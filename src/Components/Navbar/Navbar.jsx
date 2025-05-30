import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/6-Circle-Media-WHITE.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Show navbar when scrolling up or at the top
      setIsVisible(!isScrollingDown || currentScrollPos <= 0);

      // Apply background color on any scroll
      setIsScrolled(currentScrollPos > 0);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`navbar ${isVisible ? "navbar-visible" : "navbar-hidden"} ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <img src={Logo} className="logo" alt="6 circle logo" />
      <div>
        <div className={`moble-nav-bar ${click ? "hide-mobile-menu" : ""}`}>
          <ul className="nav-home">
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/videos" onClick={closeMobileMenu}>
                Porfolio
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Information
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>
          </ul>
          <div>
            <p className="btn mobile-btn-hidden" onClick={closeMobileMenu}>
              Enquiries
            </p>
          </div>
        </div>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </nav>
  );
};

export default Navbar;
