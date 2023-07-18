import React, { useState, useEffect } from "react";
import "./SliderShow.css";
// import Brentford from '../assets/Brentford.jpeg'
// import newcastle from "../assets/newcastle.jpeg";


const SliderShow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slides]);

  return (
    <div className="slider-show">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide} alt={slide.alt} />
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderShow;
