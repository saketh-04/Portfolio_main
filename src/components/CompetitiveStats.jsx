import React, { useEffect, useRef } from "react";
import "./CompetitiveStats.css";

export default function CompetitiveStats() {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter) => {
      if (!counter) return;

      const target = +counter.dataset.target;
      let current = 0;
      const speed = target / 60;

      const update = () => {
        current += speed;
        if (current < target) {
          counter.innerText = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });
  }, []);

  return (
    <section className="comp-section" id="competitive">
      {/* TITLE */}
      <h2 className="comp-title">Competitive Programming Stats</h2>

      {/* CARDS GRID */}
      <div className="comp-grid">

        {/* GITHUB STATS */}
        <div className="comp-card tilt">
          <div className="glow"></div>
          <h3>GitHub Overview</h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=saketh-04&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000"
            alt="GitHub Stats"
          />
        </div>

        {/* TOP LANGUAGES */}
        <div className="comp-card tilt">
          <div className="glow"></div>
          <h3>Top Languages</h3>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=saketh-04&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000"
            alt="Top Languages"
          />
        </div>

        {/* LEETCODE */}
        <div className="comp-card tilt">
          <div className="glow"></div>
          <h3>LeetCode Profile</h3>
          <img
            src="https://leetcard.jacoblin.cool/killer_saketh123?theme=tokyonight&ext=heatmap"
            alt="LeetCode Stats"
          />
        </div>
      </div>

      {/* COUNTER ROW */}
      <div className="counter-row">
        <div className="counter-box">
          <span
            ref={(el) => (countersRef.current[0] = el)}
            data-target="300"
          >
            0
          </span>
          <p>Problems Solved</p>
        </div>

        <div className="counter-box">
          <span
            ref={(el) => (countersRef.current[1] = el)}
            data-target="25"
          >
            0
          </span>
          <p>GitHub Repositories</p>
        </div>

        <div className="counter-box">
          <span
            ref={(el) => (countersRef.current[2] = el)}
            data-target="6"
          >
            0
          </span>
          <p>Hackathons</p>
        </div>
      </div>
    </section>
  );
}
