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
    <div>
      <Header />
      <Services />
      <About />
    </div>
  );
};

export default App;
