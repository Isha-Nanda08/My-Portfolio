// Updated Landingpage.jsx with SiteTimer component
import React, { useState, useEffect, useRef } from "react";
import Contact from "../components/Contact";
import useLocoScroll from "../Hooks/LocomotiveScroll";
import GlobalCursor from "../components/CustomCursor"; 
import MondrianGrid from "../components/MondianGrid";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection";
import SkillsExplosion from "../components/SkillsSection";
import RollingNavbar from "../components/Navbar";
import Loader from "../Loader/Loader";
import Profile from "../components/Profiles";
import VoltageButton from "../components/PlaySec";
import GridBackground from "../components/Background";
import SiteTimer from "../components/SetTimer"; // Import the timer component

const Landingpage = () => {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);
  const [showGridSection, setShowGridSection] = useState(false);
  const gridSectionRef = useRef(null);
  const locomotiveInitialized = useRef(false);
  
  // Call the hook at the top level
  useLocoScroll();
  
  // Handle initialization of scroll when loading completes
  useEffect(() => {
    if (!isLoading && !locomotiveInitialized.current) {
      // Add any special initialization here that needs to happen after loading
      locomotiveInitialized.current = true;
    }
  }, [isLoading]);
  
  // Simulate loader duration and switch to content
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  // Function to handle clicking the "Show Grid" button
  const handleShowGrid = () => {
    setShowGridSection(true);
    if (gridSectionRef.current) {
      gridSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <>
      {/* The GlobalCursor is placed at the very top level, outside of any container */}
      <GlobalCursor />
      
      {/* Site Timer Component that shows time spent and total visitors */}
      <SiteTimer />
      
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <GridBackground />
          
          <RollingNavbar />
          <div
            id="main-container"
            data-scroll-container
            style={{
              marginTop: "0",
              backgroundColor: "#000",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              alignItems: "left",
            }}
          >
            <div style={{ width: "200vh" }}>
              <MondrianGrid />
            </div>
            <AboutSection />
            <ProjectsSection />
            <SkillsExplosion />
            <Profile/>
            <VoltageButton/>
            <footer style={{ zIndex: 1000 }}>
              <Contact />
            </footer>
          </div>
        </>
      )}
    </>
  );
};

export default Landingpage;