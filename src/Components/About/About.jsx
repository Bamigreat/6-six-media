import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="wrapper">
        <div className="about-container">
          <div className="about-us">
            <h1 className="about-us-title">About Us</h1>
            <p className="about-us-description">
              Where we are specialize in transforming your brand's vision into
              reality with innovative and effective marketing solutions. our
              team of experts is dedicated to delivering tailored strategies
              that meet the unique needs of each client, ensuring your business
              stands out in a competitive market
            </p>
            <div className="why-choose-us-wrapper">
              <h1 className="about-us-title " id="why-choose-us">
                Why choose us to work <br></br>on your projects
              </h1>

              <hr className="test-line" />

              <div className="why-choose-us-flex ">
                <div className="first-why-choose-us">
                  <p className="bottom-margin">
                    THROUGH STRATEGIC<br></br>
                    <span className="bold">MARKETING</span>
                  </p>

                  <p>
                    Our ream of expert is dedicated to delivering tailored
                    strategies that meet the unique needs of each client
                  </p>
                </div>

                <div className="second-why-choose-us">
                  <p className="text-alignment-2">
                    <span className="text-gradient">7200+</span>
                  </p>
                  <p className="text-alignment-2">
                    CREATING IMPACTFUL <br />
                    <span className="bold"> MARKETING</span>
                  </p>
                </div>

                <div className="third-why-choose-us">
                  <p className="text-alignment bottom-margin">
                    YOUR BRAND'S <br />
                    <span className="bold">SUCCESS</span>
                  </p>
                  <p className="text-alignment">
                    Our team of expert is dedicated to delivering tailored
                    strategies that meet the unique needs of each client.
                  </p>
                </div>
              </div>
              <hr className="test-line" />
            </div>
            <div className="about-us-icons">
              <i class="fa-brands fa-facebook-f "></i>
              <i class="fa-brands fa-youtube "></i>
              <i class="fa-brands fa-facebook-messenger "></i>
              <i class="fa-brands fa-instagram "></i>
              <i class="fa-brands fa-pinterest-p"></i>
              <i class="fa-brands fa-whatsapp "></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
