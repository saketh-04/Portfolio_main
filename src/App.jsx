import { useState, useEffect, useCallback } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import CapstoneProjectSection from "./components/Dars";
import CompetitiveStats from "./components/CompetitiveStats"; // ⭐ NEW SECTION

import Particles from "./components/animations/ParticleAnimation";
import styles from "./App.module.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleScroll = useCallback(() => {
    const sections = [
      "about",
      "projects",
      "skills",
      "competitive", // ⭐ Auto-scroll highlight
      "education",
      "certifications",
      "contact"
    ];

    const scrollPosition = window.scrollY;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop - 150 &&
          scrollPosition < offsetTop + offsetHeight - 150
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.App}>
      {/* Background Particles */}
      <div style={{ position: "fixed", inset: 0, zIndex: -1 }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <Header activeSection={activeSection} />

      <About />

      {/* ⭐ Your DARS Case Study */}
      <CapstoneProjectSection />

      <Projects />

      <Skills />

      {/* ⭐ NEW GitHub + LeetCode Section */}
      <div id="competitive">
        <CompetitiveStats />
      </div>

      <Education />

      <Certifications />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
