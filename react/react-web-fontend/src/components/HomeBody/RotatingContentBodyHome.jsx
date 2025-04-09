import React, { useEffect, useState } from "react";
import './RotatingContentBodyHome.css'
const slides = [
  {
    image: 123,
    title: "KCMTrade Australia Office Fuels Orientation Day for Top University Talent",
    date: "February 2025",
    location: "Melbourne, Australia",
  },
  {
    image: 123,
    title: "KCMTrade Expands Global Footprint with New Tokyo Office",
    date: "March 2025",
    location: "Tokyo, Japan",
  },
  {
    image: 123,
    title: "Innovative Trading Tech Showcased at Finance Expo",
    date: "April 2025",
    location: "Singapore",
  },
  {
    image: 123,
    title: "Test4",
    date: "April 2025",
    location: "Singapore",
  },
  {
    image: 123,
    title: "Test5",
    date: "April 2025",
    location: "Singapore",
  },
  {
    image: 123,
    title: "Test6",
    date: "April 2025",
    location: "Singapore",
  },
  {
    image: 123,
    title: "Test7",
    date: "April 2025",
    location: "Singapore",
  },
];

const RotatingContentBodyHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const { image, title, date, location } = slides[currentIndex];

  return (
    <div className="main-content">
      <div className="main-left">
        <img src={image} alt="Main News" />
      </div>
      <div className="main-right">
        <h3>{title}</h3>
        <p className="date">
          {date}
          <br />
          {location}
        </p>
        <button className="read-more">Read More</button>
      </div>

      <div className="slider-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default RotatingContentBodyHome;
