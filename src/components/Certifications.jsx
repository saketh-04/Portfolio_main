// src/components/Certifications.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./Certifications.module.css";
import certificationsData from "../json/certification";

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("certifications");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  const modalRef = useRef(null);
  const cardsRef = useRef([]);

  const certifications = certificationsData.certifications || [];
  const licenses = certificationsData.licenses || [];

  useEffect(() => {
    cardsRef.current = [];
  }, [activeTab]);

  // Escape / outside click to close modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    const onDown = (e) => {
      if (modalActive && modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [modalActive]);

  const displayed = activeTab === "certifications" ? certifications : licenses;
  const limit = expanded ? displayed.length : Math.min(3, displayed.length);

  useEffect(() => {
    // simple staggered fade in
    cardsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      setTimeout(() => {
        el.style.transition = "all 360ms cubic-bezier(.2,.9,.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 120 + i * 90);
    });
  }, [displayed, limit]);

  function openModal(cert) {
    setSelected(cert);
    setModalActive(true);
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 10);
  }

  function closeModal() {
    setModalActive(false);
    setSelected(null);
    document.body.style.overflow = "auto";
  }

  function formatDate(d) {
    if (!d) return "";
    const dt = new Date(d);
    return dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.sectionTitle}>Professional Credentials</h2>
          <div className={styles.sectionUnderline} />
          <div className={styles.tabs}>
            <button
              className={`${styles.tabBtn} ${activeTab === "certifications" ? styles.active : ""}`}
              onClick={() => setActiveTab("certifications")}
            >
              Certifications <span className={styles.count}>{certifications.length}</span>
            </button>

            <button
              className={`${styles.tabBtn} ${activeTab === "licenses" ? styles.active : ""}`}
              onClick={() => setActiveTab("licenses")}
            >
              Licenses <span className={styles.count}>{licenses.length}</span>
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.grid}>
            {displayed.slice(0, limit).map((cert, idx) => (
              <article
                key={cert.id || idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={styles.card}
                onClick={() => openModal(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(cert)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.thumbWrap}>
                    {cert.image ? (
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img src={cert.image} alt={cert.title + " badge"} className={styles.thumb} />
                    ) : (
                      <div style={{ width: 72, height: 72, borderRadius: 8, background: "rgba(255,255,255,0.02)" }} />
                    )}
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{cert.title}</h3>
                    <p className={styles.cardOrg}>{cert.organization}</p>
                    <p className={styles.cardDate}>{formatDate(cert.issueDate)}</p>

                    <div className={styles.cardFooter}>
                      <span className={styles.viewDetails}>View details →</span>
                      <span className={styles.badgeSmall}>Certificate</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {displayed.length === 0 && <div className={styles.emptyState}>No items found</div>}
          </div>

          <aside className={styles.side}>
            <div className={styles.sideCard}>
              <h4 className={styles.sideTitle}>Credentials Overview</h4>
              <p className={styles.sideText}>
                Verified certificates and badges. Click any card to open the certificate viewer with badge gallery,
                description, skills and PDF download.
              </p>

              <div className={styles.sideActions}>
                {displayed.length > 0 && (
                  <button className={styles.primary} onClick={() => setActiveTab("certifications")}>
                    Browse Credentials
                  </button>
                )}
                <button className={styles.secondary} onClick={() => setExpanded((v) => !v)}>
                  {expanded ? "View Less" : `View All (${displayed.length})`}
                </button>
              </div>
            </div>

            <div className={`${styles.sideCard} ${styles.glow}`}>
              <h5 className={styles.sideSmallTitle}>Tip</h5>
              <p className={styles.sideTextSmall}>Press <strong>Esc</strong> to close the detail modal.</p>
            </div>
          </aside>
        </div>

        {displayed.length > 3 && (
          <div className={styles.mobileViewMore}>
            <button className={styles.viewMoreBtn} onClick={() => setExpanded((v) => !v)}>
              {expanded ? "View Less" : `View All (${displayed.length})`}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div className={`${styles.modalOverlay} ${modalActive ? styles.modalActive : ""}`} role="dialog" aria-modal="true">
          <div className={styles.modalCard} ref={modalRef}>
            <button className={styles.modalClose} aria-label="Close" onClick={closeModal}>×</button>

            <div className={styles.modalInner}>
              <div className={styles.modalLeft}>
                {/* Main large preview */}
                {selected.image ? (
                  <img src={selected.image} alt={selected.title} className={styles.modalImg} />
                ) : (
                  <div style={{ width: "100%", height: 220, borderRadius: 8, background: "rgba(255,255,255,0.02)" }} />
                )}

                {/* Thumbnails (badges) */}
                {Array.isArray(selected.badges) && selected.badges.length > 0 && (
                  <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {selected.badges.map((b, i) => (
                      <img key={i} src={b} alt={`badge-${i}`} style={{ width: 56, height: 56, borderRadius: 8, objectFit: "cover", border: "1px solid rgba(255,255,255,0.03)" }} />
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.modalRight}>
                <h3 className={styles.modalTitle}>{selected.title}</h3>
                <p className={styles.modalOrg}>{selected.organization}</p>
                <p className={styles.modalDate}>Issued: {formatDate(selected.issueDate)}</p>

                {selected.credentialID && (
                  <p style={{ margin: "6px 0", color: "rgba(170,220,220,0.85)" }}>
                    <strong>Credential ID:</strong> {selected.credentialID}
                  </p>
                )}

                {selected.description && <p className={styles.modalDescription}>{selected.description}</p>}

                {selected.skills && selected.skills.length > 0 && (
                  <>
                    <div style={{ marginTop: 8, marginBottom: 6, color: "#9ad" }}>Skills</div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {selected.skills.map((s, i) => (
                        <span key={i} style={{ background: "rgba(0,216,216,0.06)", color: "var(--cyan)", padding: "6px 10px", borderRadius: 999, border: "1px solid rgba(0,216,216,0.08)" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <div className={styles.modalActions}>
                  {selected.pdf ? (
                    <a href={selected.pdf} target="_blank" rel="noopener noreferrer" className={styles.verifyBtn}>
                      View / Download PDF
                    </a>
                  ) : (
                    <button className={styles.verifyBtn} onClick={() => alert("PDF not available for this certificate")}>
                      View PDF
                    </button>
                  )}

                  <button
                    className={styles.copyBtn}
                    onClick={() => {
                      navigator.clipboard?.writeText(selected.credentialID || "");
                      alert("Credential ID copied");
                    }}
                  >
                    Copy ID
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
