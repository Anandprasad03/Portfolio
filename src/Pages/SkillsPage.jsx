import { Reveal, Card3D, SectionTitle, GlassPanel } from "../Components/utils";

const SKILLS = {
  Languages:           { items: ["C", "Python", "JavaScript"],                                              catClass: "languages", icon: "🔤" },
  Frontend:            { items: ["HTML", "CSS", "React.js"],                                                catClass: "frontend", icon: "🎨" },
  Backend:             { items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],                          catClass: "backend", icon: "⚙️" },
  Database:            { items: ["MongoDB"],                                                                 catClass: "database", icon: "🗄️" },
  "Tools & Platforms": { items: ["Git", "GitHub", "Postman", "Vercel", "Render", "ImageKit", "JWT"],       catClass: "tools", icon: "🛠️" },
  "AI / APIs":         { items: ["Gemini API", "Groq API", "LLM Integration"],                             catClass: "ai", icon: "🤖" },
};

const BARS = [
  { label: "React / MERN Stack", pct: 85, colorClass: "color-purple", widthClass: "w-85", delayClass: "delay-0" },
  { label: "Python / FastAPI",   pct: 80, colorClass: "color-cyan", widthClass: "w-80", delayClass: "delay-08" },
  { label: "GenAI Integration",  pct: 78, colorClass: "color-rose", widthClass: "w-78", delayClass: "delay-16" },
  { label: "JavaScript",         pct: 88, colorClass: "color-soft-purple", widthClass: "w-88", delayClass: "delay-24" },
  { label: "REST API Design",    pct: 82, colorClass: "color-light-blue", widthClass: "w-82", delayClass: "delay-32" },
];

function Bar({ label, pct, colorClass, widthClass, delayClass }) {
  return (
    <div className="bar-wrapper">
      <div className="bar-header">
        <span>{label}</span>
        <span className={`bar-pct ${colorClass}`}>{pct}%</span>
      </div>
      <div className="bar-track">
        <div className={`bar-fill ${colorClass} ${widthClass} ${delayClass}`} />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="section-inner font-inter">
      <Reveal>
        <SectionTitle eyebrow="tech-stack" title="Skills" />
      </Reveal>

      <div className="skills-grid">
        {Object.entries(SKILLS).map(([cat, { items, catClass, icon }], i) => (
          <Reveal key={cat} delay={i * 0.07} dir="up">
            <Card3D>
              <div className="skill-card-inner">
                <div className={`skill-card-top-line skill-line-${catClass}`} />
                <div className="skill-header">
                  <span className="skill-icon">{icon}</span>
                  <div className={`skill-title skill-title-${catClass}`}>{cat}</div>
                </div>
                <div>{items.map((s) => <span key={s} className={`skill-pill skill-pill-${catClass}`}>{s}</span>)}</div>
              </div>
            </Card3D>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <GlassPanel className="proficiency-panel">
          <h3 className="proficiency-title">Proficiency</h3>
          {BARS.map((b) => <Bar key={b.label} {...b} />)}
        </GlassPanel>
      </Reveal>
    </div>
  );
}