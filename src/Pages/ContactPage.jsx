import { Reveal, GlassPanel, SectionTitle } from "../Components/utils";
import { useState } from "react";

const SOCIALS = [
  { label: "Email", icon: "✉️", val: "anandprasadmsb77@gmail.com", href: "mailto:anandprasadmsb77@gmail.com", color: "#38bdf8" },
  { label: "GitHub", icon: "⬡", val: "github.com/anandprasad03", href: "https://github.com/anandprasad03", color: "#818cf8" },
  { label: "LinkedIn", icon: "in", val: "linkedin.com/in/anandprasad03", href: "https://linkedin.com", color: "#22d3a8" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:anandprasadmsb77@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%", background: "rgba(13,21,38,0.6)", border: "1px solid #1e293b",
    borderRadius: 10, padding: "12px 16px", color: "#f1f5f9", fontSize: 14,
    fontFamily: "inherit", outline: "none", transition: "border-color .2s",
    boxSizing: "border-box",
  };

  return (
    <div className="section-inner" style={{ maxWidth: 860 }}>
      <Reveal>
        <SectionTitle eyebrow="get-in-touch" title="Contact" />
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {/* Left — form */}
        <Reveal dir="left">
          <GlassPanel style={{ padding: "36px 32px" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>Send a Message</h3>
            <p style={{ color: "#475569", fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              I'm actively looking for a software engineering internship. Let's build something great together.
            </p>

            {sent && (
              <div style={{ background: "#22d3a810", border: "1px solid #22d3a830", borderRadius: 8, padding: "12px 16px", marginBottom: 20, color: "#22d3a8", fontSize: 13, fontFamily: "monospace" }}>
                ✓ Opening your email client…
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 11, fontFamily: "monospace", letterSpacing: ".1em", color: "#38bdf8", marginBottom: 6, fontWeight: 700 }}>NAME</label>
                <input style={inputStyle} placeholder="Your name"
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  onFocus={e => e.target.style.borderColor = "#38bdf844"}
                  onBlur={e => e.target.style.borderColor = "#1e293b"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontFamily: "monospace", letterSpacing: ".1em", color: "#38bdf8", marginBottom: 6, fontWeight: 700 }}>EMAIL</label>
                <input style={inputStyle} placeholder="your@email.com" type="email"
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  onFocus={e => e.target.style.borderColor = "#38bdf844"}
                  onBlur={e => e.target.style.borderColor = "#1e293b"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontFamily: "monospace", letterSpacing: ".1em", color: "#38bdf8", marginBottom: 6, fontWeight: 700 }}>MESSAGE</label>
                <textarea style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} placeholder="Your message…"
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  onFocus={e => e.target.style.borderColor = "#38bdf844"}
                  onBlur={e => e.target.style.borderColor = "#1e293b"} />
              </div>
              <button onClick={handleSubmit} className="link-btn" style={{
                background: "linear-gradient(135deg,#38bdf8,#818cf8)", color: "#fff", border: "none",
                width: "100%", justifyContent: "center", fontSize: 14, padding: "12px",
                boxShadow: "0 0 28px #38bdf830",
              }}>
                ✉ Send Message
              </button>
            </div>
          </GlassPanel>
        </Reveal>

        {/* Right — socials + info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Reveal dir="right">
            <GlassPanel style={{ padding: "28px 28px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 20 }}>Reach me directly</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    style={{ display: "flex", gap: 14, alignItems: "center", textDecoration: "none", padding: "12px 16px", borderRadius: 10, background: `${s.color}06`, border: `1px solid ${s.color}18`, transition: "all .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${s.color}12`; e.currentTarget.style.borderColor = `${s.color}33`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${s.color}06`; e.currentTarget.style.borderColor = `${s.color}18`; }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: `${s.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900, color: s.color, fontFamily: "monospace", flexShrink: 0 }}>{s.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: ".1em", color: s.color, fontWeight: 700 }}>{s.label}</div>
                      <div style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>{s.val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </GlassPanel>
          </Reveal>

          <Reveal dir="right" delay={0.1}>
            <GlassPanel style={{ padding: "24px 28px" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22d3a8", boxShadow: "0 0 8px #22d3a8", animation: "pulse 2s ease-in-out infinite" }} />
                <span style={{ fontSize: 13, color: "#94a3b8" }}>Available for internships</span>
              </div>
              <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                Open to full-stack, GenAI integration, or MERN stack roles. Can start immediately.
              </p>
            </GlassPanel>
          </Reveal>

          <Reveal dir="right" delay={0.2}>
            <GlassPanel style={{ padding: "24px 28px" }}>
              <h4 style={{ fontSize: 13, fontFamily: "monospace", letterSpacing: ".1em", color: "#38bdf8", fontWeight: 700, marginBottom: 12 }}>LOCATION</h4>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ fontSize: 20 }}>📍</span>
                <div>
                  <div style={{ color: "#f1f5f9", fontSize: 14, fontWeight: 600 }}>Jamshedpur, Jharkhand</div>
                  <div style={{ color: "#475569", fontSize: 12 }}>India · Open to remote</div>
                </div>
              </div>
            </GlassPanel>
          </Reveal>
        </div>
      </div>
    </div>
  );
}