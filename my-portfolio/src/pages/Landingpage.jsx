import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import useLocoScroll from "../Hooks/LocomotiveScroll";
import Loader from "../Loader/Loader";
import Grid from "animated-grid-lines";
import CustomCursor from "../components/CustomCursor"; // Import CustomCursor
// import FlickeringGrid from "../components/FlickeringGrid";
// import IconCloud from "../components/IconCloud";
import MondrianGrid from "../components/MondianGrid";
import Explode from "../components/Explode";
// import SocialIcons from "../components/socialIcons";
import HexagonGrid from "../components/Hexagon";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection";
// import RollingNavbar from "../components/Navbar";
// import SkillsGrid from "../components/skills";


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
    // return <Loader />;
  }

  return (
    <div id="main-container" data-scroll-container className="relative cursor-none" 
        style={{
            marginTop:'0',
            backgroundColor:'#000',
            // width:"100vh"
            overflow:'hidden',
            display:'flex',
            flexDirection:'column',
            justifyContent:'left',
            alignItems:'left',

        }}>
  
      
      <CustomCursor />

    
      <div
        style={{
          // position: "absolute",
          width:"200vh",

        }}
      >

        <MondrianGrid/>
      </div>
      <AboutSection/>
      <ProjectsSection/>
      <div style={{
        // display:'flex',
        // position:'relative',
        // top:'50%'
        
      }}>
        <Explode/>
        {/* // <SkillsGrid/> */}
      </div>

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
      <HexagonGrid/>
      <Contact />
    </div>
  );
};

export default Landingpage;
