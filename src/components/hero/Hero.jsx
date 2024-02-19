import React from "react";
import "./hero.css";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="col-1">
        <div className="text">
          <h1>Let's Grow Your Brand To The Next Level</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
            at minima, porro explicabo excepturi. Vero, quis quae. Neque nostrum
            distinctio autem veritatis facilis hic! Praesentium, quidem
            laudantium! A, modi.
          </p>
        </div>
        <div className="button">
          <a href="#Work">See Our Work</a>
        </div>
      </div>
      <div className="col-2">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
