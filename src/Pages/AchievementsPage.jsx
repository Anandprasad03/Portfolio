import { Reveal, Card3D, Counter, SectionTitle, GlassPanel } from "../Components/utils";

const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Hackathon @ GIET University",
    year: "2026",
    desc: "Participated and built a working prototype under a 24-hour time constraint, competing against 3rd and 4th year students.",
    colorClass: "color-cyan",
    badge: "Participant",
  },
  {
    icon: "🎓",
    title: "Workshop: Python & Data Science",
    year: "2026",
    desc: "Completed an intensive workshop covering applied ML concepts, data pipeline design, and model evaluation.",
    colorClass: "color-purple",
    badge: "Certified",
  },
  {
    icon: "⭐",
    title: "Academic Excellence",
    year: "2025–Present",
    desc: "Maintaining a 9.2 CGPA in B.Tech Computer Science & Engineering across all semesters.",
    colorClass: "color-rose",
    badge: "9.2 CGPA",
  },
  {
    icon: "🚀",
    title: "3 Production Deployments",
    year: "2025–2026",
    desc: "Deployed AgroGuard, AudioStream, and SocialPulse to production on Render and Vercel with real users.",
    colorClass: "color-soft-purple",
    badge: "Live Apps",
  },
];

const STATS = [
  { label: "CGPA", val: 9.2, suffix: "", dec: 1, colorClass: "color-rose" },
  { label: "Projects Built", val: 3, suffix: "+", colorClass: "color-purple" },
  { label: "Technologies", val: 20, suffix: "+", colorClass: "color-cyan" },
  { label: "Hackathons", val: 1, suffix: " attended", colorClass: "color-soft-purple" },
];

export default function AchievementsPage() {
  return (
    <div className="section-inner font-inter">
      <Reveal>
        <SectionTitle eyebrow="achievements" title="Achievements" />
      </Reveal>

      {/* Stats row */}
      <Reveal>
        <GlassPanel className="stats-panel">
          <div className="stats-grid">
            {STATS.map(({ label, val, suffix, dec, colorClass }) => (
              <div key={label}>
                <div className={`stat-number ${colorClass}`}>
                  <Counter target={val} suffix={suffix} decimals={dec} />
                </div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </Reveal>

      {/* Achievement cards */}
      <div className="achievements-grid">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.1} dir="scale">
            <Card3D>
              <div className={`achieve-card-inner ${a.colorClass}`}>
                <div className={`achieve-card-top-line ${a.colorClass}`} />
                <div className="achieve-header">
                  <div className="achieve-icon">{a.icon}</div>
                  <span className={`achieve-badge ${a.colorClass}`}>{a.badge}</span>
                </div>
                <div className={`achieve-year ${a.colorClass}`}>{a.year}</div>
                <h4 className="achieve-title">{a.title}</h4>
                <p className="achieve-desc">{a.desc}</p>
              </div>
            </Card3D>
          </Reveal>
        ))}
      </div>

      {/* Currently learning */}
      <Reveal delay={0.2}>
        <div className="learning-section">
          <GlassPanel className="learning-panel">
            <h3 className="learning-title">
              Currently Exploring 🔭
            </h3>
            <div className="learning-tags">
              {["System Design", "Docker & DevOps", "TypeScript", "Next.js", "PostgreSQL", "WebSockets"].map((t) => (
                <span key={t} className="learning-tag">{t}</span>
              ))}
            </div>
          </GlassPanel>
        </div>
      </Reveal>
    </div>
  );
}