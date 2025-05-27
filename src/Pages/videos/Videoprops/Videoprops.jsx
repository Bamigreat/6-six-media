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
import video9 from "../../../assets/videos/Cover Art showreel_compress_2.mp4"; // Assuming you have video3.mp4 in the same directory
import poster1 from "../../../assets/images/intro_thumbnail.png"; // Placeholder poster image
import poster2 from "../../../assets/images/intro_thumbnail.png";
import poster3 from "../../../assets/images/intro_thumbnail.png";
import poster4 from "../../../assets/images/intro_thumbnail.png";
import poster5 from "../../../assets/images/intro_thumbnail.png";
import poster6 from "../../../assets/images/intro_thumbnail.png";
import poster7 from "../../../assets/images/intro_thumbnail.png";
import poster8 from "../../../assets/images/intro_thumbnail.png";
import poster9 from "../../../assets/images/intro_thumbnail.png";

const Videoprops = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartScroll = useRef(null);
  const scrollTimeout = useRef(null);

  const videos = [
    { src: video1, title: "Video 1", poster: poster1 },
    { src: video2, title: "Video 2", poster: poster2 },
    { src: video3, title: "Video 3", poster: poster3 },
    { src: video4, title: "Video 4", poster: poster4 },
    { src: video5, title: "Video 5", poster: poster5 },
    { src: video6, title: "Video 6", poster: poster6 },
    { src: video7, title: "Video 7", poster: poster7 },
    { src: video8, title: "Video 8", poster: poster8 },
    { src: video9, title: "Video 9", poster: poster9 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const videoWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / videoWidth);
      setCurrentIndex(newIndex);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        const nearest = newIndex * videoWidth;
        container.scrollTo({ left: nearest, behavior: "smooth" });
      }, 100);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartScroll.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current !== null && scrollRef.current) {
      const currentX = e.touches[0].clientX;
      const diff = (touchStartX.current - currentX) * 1.5;
      scrollRef.current.scrollLeft = touchStartScroll.current + diff;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    touchStartScroll.current = null;
    handleScroll();
  };

  if (isMobile) {
    return (
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {videos.map((video, index) => (
            <div key={index} className="carousel-slide">
              <h3 className="video-title-overlay">{video.title}</h3>
              {Math.abs(index - currentIndex) <= 1 ? (
                <video
                  className="carousel-video"
                  src={video.src}
                  title={video.title}
                  poster={video.poster}
                  controls
                  muted
                  loop
                  preload="metadata"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div
                  className="video-placeholder"
                  style={{ backgroundImage: `url(${video.poster})` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
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
        </div>
      ))}
    </div>
  );
};
export default Videoprops;
