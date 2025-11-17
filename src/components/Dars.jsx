// src/components/Dars.jsx
import React, { useState } from "react";
import {
  Database,
  BarChart3,
  Cloud,
  Satellite,
  AlertCircle,
  Zap,
  Users,
  MapPin,
  ExternalLink,
  Play,
  ChevronRight,
  DollarSign,
} from "lucide-react";
import "./Dars.css";

export default function Dars() {
  const [activeTab, setActiveTab] = useState("overview");

  const technologies = [
    { name: "React", category: "Frontend", emoji: "⚛️" },
    { name: "Node.js & Express", category: "Backend", emoji: "🟢" },
    { name: "MongoDB", category: "Database", emoji: "🗄️" },
    { name: "Google Maps API", category: "Maps", emoji: "🗺️" },
    { name: "Socket.io", category: "Realtime", emoji: "🔁" },
    { name: "Twilio", category: "Alerts & SMS", emoji: "✉️" },
    { name: "Firebase", category: "Auth & Realtime", emoji: "🔥" },
    { name: "AI APIs (NLP)", category: "Intelligence", emoji: "🤖" },
  ];

  const insights = [
    {
      Icon: DollarSign,
      title: "Faster Emergency Routing",
      description:
        "Auto-calculated fastest rescue routes reduced average dispatch time by ~35%.",
      impact: "Faster on-ground response",
    },
    {
      Icon: MapPin,
      title: "Accurate Geolocation Alerts",
      description:
        "Pinpointed incident locations shared with teams and affected users using Maps + GPS.",
      impact: "Improved situational accuracy",
    },
    {
      Icon: Users,
      title: "Community Coordination",
      description:
        "Nearby volunteers and shelters are notified in real-time — improved resource allocation.",
      impact: "Better local coordination",
    },
    {
      Icon: BarChart3,
      title: "Incident Trend Detection",
      description:
        "AI models flag clusters and anomalies to prioritize incidents automatically.",
      impact: "Proactive intervention",
    },
  ];

  const stats = [
    { Icon: AlertCircle, value: "48K+", label: "Real-time Alerts Sent" },
    { Icon: Satellite, value: "12K+", label: "Locations Monitored" },
    { Icon: Zap, value: "2m 30s", label: "Avg. Response Time" },
    { Icon: Users, value: "6.5K", label: "Incidents Managed" },
  ];

  return (
    <section className="dars-section" id="dars">
      {/* decorative background / particles */}
      <div className="dars-bg">
        <div className="dars-particles" />
        <div className="dars-grid" />
      </div>

      <header className="dars-header">
        <div className="dars-badge">
          <Cloud className="badge-icon" />
          <span>Real-time · Scalable · Production-ready</span>
        </div>

        <h2 className="dars-title">DARS — Disaster Alert & Crisis Response System</h2>

        <p className="dars-sub">
          A full-stack, real-time disaster detection and response platform — integrates live location
          tracking, automated multi-channel alerts (SMS/Push), maps visualization, shelter coordination,
          and AI-powered incident prioritization to accelerate rescue and relief.
        </p>
      </header>

      <nav className="dars-tabs" role="tablist" aria-label="DARS navigation">
        <button
          className={`tab ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
          role="tab"
          aria-selected={activeTab === "overview"}
        >
          <Database className="tab-icon" />
          Project Overview
        </button>

        <button
          className={`tab ${activeTab === "pipeline" ? "active" : ""}`}
          onClick={() => setActiveTab("pipeline")}
          role="tab"
          aria-selected={activeTab === "pipeline"}
        >
          <Satellite className="tab-icon" />
          Realtime Pipeline
        </button>

        <button
          className={`tab ${activeTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
          role="tab"
          aria-selected={activeTab === "dashboard"}
        >
          <BarChart3 className="tab-icon" />
          AI Dashboard
        </button>
      </nav>

      <div className="dars-content">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="panel overview-panel" role="tabpanel">
            <div className="overview-left">
              <div className="card problem-card">
                <h3>Problem & Objective</h3>
                <p>
                  Natural disasters and large-scale emergencies require rapid, coordinated response.
                  DARS is built to provide real-time detection, automated multi-channel alerts (SMS, push),
                  interactive maps for responders, and AI-based prioritization so communities and authorities
                  can act faster and smarter.
                </p>
              </div>

              <div className="card tech-card">
                <h4>Technology Stack</h4>
                <div className="tech-grid">
                  {technologies.map((t) => (
                    <div key={t.name} className="tech-item">
                      <div className="tech-emoji">{t.emoji}</div>
                      <div className="tech-meta">
                        <strong>{t.name}</strong>
                        <small>{t.category}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="overview-right">
              <div className="card impact-card">
                <h4>Key Capabilities</h4>
                <div className="insights">
                  {insights.map((ins) => (
                    <div key={ins.title} className="insight">
                      <div className="ins-icon">
                        <ins.Icon />
                      </div>
                      <div>
                        <strong>{ins.title}</strong>
                        <p className="small">{ins.description}</p>
                        <span className="impact">{ins.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Pipeline */}
        {activeTab === "pipeline" && (
          <div className="panel pipeline-panel" role="tabpanel">
            <div className="pipeline-visual card">
              <div className="flow">
                <div className="step">
                  <div className="dot">📡</div>
                  <div className="label">Sensor / Mobile Report</div>
                </div>
                <ChevronRight className="flow-arrow" />
                <div className="step">
                  <div className="dot">☁️</div>
                  <div className="label">Ingest (Socket.io / Firebase)</div>
                </div>
                <ChevronRight className="flow-arrow" />
                <div className="step">
                  <div className="dot">🏗️</div>
                  <div className="label">Processing (Node.js / AI)</div>
                </div>
                <ChevronRight className="flow-arrow" />
                <div className="step">
                  <div className="dot">📣</div>
                  <div className="label">Alerts (Twilio / Push)</div>
                </div>
              </div>
            </div>

            <div className="pipeline-info">
              <h3>Big-picture Pipeline</h3>
              <p className="desc">
                Capture → Enrich → Dispatch. Realtime feeds are captured via websocket, enriched with
                location & context using reverse-geocoding and AI classification, then dispatched to
                responders via SMS, push, and dashboard alerts.
              </p>

              <div className="activities">
                <div className="activity card">
                  <h5>Ingestion</h5>
                  <ul>
                    <li>Realtime streams (Socket.io / Firebase)</li>
                    <li>Mobile report & sensor ingestion</li>
                    <li>Geo extraction and normalization</li>
                  </ul>
                </div>

                <div className="activity card">
                  <h5>Processing</h5>
                  <ul>
                    <li>NLP classification & severity scoring</li>
                    <li>Deduplication & clustering</li>
                    <li>Nearest-responder lookup</li>
                  </ul>
                </div>

                <div className="activity card">
                  <h5>Dispatch</h5>
                  <ul>
                    <li>Automated SMS/Voice via Twilio</li>
                    <li>Push notifications & live map updates</li>
                    <li>Shelter & volunteer coordination</li>
                  </ul>
                </div>
              </div>

              <div className="cta-row">
                <button className="btn primary">
                  <Play /> View Architecture
                </button>
                <a className="btn ghost" href="#" onClick={(e) => e.preventDefault()}>
                  <ExternalLink /> Open Realtime Console
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="panel dashboard-panel" role="tabpanel">
            <div className="dash-left">
              <h3>AI-Powered Incident Dashboard</h3>
              <p className="desc">Visualize incidents, priorities & resources in near real-time.</p>

              <div className="feature-grid">
                <div className="feature card">
                  <h5>Total Incident Hotspots</h5>
                  <p>Cluster heatmap showing active incidents and severity across regions.</p>
                </div>
                <div className="feature card">
                  <h5>Live Incident Feed</h5>
                  <p>Real-time stream with classification, confidence score & suggested response.</p>
                </div>
                <div className="feature card">
                  <h5>Responder Map</h5>
                  <p>Shows nearest responders, shelter locations and routing guidance.</p>
                </div>
                <div className="feature card">
                  <h5>Resource Allocation</h5>
                  <p>Monitor available vehicles, volunteers, and shelter capacity.</p>
                </div>
              </div>

              <div className="cta-row">
                <button className="btn primary">
                  <BarChart3 /> Open Mock Dashboard
                </button>
                <a className="btn ghost" href="#" onClick={(e) => e.preventDefault()}>
                  <ExternalLink /> View Source
                </a>
              </div>
            </div>

            <aside className="dash-right card preview">
              <div className="preview-top">
                <div className="mini-map">
                  <svg viewBox="0 0 200 120" className="mini-svg" preserveAspectRatio="xMidYMid meet">
                    <rect width="100%" height="100%" rx="8" fill="#02151a" />
                    <circle cx="40" cy="30" r="5" fill="#ff6b6b" />
                    <circle cx="90" cy="60" r="7" fill="#ff9f43" />
                    <circle cx="150" cy="40" r="10" fill="#ff6b6b" />
                    <circle cx="130" cy="90" r="6" fill="#ffd166" />
                    <circle cx="60" cy="90" r="4" fill="#8be9a8" />
                  </svg>
                </div>

                <div className="small-stats">
                  <div className="sitem"><strong>Active</strong><span>312</span></div>
                  <div className="sitem"><strong>High</strong><span>48</span></div>
                  <div className="sitem"><strong>Avg</strong><span>2m 30s</span></div>
                </div>
              </div>

              <div className="preview-bottom">
                <div className="inc-list">
                  <div className="inc-row critical">
                    <div>
                      <span className="dot high" />
                      <div className="t">
                        <strong>Flood — Riverside</strong>
                        <small>12:34 · 1.2 km</small>
                      </div>
                    </div>
                    <div className="dispatch">Team A</div>
                  </div>

                  <div className="inc-row warning">
                    <div>
                      <span className="dot med" />
                      <div className="t">
                        <strong>Road Collapse — NH44</strong>
                        <small>12:08 · 8.6 km</small>
                      </div>
                    </div>
                    <div className="dispatch">Team B</div>
                  </div>
                </div>

                <div className="resources">
                  <div className="ritem"><span>Ambulances</span><div className="bar"><div style={{width:"60%"}}/></div><small>60%</small></div>
                  <div className="ritem"><span>Shelter</span><div className="bar"><div style={{width:"72%"}}/></div><small>72%</small></div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="dars-stats">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon"><s.Icon /></div>
            <div className="stat-text">
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
