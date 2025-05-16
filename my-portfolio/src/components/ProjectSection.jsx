import React, { useState, useRef } from 'react';
import { CardContainer, CardBody, CardItem, CardLeftSide, CardRightSide } from '../components/CardContainer';
import { X, Play, Pause, ExternalLink, ArrowUpRight } from 'lucide-react';
import '../styles/Projects.css';
import Atlas from "../images/image.png";
import fashion from "../images/image2.png";
import genie from "../images/image3.png";
import career from "../images/image4.png"
// Sample project data - would come from your actual data source
const projectsData = [
  {
    id: 1,
    title: "ATLAS GAME",
    description: ` 
                  Developed a scalable multiplayer game with Node.js and Socket.io, supporting 300+ rooms and 100+ players per
                  room with 11 API endpoints
 ◦                Designed RESTful API using Express.js and PostgreSQL for managing and validating 5,000+ location data entries
                  `,
    image: Atlas,
    video: "https://player.vimeo.com/video/359281775",
    skills: ["React", "Node.js", "postgresql", "WebSockets","Express.js"],
    demoLink: "https://atlas-game.vercel.app/",
    codeLink: "https://github.com/Isha-Nanda08/ATLAS_GAME",
    demoEmbed: "https://atlas-game.vercel.app/"
  },
  {
    id: 2,
    title: "TalkGenie",
    description: "A responsive portfolio website with dynamic content and 3D animations. The interactive UI showcases work in a visually engaging way, with smooth transitions and custom animations that enhance user experience.",
    image: genie,
    video: "https://player.vimeo.com/video/225434434",
    skills: ["React", "Node.js", "CSS3", "Express.js","Gemini API"],
    demoLink: "https://talkgenie.vercel.app/",
    codeLink: "https://github.com/Isha-Nanda08/TalkGenie",
    demoEmbed: "https://talkgenie.vercel.app/"
  },
  {
    id: 3,
    title: "FashionEngage",
    description: `Engineered an interactive e-commerce platform with Three.js for real-time 3D model rendering
 ◦ Implemented 360-degree product view functionality and AR capabilities using ZapWorks API`,
    image: fashion,
    video: "https://player.vimeo.com/video/466188871",
    skills: ["React", "MondoDB", "Express.js", "Node.js","ZapWorks API","3JS","Tailwind CSS","Blendor"],
    demoLink: "https://fashion-engage.vercel.app/",
    codeLink: "https://github.com/Isha-Nanda08/fashionEngage",
    demoEmbed: "https://fashion-engage.vercel.app/"
  },
  {
    id: 4,
    title: "CarrerConnect",
    description: "A digital workspace for creatives that streamlines the design process from concept to delivery. Features include template libraries, collaborative editing, and integrated feedback tools for team communication.",
    image: career,
    video: "https://player.vimeo.com/video/225434434",
    skills: ["React", "GraphQL", "AWS", "Tailwind"],
    demoLink: "https://carrerconnect-two.vercel.app/",
    codeLink: "https://github.com/Isha-Nanda08/Minor",
    demoEmbed: "https://carrerconnect-two.vercel.app/"
  }
];

const ProjectsSection = () => {
  const [activePreview, setActivePreview] = useState(null);
  const [playingVideos, setPlayingVideos] = useState({});
  const videoRefs = useRef({});

  const openPreview = (projectId) => {
    setActivePreview(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setActivePreview(null);
    document.body.style.overflow = 'auto';
  };

  const toggleVideo = (projectId) => {
    setPlayingVideos(prev => {
      const newState = { ...prev };
      newState[projectId] = !prev[projectId];
      
      // Play or pause the video
      if (newState[projectId]) {
        videoRefs.current[projectId]?.play();
      } else {
        videoRefs.current[projectId]?.pause();
      }
      
      return newState;
    });
  };

  // Store video ref when it's created
  const setVideoRef = (projectId, element) => {
    if (element) {
      videoRefs.current[projectId] = element;
    }
  };

  return (
    <section className="projects-section" style={{
      color: 'white',
      padding: '60px 20px',
      position: 'relative',
      backgroundSize: '20px 20px',
      backgroundPosition: 'center center',
      minHeight: '100vh',
    }}>
      <div className="projects-header" style={{
        textAlign: 'center',
        position: 'relative',
        marginBottom: '80px'
      }}>
        <h2 className="projects-title" style={{
          fontSize: '4rem',
          color: '#5BD0FB',
          margin: '0',
          fontWeight: '300',
        }}>PROJECTS</h2>
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '5px',
          backgroundColor: '#B545E5',
          bottom: '-15px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}></div>
        <p className="projects-subtitle" style={{
          fontSize: '1.2rem',
          color: '#ccc',
          marginTop: '30px'
        }}>Check out some of my recent work</p>
      </div>
      
      <div className="projects-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '100px',
      }}>
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          const accentColor = isEven ? '#5BD0FB' : '#B545E5';
          
          return (
            <CardContainer key={project.id} containerClassName="project-card-container" style={{
              width: '100%',
              marginBottom: '20px',
            }}>
              <CardBody className="project-card" style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                backgroundColor: 'rgba(20, 20, 20, 0.8)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: `1px solid rgba(${isEven ? '91, 208, 251' : '181, 69, 229'}, 0.3)`,
                height: '320px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              }}>
                {/* Media Side */}
                <div style={{
                  flex: '1',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRight: isEven ? `1px solid rgba(${isEven ? '91, 208, 251' : '181, 69, 229'}, 0.2)` : 'none',
                  borderLeft: !isEven ? `1px solid rgba(${isEven ? '91, 208, 251' : '181, 69, 229'}, 0.2)` : 'none',
                  backgroundColor: 'rgba(15, 15, 15, 0.9)',
                }}>
                  <CardItem translateZ={100} className="project-media-container" style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}>
                    {/* Video thumbnail with fallback image */}
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                    }}>
                      {playingVideos[project.id] ? (
                        <video
                          ref={(el) => setVideoRef(project.id, el)}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                          loop
                          muted
                          playsInline
                        >
                          <source src={project.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      )}
                      
                      {/* Play/pause button overlay */}
                      <button
                        onClick={() => toggleVideo(project.id)}
                        style={{
                          position: 'absolute',
                          bottom: '20px',
                          right: '20px',
                          backgroundColor: 'rgba(0, 0, 0, 0.6)',
                          border: 'none',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          cursor: 'pointer',
                          zIndex: 2,
                          transition: 'transform 0.2s ease, background-color 0.2s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                        }}
                      >
                        {playingVideos[project.id] ? (
                          <Pause size={20} color="white" />
                        ) : (
                          <Play size={20} color="white" />
                        )}
                      </button>
                      
                      {/* Preview button */}
                      <div 
                        className="project-preview-icon" 
                        onClick={() => openPreview(project.id)}
                        style={{
                          position: 'absolute',
                          top: '20px',
                          right: '20px',
                          backgroundColor: accentColor,
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          cursor: 'pointer',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                          zIndex: 3,
                          transition: 'transform 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                        }}
                      >
                        <ArrowUpRight size={22} color="white" />
                      </div>
                    </div>
                  </CardItem>
                </div>
                
                {/* Content Side */}
                <div style={{
                  flex: '1.2',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <CardItem translateZ={50} className="project-title" style={{
                      fontSize: '2rem',
                      marginBottom: '12px',
                      color: accentColor,
                      fontWeight: '600',
                      letterSpacing: '1px',
                    }}>
                      {project.title}
                    </CardItem>
                    
                    <CardItem as="p" translateZ={60} className="project-description" style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      color: '#ddd',
                      marginBottom: '20px',
                    }}>
                      {project.description}
                    </CardItem>
                  </div>
                  
                  <div>
                    <CardItem translateZ={40} className="project-skills" style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '25px',
                    }}>
                      {project.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="project-skill"
                          style={{
                            backgroundColor: `rgba(${isEven ? '91, 208, 251' : '181, 69, 229'}, 0.15)`,
                            color: accentColor,
                            padding: '5px 12px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: '500',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </CardItem>
                    
                    <div className="project-links" style={{
                      display: 'flex',
                      gap: '15px',
                    }}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        onClick={() => openPreview(project.id)}
                        className="project-preview-button"
                        style={{
                          backgroundColor: accentColor,
                          color: 'white',
                          padding: '10px 18px',
                          borderRadius: '6px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: '500',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        Preview <ExternalLink size={14} />
                      </CardItem>
                      
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.codeLink}
                        target="_blank"
                        className="project-button"
                        style={{
                          backgroundColor: 'transparent',
                          color: accentColor,
                          padding: '10px 18px',
                          borderRadius: '6px',
                          border: `1px solid ${accentColor}`,
                          textDecoration: 'none',
                          fontWeight: '500',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        View Code
                      </CardItem>
                    </div>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>

      {/* Preview Modal */}
      {activePreview && (
        <div 
          className="project-preview-modal" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div 
            className="preview-content" 
            style={{
              width: '90%',
              height: '90%',
              backgroundColor: '#151515',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(91, 208, 251, 0.3)',
              animation: 'modalFadeIn 0.3s ease',
            }}
          >
            <div className="preview-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '15px 20px',
              borderBottom: '1px solid rgba(91, 208, 251, 0.2)',
            }}>
              <h3 style={{ 
                margin: 0, 
                color: '#5BD0FB',
                fontSize: '1.2rem',
              }}>
                {projectsData.find(p => p.id === activePreview)?.title}
              </h3>
              <button 
                onClick={closePreview}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px',
                  borderRadius: '50%',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <X size={24} color="#5BD0FB" />
              </button>
            </div>
            <div className="preview-iframe-container" style={{
              width: '100%',
              height: 'calc(100% - 55px)',
            }}>
              <iframe
                src={projectsData.find(p => p.id === activePreview)?.demoEmbed}
                title={projectsData.find(p => p.id === activePreview)?.title}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        width: '15px',
        height: '80px',
        borderRadius: '20px',
        backgroundColor: '#5BD0FB',
        opacity: '0.7'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '20px',
        transform: 'translateY(-50%)',
        width: '15px',
        height: '60px',
        borderRadius: '20px',
        backgroundColor: '#B545E5',
        opacity: '0.7'
      }}></div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .project-card-container {
            transition: transform 0.5s ease;
          }
          
          .project-card-container:hover {
            transform: translateY(-10px);
          }
          
          .card-container-inner {
            transition: transform 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67);
          }
          
          .project-preview-button:hover, .project-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection;