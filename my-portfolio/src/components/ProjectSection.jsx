import React from 'react';
import { CardContainer, CardBody, CardItem } from '../components/CardContainer';
import '../styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment processing",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example.com/demo1",
    codeLink: "https://github.com/example/project1"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website with dynamic content and 3D animations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    skills: ["React", "Three.js", "CSS3", "GSAP"],
    demoLink: "https://example.com/demo2",
    codeLink: "https://github.com/example/project2"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and data visualization",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
    skills: ["React", "Firebase", "Chart.js", "Material UI"],
    demoLink: "https://example.com/demo3",
    codeLink: "https://github.com/example/project3"
  }
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">Check out some of my recent work</p>
      </div>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <CardContainer key={project.id}>
            <CardBody className="project-card">
              <CardItem translateZ={50} className="project-title">
                {project.title}
              </CardItem>
              
              <CardItem as="p" translateZ={60} className="project-description">
                {project.description}
              </CardItem>
              
              <CardItem translateZ={100} className="project-image-container">
                <img
                  src={project.image}
                  className="project-image"
                  alt={project.title}
                />
              </CardItem>
              
              <CardItem translateZ={40} className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="project-skill">{skill}</span>
                ))}
              </CardItem>
              
              <div className="project-links">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.demoLink}
                  target="_blank"
                  className="project-link"
                >
                  Live Demo →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.codeLink}
                  target="_blank"
                  className="project-button"
                >
                  View Code
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;