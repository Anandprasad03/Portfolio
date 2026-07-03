import { useState, useEffect, useRef } from "react";
import Hyperspeed from "./Components/Hyperspeed";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import AchievementsPage from "./Pages/AchievementsPage";
import ContactPage from "./Pages/ContactPage";

// Order of sections on the page + the ids used to scroll to them.
const SECTIONS = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];
const sectionId = (page) => page.toLowerCase();

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const isClickScrolling = useRef(false);

  // Smooth-scroll to a section. Passed down to Navbar and to HomePage's CTAs.
  const navigate = (page) => {
    const el = document.getElementById(sectionId(page));
    if (!el) return;
    isClickScrolling.current = true;
    setActivePage(page);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Release the lock once the smooth scroll has settled.
    window.clearTimeout(navigate._t);
    navigate._t = window.setTimeout(() => { isClickScrolling.current = false; }, 900);
  };

  // Scroll-spy: highlight the nav item for whichever section is in view.
  useEffect(() => {
    const sections = SECTIONS.map((s) => document.getElementById(sectionId(s))).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = SECTIONS.find((s) => sectionId(s) === entry.target.id);
            if (match) setActivePage(match);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#060b18", fontFamily: "var(--font-body)", color: "#cbd5e1", position: "relative", overflowX: "hidden" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --sky: #38bdf8; --violet: #818cf8; --teal: #22d3a8; --pink: #f472b6; --amber: #fbbf24; }

        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideIn { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes orbit { from{transform:rotate(0deg) translateX(var(--r,90px)) rotate(0deg)} to{transform:rotate(360deg) translateX(var(--r,90px)) rotate(-360deg)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.8;transform:scale(1.05)} }
        @keyframes borderPulse { 0%,100%{box-shadow:0 0 0 0 transparent} 50%{box-shadow:0 0 30px 4px #38bdf815} }
        @keyframes pageIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanline { from{top:-100%} to{top:200%} }

        .glow-text {
          background: linear-gradient(135deg, #38bdf8 0%, #818cf8 40%, #22d3a8 70%, #38bdf8 100%);
          background-size: 300% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .link-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 22px; border-radius: 10px;
          font-size: 13px; font-family: var(--font-mono); font-weight: 700;
          cursor: pointer; transition: all .22s; text-decoration: none;
        }
        .link-btn:hover { transform: translateY(-2px) scale(1.02); }
        .card-3d { transition: transform .12s ease; }
        .pill {
          display: inline-block; padding: 5px 14px; border-radius: 999px;
          font-size: 12px; font-family: var(--font-mono); font-weight: 600;
          margin: 3px; background: #111827; border: 1px solid #1e293b; color: #94a3b8;
          transition: all .2s; cursor: default;
        }
        .pill:hover { color: #38bdf8; border-color: #38bdf844; transform: translateY(-2px); }
        .page-section { animation: pageIn .6s cubic-bezier(.22,1,.36,1) both; scroll-margin-top: 88px; }
        .section-inner { max-width: 960px; margin: 0 auto; padding: 80px 28px; }
        .section-title-eyebrow { font-family: var(--font-mono); font-size: 10px; letter-spacing: .22em; color: #38bdf8; text-transform: uppercase; font-weight: 800; margin-bottom: 10px; }
        .section-title-main { font-size: clamp(28px,4vw,40px); font-weight: 800; color: #f1f5f9; letter-spacing: -.03em; margin-bottom: 14px; }
        .section-title-bar { height: 3px; border-radius: 2px; background: linear-gradient(90deg,#38bdf8,#818cf8,#22d3a8); margin-bottom: 52px; }
        .skill-card {
          background: linear-gradient(145deg,#0d1526,#111827);
          border: 1px solid #1e293b55; border-radius: 16px; padding: 22px 24px;
          transition: all .3s; position: relative; overflow: hidden;
        }
        .skill-card:hover { border-color: #38bdf844; box-shadow: 0 0 32px #38bdf810; transform: translateY(-4px); }
        .skill-card::after { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(90deg,transparent,#38bdf808,transparent); transition:left .5s; }
        .skill-card:hover::after { left:150%; }
        .proj-card {
          background: linear-gradient(135deg,#0d1526ee,#111827ee);
          border: 1px solid #1e293b; border-radius: 20px; padding: 30px;
          position: relative; overflow: hidden;
          transition: border-color .35s, box-shadow .35s, transform .2s;
        }
        .proj-card:hover { transform: translateY(-4px); }
        .achieve-card {
          background: linear-gradient(145deg,#0d1526,#111827);
          border: 1px solid #1e293b; border-radius: 16px; padding: 28px;
          transition: all .3s; position: relative; overflow: hidden;
        }
        .achieve-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px #00000050; }
      `}</style>

      {/* Fixed animated background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <Hyperspeed />
      </div>

      {/* Overlay to darken background slightly for readability */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, background: "rgba(6,11,24,0.55)", pointerEvents: "none" }} />

      {/* Navbar */}
      <Navbar activePage={activePage} navigate={navigate} />

      {/* All pages stacked one below another — the navbar scrolls between them */}
      <main style={{ position: "relative", zIndex: 2, paddingTop: 64 }}>
        <section id="home" className="page-section">
          <HomePage navigate={navigate} />
        </section>
        <section id="about" className="page-section">
          <AboutPage />
        </section>
        <section id="skills" className="page-section">
          <SkillsPage />
        </section>
        <section id="projects" className="page-section">
          <ProjectsPage />
        </section>
        <section id="achievements" className="page-section">
          <AchievementsPage />
        </section>
        <section id="contact" className="page-section">
          <ContactPage />
        </section>
      </main>
    </div>
  );
}