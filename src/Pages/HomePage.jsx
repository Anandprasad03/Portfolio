import { useTypewriter, Counter, Reveal } from "../Components/utils";

export default function HomePage({ navigate }) {
  const typed = useTypewriter([
    "Full-Stack Developer",
    "GenAI Integrator",
    "MERN Stack Engineer",
    "CS Student @ GIET",
  ]);

  return (
    <div style={{ minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
      <div style={{ textAlign: "center", maxWidth: 720, width: "100%", animation: "fadeUp .9s ease both" }}>

        {/* Orbital hero graphic */}
        <div style={{ position: "relative", width: 220, height: 220, margin: "0 auto 36px" }}>
          {/* Rings */}
          {[200, 160, 130].map((s, i) => (
            <div key={i} style={{
              position: "absolute", top: "50%", left: "50%",
              width: s, height: s, marginLeft: -s/2, marginTop: -s/2,
              borderRadius: "50%",
              border: `1px solid ${["#38bdf818","#818cf818","#22d3a818"][i]}`,
            }} />
          ))}
          {/* Center */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 88, height: 88, borderRadius: "50%",
            background: "linear-gradient(135deg,#38bdf8,#818cf8)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, fontWeight: 900, color: "#fff", fontFamily: "monospace",
            boxShadow: "0 0 40px #38bdf840, 0 0 80px #818cf820",
            letterSpacing: ".04em",
          }}>AP</div>
          {/* Orbiting dots */}
          {[
            { color:"#38bdf8", r:"100px", dur:"10s", delay:"0s" },
            { color:"#818cf8", r:"80px",  dur:"7s",  delay:"-2s" },
            { color:"#22d3a8", r:"65px",  dur:"5s",  delay:"-1s" },
          ].map((d, i) => (
            <div key={i} style={{
              position: "absolute", top: "50%", left: "50%",
              width: 10, height: 10, marginLeft: -5, marginTop: -5,
              borderRadius: "50%", background: d.color,
              boxShadow: `0 0 12px ${d.color}`,
              animation: `orbit ${d.dur} linear ${d.delay} infinite`,
              "--r": d.r,
            }} />
          ))}
        </div>

        {/* Badge */}
        <div style={{
          display: "inline-block", fontFamily: "monospace", fontSize: 11,
          letterSpacing: ".18em", color: "#22d3a8",
          background: "#22d3a80e", border: "1px solid #22d3a828",
          borderRadius: 6, padding: "5px 18px", marginBottom: 22,
          animation: "float 4s ease-in-out infinite",
        }}>
          ✦ OPEN TO INTERNSHIP OPPORTUNITIES ✦
        </div>

        {/* Name */}
        <h1 style={{ fontSize: "clamp(44px,9vw,80px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 10px" }}>
          <span className="glow-text">Anand Prasad</span>
        </h1>

        {/* Typewriter */}
        <div style={{ fontFamily: "monospace", fontSize: "clamp(15px,2.5vw,20px)", color: "#38bdf8", marginBottom: 28, minHeight: 30, letterSpacing: ".04em" }}>
          <span style={{ color: "#334155" }}>{">"} </span>{typed}
          <span style={{ animation: "blink 1s step-end infinite", color: "#38bdf8" }}>█</span>
        </div>

        {/* Description */}
        <p style={{ fontSize: 16, color: "#64748b", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.9 }}>
          1st-year CS student at{" "}
          <span style={{ color: "#f1f5f9", fontWeight: 700 }}>GIET University</span>{" "}
          — building full-stack apps and weaving GenAI into production-ready products.{" "}
          <span style={{ color: "#22d3a8", fontWeight: 700 }}>9.1 CGPA</span>.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginBottom: 36, flexWrap: "wrap" }}>
          {[
            { label: "CGPA", val: 9.1, suffix: "", dec: 1 },
            { label: "Projects", val: 3, suffix: "+" },
            { label: "Technologies", val: 20, suffix: "+" },
          ].map(({ label, val, suffix, dec }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 30, fontWeight: 900, color: "#f1f5f9", fontFamily: "monospace" }}>
                <Counter target={val} suffix={suffix} decimals={dec} />
              </div>
              <div style={{ fontSize: 10, letterSpacing: ".18em", color: "#38bdf8", fontFamily: "monospace" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
          <button className="link-btn" onClick={() => navigate("Projects")}
            style={{ background: "linear-gradient(135deg,#38bdf8,#818cf8)", color: "#fff", border: "none", boxShadow: "0 0 28px #38bdf835" }}>
            ⚡ View Projects
          </button>
          <button className="link-btn" onClick={() => navigate("Contact")}
            style={{ color: "#94a3b8", border: "1px solid #1e293b", background: "rgba(13,21,38,0.5)" }}>
            ✉ Get in Touch
          </button>
          <a href="https://github.com/anandprasad03" target="_blank" rel="noreferrer" className="link-btn"
            style={{ color: "#64748b", border: "1px solid #1e293b44", background: "none" }}>
            ↗ GitHub
          </a>
        </div>

        {/* Meta */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, color: "#334155", fontSize: 12, fontFamily: "monospace", flexWrap: "wrap" }}>
          <span>📍 Jamshedpur, IN</span>
          <span>🎓 B.Tech CSE · 2025–2029</span>
        </div>
      </div>
    </div>
  );
}