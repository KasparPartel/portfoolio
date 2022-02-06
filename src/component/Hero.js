import React from "react";
import "./Hero.css"
import heroImage from "../assets/images/background-svgrepo-com.svg"

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero__bg-image" src={heroImage} alt="Big Hero" />
    </div>
  );
};

export default Hero;