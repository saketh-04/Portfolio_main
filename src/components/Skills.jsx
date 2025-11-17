import { useState } from "react";
import styles from "./Skills.module.css";
import skillDetails from "../json/SkillDetails";

// SKILL LOGOS
import javaLogo from "../assets/skills/java.png";
import javascriptLogo from "../assets/skills/javascript.png";
import cLogo from "../assets/skills/c.png";
import cppLogo from "../assets/skills/cpp.png";
import haskellLogo from "../assets/skills/haskell.png";

import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import reactLogo from "../assets/skills/react.png";
import expressLogo from "../assets/skills/express.png";
import nodeLogo from "../assets/skills/node.png";
import tailwindLogo from "../assets/skills/tailwind.png";

import dbmsLogo from "../assets/skills/dbms.png";

import gitLogo from "../assets/skills/git.png";
import githubLogo from "../assets/skills/github.png";
import mysqlLogo from "../assets/skills/mysql.png";
import postmanLogo from "../assets/skills/postman.png";
import mongodbLogo from "../assets/skills/mongodb.png";
import firebaseLogo from "../assets/skills/firebase.png";
import vscodeLogo from "../assets/skills/vscode.png";


// =============================
// PROJECTS SECTION INSIDE MODAL
// =============================
const PROJECTS = [
  {
    name: "DARS – Disaster Alert System",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB", "Tailwind CSS", "Firebase"],
    desc: "AI-powered realtime emergency alert & crisis response platform.",
  },
  {
    name: "AstroAtlas – Space Explorer",
    tech: ["React JS", "TypeScript", "Tailwind CSS"],
    desc: "Space visualization & celestial object exploration dashboard.",
  },
  {
    name: "HireVerse – AI Mock Interview",
    tech: ["React JS", "Node JS", "AI APIs"],
    desc: "Speech-to-text, AI scoring, interview analytics system.",
  },
  {
    name: "MovieApp",
    tech: ["React JS", "Node JS", "Tailwind CSS", "TypeScript"],
    desc: "Movie streaming UI with cast, ratings, and trending feed.",
  },
  {
    name: "GamingApp",
    tech: ["React JS", "Node JS", "Tailwind CSS", "TypeScript"],
    desc: "Modern gaming UI with leaderboard and multi-game support.",
  },
];


// =============================
// SKILL CATEGORIES
// =============================
const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Haskell", logo: haskellLogo },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React JS", logo: reactLogo },
      { name: "Express JS", logo: expressLogo },
      { name: "Node JS", logo: nodeLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
    ],
  },
  {
    name: "Core Concepts",
    skills: [{ name: "DBMS", logo: dbmsLogo }],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
];


// =============================
// SKILL MODAL
// =============================
const SkillModal = ({ skill, onClose }) => {
  const [activeTab, setActiveTab] = useState("demo");
  const [isCompiling, setIsCompiling] = useState(false);
  const [outputVisible, setOutputVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const details = skillDetails[skill.name];

  const runCode = () => {
    setIsCompiling(true);
    setOutputVisible(false);
    setProgress(0);

    let count = 0;
    const interval = setInterval(() => {
      count += 5;
      setProgress(count);
      if (count >= 100) {
        clearInterval(interval);
        setIsCompiling(false);
        setOutputVisible(true);
      }
    }, 60);
  };

  // Filter projects using this skill
  const filteredProjects = PROJECTS.filter((p) =>
    p.tech.includes(skill.name)
  );

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* HEADER */}
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleContainer}>
            <img src={skill.logo} alt={skill.name} className={styles.modalLogo} />
            <h3 className={styles.modalTitle}>{skill.name}</h3>
          </div>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <div className={styles.modalDescription}>{details.description}</div>

        {/* TABS */}
        <div className={styles.modalTabs}>
          {["demo", "projects", "certifications", "useCases"].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className={styles.tabContent}>
          {/* Demo tab */}
          {activeTab === "demo" && (
            <div className={styles.demoContainer}>
              <pre className={styles.codeSnippet}>{details.codeSnippet}</pre>

              <button
                className={styles.runButton}
                onClick={runCode}
                disabled={isCompiling}
              >
                {isCompiling ? "Compiling..." : "Run Code"}
              </button>

              {isCompiling && (
                <div className={styles.progressBarOuter}>
                  <div className={styles.progressBarInner} style={{ width: `${progress}%` }}></div>
                </div>
              )}

              {outputVisible && (
                <div className={styles.outputContainer}>
                  <h4>Output:</h4>
                  <div className={styles.codeOutput}>{details.codeOutput}</div>
                </div>
              )}
            </div>
          )}

          {/* Projects tab */}
          {activeTab === "projects" && (
            <div className={styles.projectsContainer}>
              {filteredProjects.length === 0 ? (
                <p className={styles.emptyState}>No projects found using this skill.</p>
              ) : (
                filteredProjects.map((p, i) => (
                  <div key={i} className={styles.projectCard}>
                    <div className={styles.projectInfo}>
                      <h4>{p.name}</h4>
                      <p>{p.desc}</p>
                      <div className={styles.projectTechList}>
                        {p.tech.map((t, j) => (
                          <span key={j} className={styles.techTag}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Empty sections for now */}
          {(activeTab === "certifications" || activeTab === "useCases") && (
            <p className={styles.emptyState}>No data added for this tab.</p>
          )}
        </div>
      </div>
    </div>
  );
};


// =============================
// MAIN SKILLS COMPONENT
// =============================
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className={styles.skills}>
      <h2 className="section-title">My Skills</h2>

      <div className={styles.skillCategories}>
        {skillCategories.map((cat, i) => (
          <div key={i} className={styles.category}>
            <h3 className={styles.categoryTitle}>{cat.name}</h3>

            <div className={styles.skillGrid}>
              {cat.skills.map((skill, j) => (
                <div
                  key={j}
                  className={styles.skillItem}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      )}
    </section>
  );
};

export default Skills;
