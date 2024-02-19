import React from "react";
import "./App.css";

import { Hero, Navbar, Prop, Service } from "./components";
import {
  About,
  Footer,
  Header,
  Services,
  Work,
  WorkWithUs,
} from "./containers";

const App = () => {
  return (
    <div className="header">
      <Header />
      <Services />
    </div>
  );
};

export default App;
