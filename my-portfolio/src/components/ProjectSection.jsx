import React, { useState, useRef } from 'react';
import { CardContainer, CardBody, CardItem } from '../components/CardContainer';
import { X, Play, Pause, ExternalLink, ArrowUpRight } from 'lucide-react';
import '../styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: "ATLAS GAME",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment processing",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    video: "https://player.vimeo.com/video/359281775",
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example.com/demo1",
    codeLink: "https://github.com/example/project1",
    demoEmbed: "https://example.com/demo1"
  },
  {
    id: 2,
    title: "TalkGenie",
    description: "A responsive portfolio website with dynamic content and 3D animations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    video: "https://player.vimeo.com/video/225434434",
    skills: ["React", "Three.js", "CSS3", "GSAP"],
    demoLink: "https://example.com/demo2",
    codeLink: "https://github.com/example/project2",
    demoEmbed: "https://example.com/demo2"
  },
  {
    id: 3,
    title: "FashionEngage",
    description: "A collaborative task management application with real-time updates and data visualization",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
    video: "https://player.vimeo.com/video/466188871",
    skills: ["React", "Firebase", "Chart.js", "Material UI"],
    demoLink: "https://example.com/demo3",
    codeLink: "https://github.com/example/project3",
    demoEmbed: "https://example.com/demo3"
  },
  {
    id: 4,
    title: "TalkGenie",
    description: "A responsive portfolio website with dynamic content and 3D animations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    video: "https://player.vimeo.com/video/225434434",
    skills: ["React", "Three.js", "CSS3", "GSAP"],
    demoLink: "https://example.com/demo2",
    codeLink: "https://github.com/example/project2",
    demoEmbed: "https://example.com/demo2"
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
      // backgroundColor: '#111',
      color: 'white',
      padding: '60px 20px',
      position: 'relative',
      // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.9) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundPosition: 'center center',
      minHeight: '100vh',
    }}>
      <div className="projects-header" style={{
        textAlign: 'center',
        position: 'relative',
        marginBottom: '60px'
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
      
      <div className="projects-grid" style={{
        display: 'fles',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        // gap: '30px',
        maxWidth: '100%',
        margin: '0 auto',
        flexDirection:'column'
      }}>
        {projectsData.map((project) => (
          <CardContainer key={project.id} style={{
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'rgba(20, 20, 20, 0.8)',
            border: `1px solid ${project.id % 2 === 0 ? 'rgba(91, 208, 251, 0.3)' : 'rgba(181, 69, 229, 0.3)'}`,
          }}>
            <CardBody className="project-card" style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              padding: '0',
            }}>
              <CardItem translateZ={100} className="project-media-container" style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
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
                      bottom: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      zIndex: 2,
                    }}
                  >
                    {playingVideos[project.id] ? (
                      <Pause size={18} color="white" />
                    ) : (
                      <Play size={18} color="white" />
                    )}
                  </button>
                  
                  {/* Arrow decoration coming out of the image */}
                  <div 
                    className="project-arrow" 
                    onClick={() => openPreview(project.id)}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: project.id % 2 === 0 ? '#5BD0FB' : '#B545E5',
                      width: '40px',
                      height: '40px',
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
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <ArrowUpRight size={22} color="white" />
                  </div>
                </div>
              </CardItem>
              
              <div style={{ padding: '20px' }}>
                <CardItem translateZ={50} className="project-title" style={{
                  fontSize: '1.8rem',
                  marginBottom: '10px',
                  color: project.id % 2 === 0 ? '#5BD0FB' : '#B545E5',
                  fontWeight: '600',
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
                
                <CardItem translateZ={40} className="project-skills" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '20px',
                }}>
                  {project.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="project-skill"
                      style={{
                        backgroundColor: project.id % 2 === 0 ? 'rgba(91, 208, 251, 0.15)' : 'rgba(181, 69, 229, 0.15)',
                        color: project.id % 2 === 0 ? '#5BD0FB' : '#B545E5',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </CardItem>
                
                <div className="project-links" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 'auto',
                }}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    onClick={() => openPreview(project.id)}
                    className="project-preview-button"
                    style={{
                      backgroundColor: project.id % 2 === 0 ? '#5BD0FB' : '#B545E5',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '4px',
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
                      color: project.id % 2 === 0 ? '#5BD0FB' : '#B545E5',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      border: `1px solid ${project.id % 2 === 0 ? '#5BD0FB' : '#B545E5'}`,
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
            </CardBody>
          </CardContainer>
        ))}
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

      {/* Decorative element similar to your homepage */}
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

      {/* Add this CSS to your Projects.css file */}
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
          
          /* Optional hover effects */
          .CardContainer:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease;
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsSection;