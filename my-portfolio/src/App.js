import React, { useState, useEffect } from "react";

import Landingpage from "./pages/Landingpage";
import Assistant from "./Assistant/Assistant";


const App = () => {
  
  return (
    <div>
      {/* <RollingNavbar/> */}
      <Landingpage/>
      <Assistant/>
      {/* <ScreenshotWatermark portfolioUrl="https://isha-nanda-portfolio-avqx.onrender.com/" /> */}
    </div>
  );
};

export default App;
