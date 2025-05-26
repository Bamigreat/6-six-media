import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/6-Circle-Media-WHITE.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav>
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
              <Link to="/" onClick={closeMobileMenu}>
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
        {/* <i className="fa-solid fa-bars" onClick={handleClick}></i> */}
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </nav>
  );
};

export default Navbar;
