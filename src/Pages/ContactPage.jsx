import { Reveal, GlassPanel, SectionTitle } from "../Components/utils";
import { useState } from "react";

const SOCIALS = [
  { label: "Email", icon: "✉️", val: "anandprasadmsb77@gmail.com", href: "mailto:anandprasadmsb77@gmail.com", colorClass: "color-rose" },
  { label: "GitHub", icon: "⬡", val: "github.com/anandprasad03", href: "https://github.com/anandprasad03", colorClass: "color-purple" },
  { label: "LinkedIn", icon: "in", val: "linkedin.com/in/anandprasad03", href: "https://linkedin.com", colorClass: "color-cyan" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:anandprasadmsb77@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="section-inner contact-wrapper">
      <Reveal>
        <SectionTitle eyebrow="get-in-touch" title="Contact" />
      </Reveal>

      <div className="contact-grid">
        {/* Left — form */}
        <Reveal dir="left">
          <GlassPanel className="contact-form-panel">
            <h3 className="contact-form-title">Send a Message</h3>
            <p className="contact-form-desc">
              I'm actively looking for a software engineering internship. Let's build something great together.
            </p>

            {sent && (
              <div className="contact-success">
                ✓ Opening your email client…
              </div>
            )}

            <div className="contact-form">
              <div>
                <label className="form-label">NAME</label>
                <input className="form-input" placeholder="Your name"
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              </div>
              <div>
                <label className="form-label">EMAIL</label>
                <input className="form-input" placeholder="your@email.com" type="email"
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
              <div>
                <label className="form-label">MESSAGE</label>
                <textarea className="form-input form-textarea" placeholder="Your message…"
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
              <button onClick={handleSubmit} className="btn-submit">
                ✉ Send Message
              </button>
            </div>
          </GlassPanel>
        </Reveal>

        {/* Right — socials + info */}
        <div className="contact-right">
          <Reveal dir="right">
            <GlassPanel className="contact-info-panel">
              <h3 className="contact-info-title">Reach me directly</h3>
              <div className="social-links">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={`social-link ${s.colorClass}`}>
                    <div className={`social-icon ${s.colorClass}`}>{s.icon}</div>
                    <div>
                      <div className={`social-label ${s.colorClass}`}>{s.label}</div>
                      <div className="social-val">{s.val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </GlassPanel>
          </Reveal>

          <Reveal dir="right" delay={0.1}>
            <GlassPanel className="availability-panel">
              <div className="availability-header">
                <div className="availability-dot" />
                <span className="availability-text">Available for internships</span>
              </div>
              <p className="availability-desc">
                Open to full-stack, GenAI integration, or MERN stack roles. Can start immediately.
              </p>
            </GlassPanel>
          </Reveal>

          <Reveal dir="right" delay={0.2}>
            <GlassPanel className="location-panel">
              <h4 className="location-title">LOCATION</h4>
              <div className="location-content">
                <span className="location-icon">📍</span>
                <div>
                  <div className="location-city">Jamshedpur, Jharkhand</div>
                  <div className="location-country">India · Open to remote</div>
                </div>
              </div>
            </GlassPanel>
          </Reveal>
        </div>
      </div>
    </div>
  );
}