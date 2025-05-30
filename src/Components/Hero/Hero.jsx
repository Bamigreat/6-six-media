import React from "react";
import coverVideo from "../../assets/videos/cover-video.mp4";
import coverPoster from "../../assets/images/intro_thumbnail.png"; // Add a poster image for fallback
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section-shadow">
      <div className="hero-container">
        <video
          className="herovideo"
          playsInline
          autoPlay
          loop
          muted
          poster={coverPoster} // Fallback image if video fails
          aria-label="Background video for hero section"
        >
          <source src={coverVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-description">
          <div className="hero-section-heading">
            <h1>
              Bringing stories to life,
              <br /> one frame at a time
            </h1>
          </div>
          <div className="hero-section-heading-paragraph">
            <p>
              where we specialize in transforming your brand's vision into
              reality with innovative and effective marketing solutions. Our
              team of experts is dedicated to delivering tailored strategies
              that meet the unique needs of each client, ensuring your business
              stands out in a competitive market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
