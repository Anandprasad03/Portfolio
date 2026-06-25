import { Reveal, Card3D, Counter, SectionTitle, GlassPanel } from "../Components/utils";

const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Hackathon @ GIET University",
    year: "2026",
    desc: "Built a working prototype under a 24-hour time constraint, competing against 3rd and 4th year students.",
    color: "#fbbf24",
    badge: "1st Place",
  },
  {
    icon: "🎓",
    title: "Workshop: Python & Data Science",
    year: "2026",
    desc: "Completed an intensive workshop covering applied ML concepts, data pipeline design, and model evaluation.",
    color: "#22d3a8",
    badge: "Certified",
  },
  {
    icon: "⭐",
    title: "Academic Excellence",
    year: "2025–Present",
    desc: "Maintaining a 9.1 CGPA in B.Tech Computer Science & Engineering across all semesters.",
    color: "#f472b6",
    badge: "9.1 CGPA",
  },
  {
    icon: "🚀",
    title: "3 Production Deployments",
    year: "2025–2026",
    desc: "Deployed AgroGuard, AudioStream, and SocialPulse to production on Render and Vercel with real users.",
    color: "#818cf8",
    badge: "Live Apps",
  },
];

const STATS = [
  { label: "CGPA", val: 9.1, suffix: "", dec: 1, color: "#f472b6" },
  { label: "Projects Built", val: 3, suffix: "+", color: "#22d3a8" },
  { label: "Technologies", val: 20, suffix: "+", color: "#38bdf8" },
  { label: "Hackathons", val: 1, suffix: "", color: "#fbbf24" },
];

export default function AchievementsPage() {
  return (
    <div className="section-inner">
      <Reveal>
        <SectionTitle eyebrow="achievements" title="Achievements" />
      </Reveal>

      {/* Stats row */}
      <Reveal>
        <GlassPanel style={{ padding: "28px 36px", marginBottom: 48 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 24, textAlign: "center" }}>
            {STATS.map(({ label, val, suffix, dec, color }) => (
              <div key={label}>
                <div style={{ fontSize: 36, fontWeight: 900, color, fontFamily: "monospace", lineHeight: 1.1 }}>
                  <Counter target={val} suffix={suffix} decimals={dec} />
                </div>
                <div style={{ fontSize: 11, letterSpacing: ".14em", color: "#38bdf8", fontFamily: "monospace", marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </Reveal>

      {/* Achievement cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.1} dir="scale">
            <Card3D>
              <div className="achieve-card" style={{ borderColor: `${a.color}20` }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${a.color},transparent)`, borderRadius: "16px 16px 0 0" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ fontSize: 36 }}>{a.icon}</div>
                  <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: ".1em", color: a.color, background: `${a.color}10`, border: `1px solid ${a.color}28`, padding: "3px 10px", borderRadius: 5, fontWeight: 700 }}>{a.badge}</span>
                </div>
                <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: ".14em", color: a.color, marginBottom: 8, fontWeight: 700 }}>{a.year}</div>
                <h4 style={{ margin: "0 0 10px", color: "#f1f5f9", fontSize: 16, fontWeight: 700, lineHeight: 1.4 }}>{a.title}</h4>
                <p style={{ margin: 0, fontSize: 13, color: "#475569", lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            </Card3D>
          </Reveal>
        ))}
      </div>

      {/* Currently learning */}
      <Reveal delay={0.2}>
        <div style={{ marginTop: 48 }}>
          <GlassPanel style={{ padding: "32px 36px" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 20, letterSpacing: "-.02em" }}>
              Currently Exploring 🔭
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["System Design", "Docker & DevOps", "TypeScript", "Next.js", "LangChain", "PostgreSQL", "Microservices", "WebSockets"].map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </GlassPanel>
        </div>
      </Reveal>
    </div>
  );
}