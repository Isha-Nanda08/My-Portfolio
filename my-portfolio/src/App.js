import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import useLocoScroll from "./Hooks/LocomotiveScroll";
import Loader from "./Loader/Loader";
import Grid from "animated-grid-lines";
import Landingpage from "./pages/Landingpage";
import RollingNavbar from "./components/Navbar";
import ScreenshotWatermark from "./components/ScreenshotWatermark";

const App = () => {
  
  return (
    <div>
      {/* <RollingNavbar/> */}
      <Landingpage/>
      <ScreenshotWatermark portfolioUrl="https://isha-nanda-portfolio-avqx.onrender.com/" />
    </div>
  );
};

export default App;
