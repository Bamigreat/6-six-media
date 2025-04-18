import React from "react";
import coverVideo from "../../assets/videos/cover-video.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section-shadow">
      <div className="hero-container">
        <video className="herovideo" playsInline autoPlay loop muted>
          <source src={coverVideo} type="video/mp4" />
        </video>

        {/* <video
          className="potrait-video"
          playsInline
          autoPlay
          loop
          muted
          controls
        >
          <source src={Gridvideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

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
