"use client"
import { useState } from "react";
import { X, ChevronDown, ChevronUp, Trophy, Award, BookOpen, MapPin, Calendar } from "lucide-react";
import styles from "./Education.module.css";

// 🔥 Your institution logos
const AmritaLogo = "https://via.placeholder.com/200x200?text=College";
const InterLogo = "https://via.placeholder.com/200x200?text=Intermediate";
const SchoolLogo = "https://via.placeholder.com/200x200?text=School";

// 🔥 Updated with YOUR EDUCATION DETAILS
const educationData = [
  {
    institution: "Amrita Vishwa Vidyapeetham",
    logo: AmritaLogo,
    years: "2023 - 2027",
    degree: "B.Tech, Computer Science and Engineering",
    location: "Coimbatore",
    status: "(Ongoing)",
  },
  {
    institution: "Sri Chaitanya Junior College",
    logo: InterLogo,
    years: "2021 - 2023",
    stream: "Intermediate (MPC)",
    location: "R.K. Puram, Telangana",
    marks: "94.1%",
  },
  {
    institution: "Sri Chaitanya School",
    logo: SchoolLogo,
    years: "2021",
    stream: "Class 10",
    location: "Ranga Reddy, Telangana",
    marks: "10 GPA",
  },
];

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isSemesterExpanded, setIsSemesterExpanded] = useState(false);

  return (
    <section id="education" className={styles.education}>
      <h2 className="section-title">Education</h2>

      {/* Timeline List */}
      <div className={styles.timeline}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={styles.timelineItem}
            onClick={() => setSelectedEducation(edu)}
          >
            <div className={styles.timelineContent}>
              <h3>{edu.institution}</h3>
              {edu.degree && <h4>{edu.degree}</h4>}
              {edu.stream && <h4>{edu.stream}</h4>}
              <p><MapPin size={14} className="inline mr-1" /> {edu.location}</p>
              <p className={styles.years}>
                <Calendar size={14} className="inline mr-1" /> {edu.years}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedEducation && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedEducation(null)}
            >
              <X size={24} />
            </button>

            <div className={styles.modalGrid}>

              {/* Logo, Institute, Years */}
              <div className={styles.institutionInfo}>
                {selectedEducation.logo ? (
                  <div className={styles.institutionIcon}>
                    <img
                      src={selectedEducation.logo}
                      alt="Institution"
                      width={64}
                      height={64}
                    />
                  </div>
                ) : (
                  <div className={styles.institutionIcon}>
                    <BookOpen size={40} color="#00ffff" />
                  </div>
                )}

                <h2>{selectedEducation.institution}</h2>

                <p className={styles.years}>
                  <Calendar size={16} className="inline mr-1" />{" "}
                  {selectedEducation.years}
                </p>

                <p>
                  <MapPin size={16} className="inline mr-1" />{" "}
                  {selectedEducation.location}
                </p>
              </div>

              {/* Detailed Info Section */}
              <div className={styles.educationDetails}>

                {/* Degree */}
                {selectedEducation.degree && (
                  <div className={styles.section}>
                    <h3>
                      <Award size={18} className="inline" /> Degree
                    </h3>
                    <p>{selectedEducation.degree}</p>
                  </div>
                )}

                {/* Stream */}
                {selectedEducation.stream && (
                  <div className={styles.section}>
                    <h3>
                      <BookOpen size={18} className="inline" /> Stream
                    </h3>
                    <p>{selectedEducation.stream}</p>
                  </div>
                )}

                {/* Marks */}
                {selectedEducation.marks && (
                  <div className={styles.section}>
                    <h3>
                      <Award size={18} className="inline" /> Marks
                    </h3>
                    <p>{selectedEducation.marks}</p>
                  </div>
                )}

                {/* Status / Ongoing */}
                {selectedEducation.status && (
                  <div className={styles.section}>
                    <h3>
                      <Trophy size={18} className="inline" /> Status
                    </h3>
                    <p>{selectedEducation.status}</p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
