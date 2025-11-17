"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import styles from "./Projects.module.css";

import gamingImg from "../assets/project-gaming.jpg";
import disasterImg from "../assets/project-disaster.jpg";
import medisphereImg from "../assets/project-medisphere.jpg";
import astroImg from "../assets/project-astro.jpg";
import hireverseImg from "../assets/project-hireverse.jpg";
import movieImg from "../assets/project-movie.jpg";



const projects = [
  {
    title: "GamingApp",
    description:
      "A modern gaming application featuring multiple mini-games, user profiles, and a complete leaderboard system.",
    technologies: ["React", "TailwindCSS", "TypeScript", "Node.js"],
    image: gamingImg,
    github: "https://github.com/saketh-04/GamesApp.git",
    liveDemo: "https://games-app-coral.vercel.app/",
  },
  {
    title: "Disaster Guard – AI Disaster Management App",
    description:
      "An AI-powered real-time disaster management platform with emergency alerts, maps, notifications, and admin panel.",
    technologies: ["React.js", "Node.js", "MongoDB", "Vite", "Tailwind", "AI APIs"],
    image: disasterImg,
    github: "https://github.com/saketh-04/Disaster_Mangement",
    liveDemo: "https://disaster-mangement.onrender.com/",
  },
  {
    title: "MediSphere – Smart Hospitalization Platform",
    description:
      "Smart healthcare platform with AI chatbot, EHR system, online appointments, and digital hospital workflow automation.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk Auth"],
    image: medisphereImg,
    github: "https://github.com/saketh-04/MediSphere-Smart-Hospitalization",
    liveDemo: "https://medi-sphere-smart-hospitalization-n.vercel.app/",
  },
  {
    title: "AstroAtlas Explorer – Space Exploration Platform",
    description:
      "Advanced space exploration dashboard with celestial search, visualization, and interactive charts.",
    technologies: ["React", "TypeScript", "Tailwind", "Three.js", "Recharts"],
    image: astroImg,
    github: "https://github.com/saketh-04/astro-atlas-explorers-main-2",
    liveDemo: "https://astro-atlas-explorers-main-2.vercel.app/",
  },
  {
    title: "HireVerse – AI Mock Interview Platform",
    description:
      "AI-powered mock interview system with speech-to-text, text-to-speech, dynamic questions, and performance evaluation.",
    technologies: ["React.js", "Node.js", "AI APIs", "Speech-to-Text", "TTS", "Clerk Auth"],
    image: hireverseImg,
    github: "https://github.com/saketh-04/HireVerse-main",
    liveDemo: "https://ai-mock-interview-qsvj.onrender.com/",
  },
  {
    title: "MovieApp",
    description:
      "A movie discovery platform that displays trending films, detailed ratings, cast, and platform availability.",
    technologies: ["React", "TailwindCSS", "TypeScript", "Node.js"],
    image: movieImg,
    github: "https://github.com/saketh-04/Movie_App/",
    liveDemo: "https://saketh-04.github.io/Movie_App/",
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && showPreview) {
        closePreview();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPreview]);

  useEffect(() => {
    // Lock body scroll when modal open
    document.body.style.overflow = showPreview ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [showPreview]);

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const handleProjectInteraction = (project) => {
    setSelectedProject(project);
    setIframeLoading(true);
    setIframeError(false);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setSelectedProject(null);
    setIframeLoading(true);
    setIframeError(false);
  };

  const onIframeLoad = (e) => {
    // If iframe loads but has same-origin restrictions, it still triggers onLoad.
    setIframeLoading(false);
    setIframeError(false);
  };

  // sometimes external sites block embedding (X-Frame-Options). We'll attempt to load
  // and if the iframe doesn't load within X seconds, show fallback.
  useEffect(() => {
    if (!showPreview || !selectedProject?.liveDemo) return;
    const timeout = setTimeout(() => {
      // if still loading after 6s, mark as error — this helps when sites block embedding
      if (iframeLoading) {
        setIframeLoading(false);
        setIframeError(true);
      }
    }, 6000);

    return () => clearTimeout(timeout);
  }, [showPreview, selectedProject, iframeLoading]);

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="section-title">Projects & Achievements</h2>

      {/* Projects Grid */}
      <div className={styles.projectGrid}>
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCard} ${expandedProject === index ? styles.expanded : ""}`}
            onMouseEnter={() => setExpandedProject(index)}
            onMouseLeave={() => setExpandedProject(null)}
            onClick={() => handleProjectInteraction(project)}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <div className={styles.projectImageContainer}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              {project.liveDemo && (
                <div className={styles.liveBadge}>
                  Live
                </div>
              )}
            </div>

            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink} onClick={(e)=>e.stopPropagation()}>
                  <Github size={16} />
                  GitHub
                </a>

                {project.liveDemo && (
                  <button
                    className={`${styles.projectLink} ${styles.demoLink}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectInteraction(project);
                    }}
                    aria-label={`Preview ${project.title}`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All / View Less Button */}
      {projects.length > 3 && (
        <div className={styles.viewMoreContainer}>
          <button className={styles.viewMoreButton} onClick={handleToggleProjects}>
            {showAllProjects ? "View Less" : "View All"}
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path d={showAllProjects ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      )}

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && selectedProject && (
          <motion.div
            className={styles.previewModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className={styles.previewContent}
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.previewHeader}>
                <h3>{selectedProject.title}</h3>
                <div className={styles.headerActions}>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={styles.previewLink}>
                    <Github size={16}/>
                    GitHub
                  </a>

                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.previewLink}
                    >
                      <ExternalLink size={16}/>
                      Open Full Site
                    </a>
                  )}

                  <button className={styles.closeButton} onClick={closePreview} aria-label="Close preview">
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className={styles.previewBody}>
                {/* If there's a live demo and able to embed, show iframe */}
                {selectedProject.liveDemo && !iframeError ? (
                  <div className={styles.iframeContainer}>
                    {iframeLoading && (
                      <div className={styles.iframeLoader}>
                        <div className={styles.spinner} aria-hidden></div>
                        <div className={styles.loaderText}>Loading preview…</div>
                      </div>
                    )}

                    <iframe
                      title={`${selectedProject.title} preview`}
                      src={selectedProject.liveDemo}
                      className={styles.previewIframe}
                      onLoad={onIframeLoad}
                      sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
                    />
                  </div>
                ) : (
                  <div className={styles.noPreview}>
                    <img src={selectedProject.image} alt={selectedProject.title} className={styles.fallbackImage} />
                    <p>
                      Live preview not available (the site may block embedding). You can open it in a new tab.
                    </p>
                    <div className={styles.fallbackActions}>
                      {selectedProject.liveDemo && (
                        <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.previewLink}>
                          <ExternalLink size={16} /> Open Live Demo
                        </a>
                      )}
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={styles.previewLink}>
                        <Github size={16} /> View Source
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.previewFooter}>
                <div className={styles.previewTechs}>
                  {selectedProject.technologies.map((t, i) => (
                    <span key={i} className={styles.techTagSmall}>{t}</span>
                  ))}
                </div>
                <div className={styles.previewMeta}>
                  <span className={styles.metaNote}>Tip: Press <strong>Esc</strong> to close</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </section>
  );
};

export default Projects;
