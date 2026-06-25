import { Reveal, GlassPanel, SectionTitle } from "../Components/utils";

const TIMELINE = [
  { year: "2025", label: "Started B.Tech CSE", desc: "Enrolled at GIET University, Gunupur. Immediately began building projects.", color: "#38bdf8" },
  { year: "2025", label: "First Full-Stack Project", desc: "Built AudioStream — a role-based music streaming platform with JWT auth.", color: "#818cf8" },
  { year: "2026", label: "GenAI Integration", desc: "Built AgroGuard using Gemini API & Groq — real-time agricultural advisor.", color: "#22d3a8" },
  { year: "2026", label: "Hackathon Winner", desc: "Delivered a working prototype under 24-hour constraint at GIET Hackathon.", color: "#f472b6" },
];

export default function AboutPage() {
  return (
    <div className="section-inner">
      <Reveal>
        <SectionTitle eyebrow="about-me" title="About Me" />
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 60 }}>
        {/* Left — bio */}
        <Reveal dir="left">
          <GlassPanel style={{ padding: "32px 36px", height: "100%" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg,#38bdf8,#818cf8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 900, color: "#fff", fontFamily: "monospace", marginBottom: 20, boxShadow: "0 0 30px #38bdf835" }}>AP</div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", marginBottom: 12 }}>Anand Prasad</h3>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.9, marginBottom: 16 }}>
              I'm a first-year Computer Science student at <span style={{ color: "#f1f5f9", fontWeight: 600 }}>GIET University</span> with
              a passion for building things that matter. I specialize in full-stack web development and love integrating
              AI into everyday products.
            </p>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.9 }}>
              When I'm not coding, I'm exploring the latest in large language models, contributing to open-source projects,
              or reading about distributed systems. I believe in learning by building.
            </p>
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: "📍", label: "Location", val: "Jamshedpur, Jharkhand, IN" },
                { icon: "🎓", label: "Degree", val: "B.Tech CSE · 2025–2029" },
                { icon: "⭐", label: "CGPA", val: "9.1 / 10.0" },
                { icon: "📧", label: "Email", val: "anandprasadmsb77@gmail.com" },
              ].map(({ icon, label, val }) => (
                <div key={label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: ".1em", color: "#38bdf8", fontWeight: 700, width: 68 }}>{label}</span>
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>{val}</span>
                </div>
              ))}
            </div>
          </GlassPanel>
        </Reveal>

        {/* Right — focus areas */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { icon: "🌐", title: "Full-Stack Development", desc: "MERN stack — React frontends with Node/Express APIs and MongoDB persistence.", color: "#38bdf8" },
            { icon: "🤖", title: "GenAI Integration", desc: "Connecting Gemini, Groq, and other LLM APIs to build intelligent, production-ready systems.", color: "#22d3a8" },
            { icon: "⚡", title: "Backend Engineering", desc: "FastAPI, REST APIs, JWT auth, cloud deployment on Render and Vercel.", color: "#818cf8" },
            { icon: "📚", title: "Continuous Learning", desc: "Always exploring new technologies — currently deep-diving into distributed systems and ML.", color: "#f472b6" },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} dir="right">
              <GlassPanel style={{ padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}15`, border: `1px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ color: "#475569", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <Reveal>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9", marginBottom: 32, letterSpacing: "-.02em" }}>Journey</h3>
      </Reveal>
      <div style={{ position: "relative", paddingLeft: 28 }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #38bdf8, #818cf8, #22d3a8, #f472b6)" }} />
        {TIMELINE.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div style={{ position: "relative", marginBottom: 32, paddingLeft: 20 }}>
              <div style={{ position: "absolute", left: -35, top: 4, width: 14, height: 14, borderRadius: "50%", background: t.color, boxShadow: `0 0 12px ${t.color}` }} />
              <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: ".15em", color: t.color, marginBottom: 6, fontWeight: 700 }}>{t.year}</div>
              <GlassPanel style={{ padding: "18px 22px" }}>
                <div style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{t.label}</div>
                <div style={{ color: "#475569", fontSize: 13, lineHeight: 1.7 }}>{t.desc}</div>
              </GlassPanel>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}