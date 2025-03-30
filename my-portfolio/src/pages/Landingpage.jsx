import React, { useState, useEffect } from "react";
import Marquee from "../components/Marque";
import VortexBackground from "../components/Vortexbackground";
import Contact from "../components/Contact";
import useLocoScroll from "../Hooks/LocomotiveScroll";
import Loader from "../Loader/Loader";
import Grid from "animated-grid-lines";
import CustomCursor from "../components/CustomCursor"; // Import CustomCursor

const Landingpage = () => {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);

  useLocoScroll();

  // Simulate loader duration and switch to content
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  // Show loader while loading, then switch to content
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div id="main-container" data-scroll-container className="relative cursor-none" 
        style={{
            marginTop:'0',
            backgroundColor:'#000'
        }}>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Vortex Background */}
      <VortexBackground  />

      {/* Animated Grid */}
      <div
        style={{
          width: "100%",
          height: "50vh",
          zIndex: -1, // Push grid to background
          overflow: "hidden",
          backgroundColor: "#fff",
          marginTop: "0",
        }}
      >
        <Grid />
      </div>

      {/* Contact Section */}
      {/* <Contact /> */}
    </div>
  );
};

export default Landingpage;
