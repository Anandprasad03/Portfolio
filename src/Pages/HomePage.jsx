import { useTypewriter, Counter, Reveal } from "../Components/utils";
import profilePic from "../assets/Profile-Pic.jpg";

export default function HomePage({ navigate }) {
  const typed = useTypewriter([
    "Full-Stack Developer",
    "GenAI Integrator",
    "MERN Stack Engineer",
    "CS Student @ GIET",
  ]);

  return (
    <div className="home-container">
      <div className="home-content">

        {/* Orbital hero graphic */}
        <div className="hero-graphic">
          <div className="hero-ring hero-ring-1" />
          <div className="hero-ring hero-ring-2" />
          <div className="hero-ring hero-ring-3" />
          <div className="hero-center">
            <img src={profilePic} alt="Anand Prasad" className="hero-photo" />
          </div>
          <div className="hero-orbit-dot hero-orbit-dot-1" />
          <div className="hero-orbit-dot hero-orbit-dot-2" />
          <div className="hero-orbit-dot hero-orbit-dot-3" />
        </div>

        {/* Badge */}
        <div className="home-badge">
          ✦ OPEN TO INTERNSHIP OPPORTUNITIES ✦
        </div>

        {/* Name */}
        <h1 className="home-title">
          <span className="glow-text">Anand Prasad</span>
        </h1>

        {/* Typewriter */}
        <div className="home-typewriter">
          <span className="home-typewriter-prefix">{">"} </span>{typed}
          <span className="home-typewriter-cursor">█</span>
        </div>

        {/* Description */}
        <p className="home-desc">
          1st-year CS student at{" "}
          <span className="home-desc-highlight">GIET University</span>{" "}
          — building full-stack apps and weaving GenAI into production-ready products.
        </p>

        {/* Stats — no CGPA */}
        <div className="home-stats-container">
          {[
            { label: "Projects", val: 3, suffix: "+" },
            { label: "Technologies", val: 20, suffix: "+" },
            { label: "Production Deployments", val: 3, suffix: "" },
          ].map(({ label, val, suffix, dec }) => (
            <div key={label} className="home-stat-item">
              <div className="home-stat-val">
                <Counter target={val} suffix={suffix} decimals={dec} />
              </div>
              <div className="home-stat-label">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="home-ctas">
          <button className="btn-primary" onClick={() => navigate("Projects")}>
            ⚡ View Projects
          </button>
          <button className="btn-secondary" onClick={() => navigate("Contact")}>
            ✉ Get in Touch
          </button>
          <a href="https://github.com/anandprasad03" target="_blank" rel="noreferrer" className="btn-outline">
            ↗ GitHub
          </a>
        </div>

        {/* Meta */}
        <div className="home-meta">
          <span>📍 Jamshedpur, IN</span>
          <span>🎓 B.Tech CSE · 2025–2029</span>
        </div>
      </div>
    </div>
  );
}