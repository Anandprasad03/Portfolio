import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

export default function Navbar({ activePage, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .nav-btn {
          background: none; border: none; cursor: pointer;
          font-size: 13px; font-family: monospace; letter-spacing: .08em;
          padding: 7px 16px; border-radius: 8px;
          transition: all .22s; white-space: nowrap;
        }
        .nav-btn:hover { color: #38bdf8 !important; background: #38bdf810 !important; }
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

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        background: scrolled ? "rgba(15, 23, 42, 0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        height: 72, padding: "0 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all .4s ease",
      }}>
        {/* Logo */}
        <button onClick={() => handleNavigate("Home")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontWeight: 900, fontSize: 20, letterSpacing: ".06em" }}>
          <span className="glow-text">AP</span>
        </button>

        {/* Desktop nav - Glass Pill Design */}
        <div className="desktop-nav" style={{
          display: "flex",
          gap: 8,
          background: "rgba(30, 41, 59, 0.5)",
          padding: "6px 8px",
          borderRadius: 999,
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          {NAV_LINKS.map((n) => (
            <button
              key={n}
              onClick={() => handleNavigate(n)}
              style={{
                background: activePage === n ? "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))" : "transparent",
                color: activePage === n ? "#06b6d4" : "#94a3b8",
                border: activePage === n ? "1px solid rgba(6, 182, 212, 0.3)" : "1px solid transparent",
                borderRadius: 999,
                padding: "8px 18px",
                fontSize: 13,
                fontFamily: "'Inter', sans-serif",
                fontWeight: activePage === n ? 600 : 500,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => { if (activePage !== n) e.target.style.color = "#f1f5f9"; }}
              onMouseLeave={(e) => { if (activePage !== n) e.target.style.color = "#94a3b8"; }}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 8 }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: 22, height: 2, background: "#64748b", borderRadius: 2,
              transition: "all .3s",
              transform: menuOpen
                ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scaleX(0)")
                : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          {NAV_LINKS.map((n) => (
            <button
              key={n}
              className={`mobile-nav-btn ${activePage === n ? "active" : ""}`}
              onClick={(e) => { e.stopPropagation(); handleNavigate(n); }}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </>
  );
}