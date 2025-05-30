import React, { useState, useEffect, useRef } from "react";
import "./Videoprops.css";
import video1 from "../../../assets/videos/intro.mp4";
import video2 from "../../../assets/videos/SHowreel_compress_3.mp4"; // Assuming you have video2.mp4 in the same directory
import video3 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video4 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video5 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video6 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video7 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video8 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video9 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video10 from "../../../assets/videos/upwork.mp4";
import video11 from "../../../assets/videos/upwork.mp4";
// import video11 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video12 from "../../../assets/videos/upwork.mp4";
import video13 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video14 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import video15 from "../../../assets/videos/Cover Art showreel_compress_2.mp4";
import poster1 from "../../../assets/images/intro_thumbnail.png"; // Placeholder poster image
import poster2 from "../../../assets/images/intro_thumbnail.png";
import poster3 from "../../../assets/images/intro_thumbnail.png";
import poster4 from "../../../assets/images/intro_thumbnail.png";
import poster5 from "../../../assets/images/intro_thumbnail.png";
import poster6 from "../../../assets/images/intro_thumbnail.png";
import poster7 from "../../../assets/images/intro_thumbnail.png";
import poster8 from "../../../assets/images/intro_thumbnail.png";
import poster9 from "../../../assets/images/intro_thumbnail.png";
import poster10 from "../../../assets/images/portrait_thumbnail.png"; //portrait_thumbnail.png
import poster11 from "../../../assets/images/portrait_thumbnail.png"; //portrait_thumbnail.png
// import poster11 from "../../../assets/images/intro_thumbnail.png";  //portrait_thumbnail.png
import poster12 from "../../../assets/images/portrait_thumbnail.png";
import poster13 from "../../../assets/images/intro_thumbnail.png";
import poster14 from "../../../assets/images/intro_thumbnail.png";
import poster15 from "../../../assets/images/intro_thumbnail.png";

const Videoprops = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const videoRefs = useRef([]);

  const videos = [
    {
      src: video1,
      title: "Video 1",
      poster: poster1,
      description: "This is the first video. It showcases our latest project.",
    },
    {
      src: video2,
      title: "Video 2",
      poster: poster2,
      description: "This is the second video.",
    },
    {
      src: video3,
      title: "Video 3",
      poster: poster3,
      description: "This is the third video.",
    },
    {
      src: video4,
      title: "Video 4",
      poster: poster4,
      description: "This is the fourth video.",
    },
    {
      src: video5,
      title: "Video 5",
      poster: poster5,
      description: "This is the fifth video.",
    },
    {
      src: video6,
      title: "Video 6",
      poster: poster6,
      description: "This is the sixth video.",
    },
    {
      src: video7,
      title: "Video 7",
      poster: poster7,
      description: "This is the seventh video.",
    },
    {
      src: video8,
      title: "Video 8",
      poster: poster8,
      description: "This is the eighth video.",
    },
    {
      src: video9,
      title: "Video 9",
      poster: poster9,
      description: "This is the ninth video.",
    },

    {
      src: video10,
      title: "Video 10",
      poster: poster10,
      description: "This is the tenth video.",
    },

    {
      src: video11,
      title: "Video 11",
      poster: poster11,
      description: "This is the tenth video.",
    },

    {
      src: video12,
      title: "Video 12",
      poster: poster12,
      description: "This is the tenth video.",
    },

    {
      src: video13,
      title: "Video 13",
      poster: poster13,
      description: "This is the tenth video.",
    },

    {
      src: video14,
      title: "Video 14",
      poster: poster14,
      description: "This is the tenth video.",
    },

    {
      src: video15,
      title: "Video 15",
      poster: poster15,
      description: "This is the tenth video.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      videoRefs.current.forEach((ref, index) => {
        if (ref && ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInView = rect.top >= 0 && rect.top <= window.innerHeight;
          if (isInView && ref.current.paused) {
            ref.current.play().catch(() => {}); // Auto-play if in view
            ref.current.muted = true; // Mute by default
          } else if (!isInView && !ref.current.paused) {
            ref.current.pause(); // Pause when out of view
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="video-feed">
      {isMobile ? (
        videos.map((video, index) => (
          <div
            key={index}
            className="video-item"
            ref={(el) => (videoRefs.current[index] = el)}
          >
            <video
              className="feed-video"
              src={video.src}
              title={video.title}
              poster={video.poster}
              controls
              preload="metadata"
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">{video.title}</div>
            <div className="video-description">{video.description}</div>
          </div>
        ))
      ) : (
        <div className="grid-container">
          {videos.map((video, index) => (
            <div className="grid-item" key={index}>
              <div className="video-wrapper">
                <video
                  className="grid-video"
                  src={video.src}
                  title={video.title}
                  poster={video.poster}
                  controls
                  muted
                  loop
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Videoprops;
