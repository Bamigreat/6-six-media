import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <div className="footer-container">
        <p>
          <i class="fa-regular fa-copyright"></i> {currentDate} 6 Circle Media
          Production
        </p>
      </div>
    </>
  );
};

export default Footer;
