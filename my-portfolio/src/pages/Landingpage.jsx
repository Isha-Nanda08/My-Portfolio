import React, { useState, useEffect, useRef } from "react";
import Contact from "../components/Contact";
import useLocoScroll from "../Hooks/LocomotiveScroll";
import Grid from "animated-grid-lines";
import CustomCursor from "../components/CustomCursor";
import MondrianGrid from "../components/MondianGrid";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection";
import SkillsExplosion from "../components/SkillsSection";
import RollingNavbar from "../components/Navbar";
import Loader from "../Loader/Loader"
// Import or create the DominoSpinner component
const DominoSpinner = () => {
  return (
    <div className="loader-container" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#000",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <div className="spinner" style={{
        position: "relative",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        marginLeft: "-75px"
      }}>
        <span style={{
          position: "absolute",
          top: "50%",
          left: "80px",
          width: "35px",
          height: "7px",
          background: "#ffffff",
          animation: "dominos 1s ease infinite",
          animationDelay: "0.125s",
          boxShadow: "2px 2px 3px 0px black"
        }}></span>
        <span style={{
          position: "absolute",
          top: "50%",
          left: "70px",
          width: "35px",
          height: "7px",
          background: "#ffffff",
          animation: "dominos 1s ease infinite",
          animationDelay: "0.3s",
          boxShadow: "2px 2px 3px 0px black"
        }}></span>
        <span style={{
          position: "absolute",
          top: "50%",
          left: "60px",
          width: "35px",
          height: "7px",
          background: "#ffffff",
          animation: "dominos 1s ease infinite",
          animationDelay: "0.425s",
          boxShadow: "2px 2px 3px 0px black"
        }}></span>
        <span style={{
          position: "absolute",
          top: "50%",
          left: "50px",
          width: "35px",
          height: "7px",
          background: "#ffffff",
          animation: "dominos 1s ease infinite",
          animationDelay: "0.54s",
          boxShadow: "2px 2px 3px 0px black"
        }}></span>
        <span style={{
          position: "absolute",
          top: "50%",
          left: "40px",
          width: "35px",
          height: "7px",
          background: "#ffffff",
          animation: "dominos 1s ease infinite",
          animationDelay: "0.665s",
          boxShadow: "2px 2px 3px 0px black"
        }}></span>
        <span style={{
          position: "absolute",
          top: "50%",
          left: "30px",
          width: "35px",
          height: "7px",
          background: "#ffffff",
          animation: "dominos 1s ease infinite",
          animationDelay: "0.79s",
          boxShadow: "2px 2px 3px 0px black"
        }}></span>
        <span style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          width: "35px",
          height: "7px",
          background: "#ffffff",
          animation: "dominos 1s ease infinite",
          animationDelay: "0.915s",
          boxShadow: "2px 2px 3px 0px black"
        }}></span>
        <span style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          width: "35px",
          height: "7px",
          background: "#ffffff",
          animation: "dominos 1s ease infinite",
          boxShadow: "2px 2px 3px 0px black"
        }}></span>
      </div>
      <style>
        {`
          @keyframes dominos {
            50% {
              opacity: 0.7;
            }
            75% {
              transform: rotate(90deg);
            }
            80% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RollingNavbar />
          <div
            id="main-container"
            data-scroll-container
            className="relative cursor-none"
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
            <CustomCursor />
            <div style={{ width: "200vh" }}>
              <MondrianGrid />
            </div>
            <AboutSection />
            <ProjectsSection />
            <SkillsExplosion />

            {/* Button to show grid section */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "40px 0",
                backgroundColor: "#a09898",
              }}
            >
              <button
                onClick={handleShowGrid}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#082120",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 0 15px rgba(123, 104, 238, 0.6)",
                  transition: "all 0.3s ease",
                  zIndex: 1000,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#082120";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#082120";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Enough of scrolling?
                <br />
                Play with the Grid Section
              </button>
            </div>

            {/* Grid Section - conditionally rendered */}
            <div
              ref={gridSectionRef}
              style={{
                width: "100%",
                height: showGridSection ? "50vh" : "0",
                zIndex: showGridSection ? 10 : -1, // Increase z-index when visible
                overflow: "hidden",
                backgroundColor: "#fff",
                marginTop: "0",
                transition: "height 0.5s ease-in-out",
                opacity: showGridSection ? 1 : 0,
                visibility: showGridSection ? "visible" : "hidden",
                position: "relative", // Add this to establish a new stacking context
              }}
            >
              {showGridSection && <Grid />} {/* Only render Grid when section is shown */}
            </div>

            {/* Contact Section */}
            <div style={{ zIndex: 1000 }}>
              <Contact />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Landingpage;