import React from "react";
import "./App.css";

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
      <Work />
      <WorkWithUs />
      <Footer />
    </div>
  );
};

export default App;
