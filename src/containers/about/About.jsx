import React from "react";
import "./about.css";

import question from "../../assets/question.png";

const About = () => {
  return (
    <div className="about">
      <img src={question} alt="About" />
      <div className="text">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus vel
          nihil enim, tenetur illo unde! Consequatur hic at repellat dolorem sed
          excepturi? Sequi, at quidem similique blanditiis nisi consectetur.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus vel
          nihil enim, tenetur illo unde! Consequatur hic at repellat dolorem sed
          excepturi? Sequi, at quidem similique blanditiis nisi consectetur.
        </p>
      </div>
    </div>
  );
};

export default About;
