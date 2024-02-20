import React from "react";
import "./prop.css";

import prop from "../../assets/prop.jpg";

const Prop = () => {
  return (
    <div className="in_work">
      <img src={prop} alt="Prop" />
      <div className="sub_prop">
        <span>WebSite</span>
        <span>24TKT</span>
      </div>
    </div>
  );
};

export default Prop;
