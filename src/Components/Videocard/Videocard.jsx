import React from "react";
import "./Videocard.css";
import Gridvideo from "../../assets/videos/My Intro video_compress_1.mp4";
import Gridvideo2 from "../../assets/videos/Upwork Edit_compress_edit.mp4";

const Videocard = () => {
  return (
    <>
      <div className="wrapper">
        <div className="video-container">
          <div className="video-potrait-wrapper">
            <video
              className="potrait-video"
              src={Gridvideo2}
              typeof="video/mp4"
              autoPlay
              loop
              muted
              controls
            ></video>
          </div>

          <div className="middle-video-container ">
            <video
              className="middle-video"
              src={Gridvideo}
              typeof="video/mp4"
              autoPlay
              loop
              muted
              controls
            ></video>
            <video
              className="middle-video bottow-margin"
              src={Gridvideo}
              typeof="video/mp4"
              autoPlay
              loop
              muted
              controls
            ></video>
          </div>

          <div className="video-potrait-wrapper">
            <video
              className="potrait-video"
              src={Gridvideo2}
              typeof="video/mp4"
              autoPlay
              loop
              muted
              controls
            ></video>
          </div>
        </div>

        <div className="video-container">
          <div className="video-grid ">
            <video
              className="middle-video"
              src={Gridvideo}
              typeof="video/mp4"
              autoPlay
              loop
              muted
              controls
            ></video>
            <video
              className="middle-video bottow-margin"
              src={Gridvideo}
              typeof="video/mp4"
              autoPlay
              loop
              muted
              controls
            ></video>
          </div>

          <div className="video-potrait-wrapper ">
            <video
              className="potrait-video"
              src={Gridvideo2}
              typeof="video/mp4"
              autoPlay
              loop
              muted
              controls
            ></video>
          </div>

          <div className="video-potrait-wrapper ">
            <video
              className="potrait-video"
              src={Gridvideo2}
              typeof="video/mp4"
              autoPlay
              loop
              muted
              controls
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videocard;
