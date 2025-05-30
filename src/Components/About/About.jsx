import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="wrapper">
        <div className="about-container">
          <div className="about-us">
            <h1 className="about-us-title">About Us</h1>
            <p className="about-us-description">
              We specialize in transforming your brand's vision into reality
              with innovative and effective marketing solutions. Our team of
              experts is dedicated to delivering tailored strategies that meet
              the unique needs of each client, ensuring your business stands out
              in a competitive market.
            </p>
            <div className="why-choose-us-wrapper">
              <h1 className="about-us-title" id="why-choose-us">
                Why choose us to work
                <br />
                on your projects
              </h1>
              <hr className="test-line" />
              <div className="why-choose-us-flex">
                <div className="first-why-choose-us">
                  <p className="bottom-margin">
                    THROUGH STRATEGIC
                    <br />
                    <span className="bold">MARKETING</span>
                  </p>
                  <p>
                    Our team of experts is dedicated to delivering tailored
                    strategies that meet the unique needs of each client.
                  </p>
                </div>
                <div className="second-why-choose-us">
                  <p className="text-alignment-2">
                    <span className="text-gradient">7200+</span>
                  </p>
                  <p className="text-alignment-2">
                    CREATING IMPACTFUL
                    <br />
                    <span className="bold">MARKETING</span>
                  </p>
                </div>
                <div className="third-why-choose-us">
                  <p className="text-alignment bottom-margin">
                    YOUR BRAND'S
                    <br />
                    <span className="bold">SUCCESS</span>
                  </p>
                  <p className="text-alignment">
                    Our team of experts is dedicated to delivering tailored
                    strategies that meet the unique needs of each client.
                  </p>
                </div>
              </div>
              <hr className="test-line" />
            </div>
            <div className="about-us-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit our Facebook page"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit our YouTube channel"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://messenger.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with us on Facebook Messenger"
              >
                <i className="fa-brands fa-facebook-messenger"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit our Instagram profile"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit our Pinterest boards"
              >
                <i className="fa-brands fa-pinterest-p"></i>
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with us on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
