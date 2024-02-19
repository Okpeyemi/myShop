import React from "react";
import "./services.css";

import { Service } from "../../components";

const Services = () => {
  return (
    <div className="services">
      <div className="text">
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum
          perferendis voluptates voluptas alias rem! Nesciunt eveniet,
          architecto maiores, asperiores tempore mollitia ipsam alias nam, modi
          dolore iure amet est!
        </p>
      </div>
      <div className="service">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default Services;
