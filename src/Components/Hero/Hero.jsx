import React from "react";
import coverVideo from "../../assets/videos/cover-video.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section-shadow">
      <div className="hero-container">
        <video
          className="herovideo"
          src={coverVideo}
          typeof="video/mp4"
          autoPlay
          loop
          muted
        ></video>

        <div className="hero-section-heading">
          <h1>
            Bringing stories to life,<br></br> one frame at a time
          </h1>
        </div>
        <div className="hero-section-heading-paragraph">
          <p>
            where we specialize in transforming your brand's vision into reality
            with innovative and effective marketing solutions. <br></br>Our team
            of expert is dedicate to delivering tailored strategies that meet
            the unique needs of each client,<br></br>
            ensuring your business stands out in a competitive market
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
