import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <div className="footer-container">
        <p>Copyright@ {currentDate} 6 Circle Media Production</p>
      </div>
    </>
  );
};

export default Footer;
