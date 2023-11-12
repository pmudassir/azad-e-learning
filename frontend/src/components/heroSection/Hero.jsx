import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-blob"></div>
      <div className="hero-left">
        <h1>
          Kerala's Best <br /> E-Learning <br /> Platform
        </h1>
        <div className="tags">
          <p>Any time</p>
          <p>Anywhere</p>
        </div>
      </div>
      <div className="hero-right">
        <img src="/images/Hero.jpg" className="heroImg" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;