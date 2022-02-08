import React from "react";
import "./Hero.css"
import heroImage from "../assets/images/cog.svg"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img className="hero__bg-image" src={heroImage} alt="Big Hero" />
    </section>
  );
};

export default Hero;