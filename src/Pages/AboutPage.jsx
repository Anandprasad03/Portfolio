import { Reveal, GlassPanel, SectionTitle } from "../Components/utils";
import profilePic from "../assets/Profile-Pic.jpg";

const TIMELINE = [
  { year: "2025", label: "Started B.Tech CSE", desc: "Enrolled at GIET University, Gunupur. Immediately began building projects.", colorClass: "color-cyan" },
  { year: "2025", label: "First Full-Stack Project", desc: "Built AudioStream — a role-based music streaming platform with JWT auth.", colorClass: "color-purple" },
  { year: "2026", label: "GenAI Integration", desc: "Built AgroGuard using Gemini API & Groq — real-time agricultural advisor.", colorClass: "color-rose" },
  { year: "2026", label: "Hackathon Participant", desc: "Delivered a working prototype under 24-hour constraint at GIET Hackathon.", colorClass: "color-soft-purple" },
];

export default function AboutPage() {
  return (
    <div className="section-inner font-inter">
      <Reveal>
        <SectionTitle eyebrow="about-me" title="About Me" />
      </Reveal>
      <div className="about-grid">
        {/* Left — bio */}
        <Reveal dir="left">
          <GlassPanel className="about-glass-panel">
            <div className="ap-avatar">
              <img src={profilePic} alt="Anand Prasad" className="ap-avatar-photo" />
            </div>
            <h3 className="about-name">Anand Prasad</h3>
            <p className="about-desc">
              I'm a first-year Computer Science student at <span className="about-desc-highlight">GIET University</span> with
              a passion for building things that matter. I specialize in full-stack web development and love integrating
              AI into everyday products.
            </p>
            <p className="about-desc">
              When I'm not coding, I'm exploring the latest in large language models, contributing to open-source projects,
              or reading about distributed systems. I believe in learning by building.
            </p>
            <div className="about-info-list">
              {[
                { icon: "📍", label: "Location", val: "Jamshedpur, Jharkhand, IN" },
                { icon: "🎓", label: "Degree", val: "B.Tech CSE · 2025–2029" },
                { icon: "⭐", label: "CGPA", val: "9.2 / 10.0" },
                { icon: "📧", label: "Email", val: "anandprasadmsb77@gmail.com" },
              ].map(({ icon, label, val }) => (
                <div key={label} className="about-info-item">
                  <span className="about-info-icon">{icon}</span>
                  <span className="about-info-label">{label}</span>
                  <span className="about-info-val">{val}</span>
                </div>
              ))}
            </div>
          </GlassPanel>
        </Reveal>

        {/* Right — focus areas */}
        <div className="focus-list">
          {[
            { icon: "🌐", title: "Full-Stack Development", desc: "MERN stack — React frontends with Node/Express APIs and MongoDB persistence.", colorClass: "color-purple" },
            { icon: "🤖", title: "GenAI Integration", desc: "Connecting Gemini, Groq, and other LLM APIs to build intelligent, production-ready systems.", colorClass: "color-rose" },
            { icon: "⚡", title: "Backend Engineering", desc: "FastAPI, REST APIs, JWT auth, cloud deployment on Render and Vercel.", colorClass: "color-cyan" },
            { icon: "📚", title: "Continuous Learning", desc: "Always exploring new technologies — currently deep-diving into distributed systems and ML.", colorClass: "color-soft-purple" },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} dir="right">
              <GlassPanel className="focus-panel">
                <div className={`focus-icon-box ${item.colorClass}`}>{item.icon}</div>
                <div>
                  <div className="focus-title">{item.title}</div>
                  <div className="focus-desc">{item.desc}</div>
                </div>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <Reveal>
        <h3 className="timeline-section-title">Journey</h3>
      </Reveal>
      <div className="timeline-wrapper">
        <div className="timeline-line" />
        {TIMELINE.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="timeline-item">
              <div className={`timeline-dot ${t.colorClass}`} />
              <div className={`timeline-year ${t.colorClass}`}>{t.year}</div>
              <GlassPanel className="timeline-panel">
                <div className="timeline-label">{t.label}</div>
                <div className="timeline-desc">{t.desc}</div>
              </GlassPanel>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}