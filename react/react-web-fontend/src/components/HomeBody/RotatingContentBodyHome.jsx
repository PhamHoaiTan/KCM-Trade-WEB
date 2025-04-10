import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3webp.png";
import img4 from "../../assets/images/img4.webp";



const slides = [
  {
    image: img1,
    title:
      "KCMTrade Australia Office Fuels Orientation Day for Top University Talent",
    date: "February 2025",
    location: "Melbourne, Australia",
  },
  {
    image: img2,
    title: "KCMTrade Expands Global Footprint with New Tokyo Office",
    date: "March 2025",
    location: "Tokyo, Japan",
  },
  {
    image: img3,
    title: "Innovative Trading Tech Showcased at Finance Expo",
    date: "April 2025",
    location: "Singapore",
  },
  {
    image: img4,
    title: "Simplify Your Trading Decisions with One Click",
    date: "April 2025",
    location: "Singapore",
  },
  {
    image: img3,
    title: " Australia Office Fuels Orientation Day for Top University Talent",
    date: "April 2025",
    location: "Singapore",
  },
  {
    image: img3,
    title: "Professional Honors | Tim Waterer Appointed to Forbes Advisor Australia Advisory Board",
    date: "April 2025",
    location: "Singapore",
  },
  {
    image: img3,
    title: "CSR | Global Offices Unite for Earth Hour",
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
    <div>
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
