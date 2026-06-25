import { Reveal, Card3D, SectionTitle, GlassPanel } from "../Components/utils";

const PROJECTS = [
  {
    title: "AgroGuard",
    subtitle: "GenAI-Powered Agricultural Advisory System",
    stack: ["HTML/CSS", "JavaScript", "Python", "FastAPI", "Gemini API", "Groq"],
    bullets: [
      "Conversational AI assistant that processes real-time soil and environmental data using the Gemini API to recommend optimal crops and customized cultivation strategies.",
      "Integrated FastAPI backend with Groq LLM to deliver expert agronomic troubleshooting, enabling 24/7 automated consultations.",
      "Deployed end-to-end on Render with a responsive frontend for non-technical farming communities.",
    ],
    github: "https://github.com/anandprasad03",
    demo: "#",
    accent: "#22d3a8",
    icon: "🌾",
    category: "GenAI + Backend",
  },
  {
    title: "AudioStream",
    subtitle: "Role-Based Audio Content Platform",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "ImageKit", "JWT"],
    bullets: [
      "Full-stack music streaming application with JWT-based role authentication — verified artists publish albums while listeners get a secure, read-only streaming interface.",
      "Implemented ImageKit for optimized media storage and delivery, deployed on Render with a persistent MongoDB backend.",
    ],
    github: "https://github.com/anandprasad03",
    demo: "#",
    accent: "#818cf8",
    icon: "🎵",
    category: "Full-Stack · MERN",
  },
  {
    title: "SocialPulse",
    subtitle: "Real-Time Social Media Application",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "ImageKit", "JWT"],
    bullets: [
      "Real-time social networking platform featuring dynamic post creation, live-updating feed, and authenticated user sessions via JWT and Express.js middleware.",
      "RESTful API backend that dynamically fetches and serves user-generated content, enabling seamless cross-client data synchronization.",
    ],
    github: "https://github.com/anandprasad03",
    demo: "#",
    accent: "#f472b6",
    icon: "🌐",
    category: "Full-Stack · MERN",
  },
];

export default function ProjectsPage() {
  return (
    <div className="section-inner">
      <Reveal>
        <SectionTitle eyebrow="my-work" title="Projects" />
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} dir={i % 2 === 0 ? "left" : "right"}>
            <Card3D>
              <div className="proj-card" style={{ "--accent": p.accent }}>
                {/* Top accent bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${p.accent},transparent)`, borderRadius: "20px 20px 0 0" }} />

                {/* Subtle inner glow */}
                <div style={{ position: "absolute", top: -80, right: -80, width: 220, height: 220, borderRadius: "50%", background: `radial-gradient(${p.accent}0d,transparent 70%)`, pointerEvents: "none" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 14, marginBottom: 20 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${p.accent}14`, border: `1px solid ${p.accent}28`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{p.icon}</div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 2 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 800, color: p.accent, letterSpacing: "-.01em", margin: 0 }}>{p.title}</h3>
                        <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: ".1em", color: p.accent, background: `${p.accent}10`, border: `1px solid ${p.accent}25`, padding: "2px 8px", borderRadius: 4, fontWeight: 700 }}>{p.category}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: 13, color: "#475569" }}>{p.subtitle}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <a href={p.github} target="_blank" rel="noreferrer" className="link-btn"
                      style={{ color: "#64748b", border: "1px solid #1e293b", background: "none", fontSize: 12, padding: "7px 14px" }}>↗ Code</a>
                    <a href={p.demo} className="link-btn"
                      style={{ color: p.accent, border: `1px solid ${p.accent}40`, background: `${p.accent}0e`, fontSize: 12, padding: "7px 14px" }}>▶ Demo</a>
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  {p.bullets.map((b, j) => (
                    <p key={j} style={{ margin: "0 0 10px", fontSize: 14, color: "#94a3b8", paddingLeft: 18, position: "relative", lineHeight: 1.7 }}>
                      <span style={{ position: "absolute", left: 0, color: p.accent, fontWeight: 700 }}>▸</span>{b}
                    </p>
                  ))}
                </div>

                <div>
                  {p.stack.map((s) => (
                    <span key={s} style={{
                      display: "inline-block", margin: "2px", padding: "3px 10px",
                      borderRadius: 6, fontSize: 11, fontFamily: "monospace", fontWeight: 700,
                      color: p.accent, background: `${p.accent}0e`, border: `1px solid ${p.accent}22`,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </Card3D>
          </Reveal>
        ))}
      </div>

      {/* Bottom CTA */}
      <Reveal delay={0.3}>
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <GlassPanel style={{ display: "inline-block", padding: "24px 40px" }}>
            <p style={{ color: "#475569", fontSize: 14, marginBottom: 16 }}>More projects on GitHub</p>
            <a href="https://github.com/anandprasad03" target="_blank" rel="noreferrer" className="link-btn"
              style={{ background: "linear-gradient(135deg,#38bdf8,#818cf8)", color: "#fff", border: "none" }}>
              ↗ View All on GitHub
            </a>
          </GlassPanel>
        </div>
      </Reveal>
    </div>
  );
}