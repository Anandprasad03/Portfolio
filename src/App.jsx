import { useState, useEffect } from "react";
import Hyperspeed from "./Components/Hyperspeed";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import AchievementsPage from "./Pages/AchievementsPage";
import ContactPage from "./Pages/ContactPage";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const navigate = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  const pages = {
    Home: <HomePage navigate={navigate} />,
    About: <AboutPage />,
    Skills: <SkillsPage />,
    Projects: <ProjectsPage />,
    Achievements: <AchievementsPage />,
    Contact: <ContactPage />,
  };

  return (
    <div style={{ minHeight: "100vh", background: "#060b18", fontFamily: "'Inter', system-ui, sans-serif", color: "#cbd5e1", position: "relative", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
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
        .nav-btn {
          background: none; border: none; cursor: pointer;
          font-size: 13px; font-family: monospace; letter-spacing: .08em;
          padding: 7px 16px; border-radius: 8px;
          transition: all .22s; white-space: nowrap;
        }
        .nav-btn:hover { color: #38bdf8 !important; background: #38bdf810 !important; }
        .link-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 22px; border-radius: 10px;
          font-size: 13px; font-family: monospace; font-weight: 700;
          cursor: pointer; transition: all .22s; text-decoration: none;
        }
        .link-btn:hover { transform: translateY(-2px) scale(1.02); }
        .card-3d { transition: transform .12s ease; }
        .pill {
          display: inline-block; padding: 5px 14px; border-radius: 999px;
          font-size: 12px; font-family: monospace; font-weight: 600;
          margin: 3px; background: #111827; border: 1px solid #1e293b; color: #94a3b8;
          transition: all .2s; cursor: default;
        }
        .pill:hover { color: #38bdf8; border-color: #38bdf844; transform: translateY(-2px); }
        .page-content { animation: pageIn .5s cubic-bezier(.22,1,.36,1) both; }
        .section-inner { max-width: 960px; margin: 0 auto; padding: 80px 28px; }
        .section-title-eyebrow { font-family: monospace; font-size: 10px; letter-spacing: .22em; color: #38bdf8; text-transform: uppercase; font-weight: 800; margin-bottom: 10px; }
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
        .mobile-menu-overlay {
          position: fixed; inset: 0; background: #060b18f8;
          z-index: 199; display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 16px; animation: fadeUp .25s ease;
        }
        .mobile-nav-btn {
          background: none; border: none; cursor: pointer;
          font-size: 20px; font-family: monospace; letter-spacing: .1em;
          padding: 12px 32px; border-radius: 10px; color: #64748b;
          transition: all .2s; width: 220px; text-align: center;
        }
        .mobile-nav-btn:hover, .mobile-nav-btn.active { color: #38bdf8; background: #38bdf810; }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 641px) {
          .hamburger { display: none !important; }
        }
      `}</style>

      {/* Fixed animated background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <Hyperspeed />
      </div>

      {/* Overlay to darken background slightly for readability */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, background: "rgba(6,11,24,0.55)", pointerEvents: "none" }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        background: scrolled ? "#060b18e8" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1e293b66" : "1px solid transparent",
        height: 64, padding: "0 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all .4s",
      }}>
        <button onClick={() => navigate("Home")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontWeight: 900, fontSize: 20, letterSpacing: ".06em" }}>
          <span className="glow-text">AP</span>
        </button>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: 2 }}>
          {NAV_LINKS.map((n) => (
            <button key={n} className="nav-btn" onClick={() => navigate(n)}
              style={{ color: activePage === n ? "#38bdf8" : "#475569", background: activePage === n ? "#38bdf810" : "none" }}>
              {n}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 8 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: "block", width: 22, height: 2, background: "#64748b", borderRadius: 2,
              transition: "all .3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)") : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          {NAV_LINKS.map((n) => (
            <button key={n} className={`mobile-nav-btn ${activePage === n ? "active" : ""}`}
              onClick={(e) => { e.stopPropagation(); navigate(n); }}>
              {n}
            </button>
          ))}
        </div>
      )}

      {/* Page content */}
      <main style={{ position: "relative", zIndex: 2, paddingTop: 64 }}>
        <div key={activePage} className="page-content">
          {pages[activePage]}
        </div>
      </main>
    </div>
  );
}