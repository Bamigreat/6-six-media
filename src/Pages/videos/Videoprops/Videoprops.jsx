import React from "react";
import "./Videoprops.css";

import Gridvideo from "../../../assets/videos/intro.mp4";
import Gridvideo2 from "../../../assets/videos/upwork.mp4";
import Poster1 from "../../../assets/images/portrait_thumbnail.png";
import Poster2 from "../../../assets/images/intro_thumbnail.png";

function Videoprops() {
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
              autoPlay
              muted
              controls
              poster={Poster1}
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
              autoPlay
              muted
              controls
              poster={Poster2}
            >
              <source src={Gridvideo} type="video/mp4" />
            </video>
            <video
              className="middle-video bottow-margin"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              autoPlay
              muted
              controls
              poster={Poster2}
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
              autoPlay
              muted
              controls
              poster={Poster1}
            >
              <source src={Gridvideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="video-container">
          <div className="middle-video-container  ">
            <video
              className="middle-video bottow-margin"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              autoPlay
              muted
              controls
              poster={Poster2}
            >
              <source src={Gridvideo} type="video/mp4" />
            </video>
            <video
              className="middle-video bottow-margin"
              playsInline
              preload="metadata"
              loading="lazy"
              loop
              autoPlay
              muted
              controls
              poster={Poster2}
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
              autoPlay
              muted
              controls
              poster={Poster1}
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
              autoPlay
              muted
              controls
              poster={Poster1}
            >
              <source src={Gridvideo2} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videoprops;
