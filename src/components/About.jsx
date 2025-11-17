import { useState, useEffect } from "react";
import styles from "./About.module.css";
import profilePic from "../assets/image.png";


const About = () => {
  // Typing text lines
  const texts = [
    "Hello, I'm Paggilla Saketh",
    "Full Stack Developer & Software Engineer",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // ⭐ BEST SMOOTH TYPING EFFECT ⭐
  useEffect(() => {
    const fullText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (index < fullText.length) {
          setText((prev) => prev + fullText[index]);
          setIndex(index + 1);
          setTypingSpeed(45); // fast typing
        } else {
          setIsDeleting(true);
          setTypingSpeed(600); // slight pause
        }
      } else {
        // Deleting backward
        if (text.length > 0) {
          setText((prev) => prev.slice(0, -1));
          setTypingSpeed(35); // fast delete
        } else {
          setIsDeleting(false);
          setIndex(0);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setTypingSpeed(300); // switch to next line
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, texts, currentTextIndex, typingSpeed]);

  return (
    <section id="about" className={styles.about}>
      <h2 className="section-title">About Me</h2>

      <div className={styles.content}>
        {/* IMAGE */}
        <div className={styles.imageContainer}>
          <img src={profilePic} alt="Paggilla Saketh" className={styles.profileImage} />
        </div>

        {/* BIO */}
        <div className={styles.bio}>
          {/* TYPEWRITER */}
          <h3 className={styles.typewriter}>
            {text}
            <span className={styles.cursor}>|</span>
          </h3>

          <p>
            I am a passionate Full Stack Developer and Computer Science Engineering student at
            Amrita Vishwa Vidyapeetham, specializing in building modern, scalable applications
            using React, Node.js, Java, Python, and cloud technologies.
          </p>

          <p>
            With strong skills in DSA, OOPs, Databases, and Full Stack Web Development, I enjoy
            solving real-world problems through technology. I’ve built multiple production-ready
            projects including Disaster Management Systems, Gaming Apps, Movie Apps, AstroAtlas, 
            and more.
          </p>

          <p>
            🚀 I am always excited to collaborate on innovative ideas, work on open-source, and 
            explore emerging technologies like AI, cloud, and automation.
          </p>

          {/* SOCIAL LINKS */}
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/saketh-04"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/paggilla-saketh-95a84833b"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <i className="cib-leetcode"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
