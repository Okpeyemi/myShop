import React from "react";
import "./workwithus.css";

const WorkWithUs = () => {
  return (
    <div className="workwithus">
      <h1>Work With Us</h1>
      <form action="#" method="post">
        <div className="row">
          <input type="text" placeholder="Name" />
        </div>
        <div className="row">
          <input type="email" placeholder="Email" />
        </div>
        <div className="row">
          <input type="phone" placeholder="Phone" />
        </div>
        <div className="submit">
          <button type="submit">Get Started</button>
        </div>
      </form>
    </div>
  );
};

export default WorkWithUs;
