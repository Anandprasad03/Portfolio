import { Reveal, Card3D, SectionTitle, GlassPanel } from "../Components/utils";

const SKILLS = {
  Languages:           { items: ["C", "Python", "JavaScript"],                                              from: "#38bdf8", to: "#818cf8", icon: "🔤" },
  Frontend:            { items: ["HTML", "CSS", "React.js"],                                                from: "#f472b6", to: "#fb7185", icon: "🎨" },
  Backend:             { items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],                          from: "#22d3a8", to: "#34d399", icon: "⚙️" },
  Database:            { items: ["MongoDB"],                                                                 from: "#fb923c", to: "#fbbf24", icon: "🗄️" },
  "Tools & Platforms": { items: ["Git", "GitHub", "Postman", "Vercel", "Render", "ImageKit", "JWT"],       from: "#a78bfa", to: "#818cf8", icon: "🛠️" },
  "AI / APIs":         { items: ["Gemini API", "Groq API", "LLM Integration"],                             from: "#38bdf8", to: "#22d3a8", icon: "🤖" },
};

const BARS = [
  { label: "React / MERN Stack", pct: 85, color: "#38bdf8" },
  { label: "Python / FastAPI",   pct: 80, color: "#22d3a8" },
  { label: "GenAI Integration",  pct: 78, color: "#818cf8" },
  { label: "JavaScript",         pct: 88, color: "#f472b6" },
  { label: "REST API Design",    pct: 82, color: "#fb923c" },
];

function Bar({ label, pct, color, delay = 0 }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7, fontSize: 13, color: "#94a3b8", fontFamily: "monospace" }}>
        <span>{label}</span>
        <span style={{ color, fontWeight: 700 }}>{pct}%</span>
      </div>
      <div style={{ height: 6, borderRadius: 3, background: "#1e293b44", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 3,
          background: `linear-gradient(90deg,${color},${color}80)`,
          width: `${pct}%`,
          boxShadow: `0 0 10px ${color}55`,
          animation: `slideIn .9s ${delay}s cubic-bezier(.22,1,.36,1) both`,
          transformOrigin: "left",
        }} />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="section-inner">
      <Reveal>
        <SectionTitle eyebrow="tech-stack" title="Skills" />
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18, marginBottom: 52 }}>
        {Object.entries(SKILLS).map(([cat, { items, from, to, icon }], i) => (
          <Reveal key={cat} delay={i * 0.07} dir="up">
            <Card3D>
              <div className="skill-card">
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${from},${to})`, borderRadius: "16px 16px 0 0" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <div style={{
                    fontFamily: "monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 800,
                    background: `linear-gradient(90deg,${from},${to})`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>{cat}</div>
                </div>
                <div>{items.map((s) => <span key={s} className="pill">{s}</span>)}</div>
              </div>
            </Card3D>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <GlassPanel style={{ padding: "32px 36px" }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 28, letterSpacing: "-.02em" }}>Proficiency</h3>
          {BARS.map((b, i) => <Bar key={b.label} {...b} delay={i * 0.08} />)}
        </GlassPanel>
      </Reveal>
    </div>
  );
}