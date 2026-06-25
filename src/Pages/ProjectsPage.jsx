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
    demo: "https://agroguard-pi.vercel.app/",
    accentClass: "color-cyan",
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
    demo: "https://audio-stream-nine.vercel.app/",
    accentClass: "color-purple",
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
    demo: "https://basic-social-app.vercel.app/",
    accentClass: "color-rose",
    icon: "🌐",
    category: "Full-Stack · MERN",
  },
];

export default function ProjectsPage() {
  return (
    <div className="section-inner font-inter">
      <Reveal>
        <SectionTitle eyebrow="my-work" title="Projects" />
      </Reveal>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} dir={i % 2 === 0 ? "left" : "right"}>
            <Card3D>
              <div className="proj-card-inner">
                <div className={`proj-card-top-line ${p.accentClass}`} />
                <div className={`proj-card-glow ${p.accentClass}`} />

                <div className="proj-header">
                  <div className="proj-header-left">
                    <div className={`proj-icon-box ${p.accentClass}`}>{p.icon}</div>
                    <div>
                      <div className="proj-title-row">
                        <h3 className={`proj-title ${p.accentClass}`}>{p.title}</h3>
                        <span className={`proj-category ${p.accentClass}`}>{p.category}</span>
                      </div>
                      <p className="proj-subtitle">{p.subtitle}</p>
                    </div>
                  </div>
                  <div className="proj-links">
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-link-code">↗ Code</a>
                    <a href={p.demo} className={`proj-link-demo ${p.accentClass}`}>▶ Demo</a>
                  </div>
                </div>

                <div className="proj-bullets">
                  {p.bullets.map((b, j) => (
                    <p key={j} className="proj-bullet">
                      <span className={`proj-bullet-arrow ${p.accentClass}`}>▸</span>{b}
                    </p>
                  ))}
                </div>

                <div>
                  {p.stack.map((s) => (
                    <span key={s} className={`proj-stack-tag ${p.accentClass}`}>{s}</span>
                  ))}
                </div>
              </div>
            </Card3D>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="more-projects-wrapper">
          <GlassPanel className="more-projects-panel">
            <p className="more-projects-text">More projects on GitHub</p>
            <a href="https://github.com/anandprasad03" target="_blank" rel="noreferrer" className="btn-more-projects">
              ↗ View All on GitHub
            </a>
          </GlassPanel>
        </div>
      </Reveal>
    </div>
  );
}