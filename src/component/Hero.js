import React from "react";
import "./Hero.css"
import heroImage from "../assets/images/background-svgrepo-com.svg"

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero__bg-image" src={heroImage} alt="Big Hero" />
    </section>
  );
};

export default Hero;