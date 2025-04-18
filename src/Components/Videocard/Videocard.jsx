import React from "react";
import "./Videocard.css";
import Gridvideo from "../../assets/videos/intro.mp4";
import Gridvideo2 from "../../assets/videos/upwork.mp4";

const Videocard = () => {
  return (
    <>
      <div className="wrapper">
        <div className="video-container">
          <div className="video-potrait-wrapper">
            <video
              className="potrait-video"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              muted
              controls
            >
              <source src={Gridvideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="middle-video-container ">
            <video
              className="middle-video bottow-margin"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              muted
              controls
            >
              <source src={Gridvideo} type="video/mp4" />
            </video>
            <video
              className="middle-video bottow-margin"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              muted
              controls
            >
              <source src={Gridvideo} type="video/mp4" />
            </video>
          </div>

          <div className="video-potrait-wrapper">
            <video
              className="potrait-video"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              muted
              controls
            >
              <source src={Gridvideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="video-container">
          <div className="video-grid ">
            <video
              className="middle-video bottow-margin"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              muted
              controls
            >
              <source src={Gridvideo} type="video/mp4" />
            </video>
            <video
              className="middle-video bottow-margin"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              muted
              controls
            >
              <source src={Gridvideo} type="video/mp4" />
            </video>
          </div>

          <div className="video-potrait-wrapper ">
            <video
              className="potrait-video"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              muted
              controls
            >
              <source src={Gridvideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-potrait-wrapper ">
            <video
              className="potrait-video"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              muted
              controls
            >
              <source src={Gridvideo2} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videocard;
