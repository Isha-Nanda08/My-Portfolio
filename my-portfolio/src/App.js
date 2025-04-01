import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import useLocoScroll from "./Hooks/LocomotiveScroll";
import Loader from "./Loader/Loader";
import Grid from "animated-grid-lines";
import Landingpage from "./pages/Landingpage";

const App = () => {
  
  return (
    <div>
      <Landingpage/>
    </div>
  );
};

export default App;
