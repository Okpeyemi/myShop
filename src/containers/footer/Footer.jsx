import React from "react";
import "./footer.css";

import { Menu } from "../../components";

const Footer = () => {
  return (
    <div className="footer">
      <div className="company">
        <h1>myShop</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quae
          molestias debitis corporis cumque iure labore odit adipisci, eius sunt
          harum nisi assumenda alias praesentium quasi id nobis sapiente nam.
        </p>
      </div>
      <div className="pages">
        <h2>Company</h2>
        <Menu />
      </div>
      <div className="adresse">
        <h2>Adresses</h2>
        <span>0022961916209</span>
        <span>maqsoudt9@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
