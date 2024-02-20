import React from "react";
import "./work.css";

import { Prop } from "../../components";

const Work = () => {
  return (
    <div className="work">
      <div className="text">
        <h1>Our Work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem
          distinctio ullam nesciunt non deleniti aperiam necessitatibus facilis
          vel amet beatae nisi reprehenderit, corporis illo pariatur magni
          quidem voluptas placeat!
        </p>
      </div>
      <div className="prop">
        <Prop />
        <Prop />
        <Prop />
        <Prop />
        <Prop />
        <Prop />
      </div>
    </div>
  );
};

export default Work;
