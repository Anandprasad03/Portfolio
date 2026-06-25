import { useState, useEffect, useRef, useCallback } from "react";

// ── Typewriter hook ──────────────────────────────────────────────────────────
export function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let t;
    if (!deleting && charIdx < current.length) t = setTimeout(() => setCharIdx(c => c + 1), speed);
    else if (!deleting && charIdx === current.length) t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && charIdx > 0) t = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    else { setDeleting(false); setWordIdx(i => (i + 1) % words.length); }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

// ── InView hook ─────────────────────────────────────────────────────────────
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Reveal wrapper ───────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, dir = "up" }) {
  const [ref, inView] = useInView();
  const t = { up: "translateY(36px)", left: "translateX(-36px)", right: "translateX(36px)", scale: "scale(0.9)" };
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : t[dir],
      transition: `opacity .65s ${delay}s cubic-bezier(.22,1,.36,1), transform .65s ${delay}s cubic-bezier(.22,1,.36,1)`,
    }}>
      {children}
    </div>
  );
}

// ── Counter ──────────────────────────────────────────────────────────────────
export function Counter({ target, suffix = "", decimals = 0 }) {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = target / 45;
    const timer = setInterval(() => {
      s += step;
      if (s >= target) { setVal(target); clearInterval(timer); }
      else setVal(decimals ? parseFloat(s.toFixed(decimals)) : Math.floor(s));
    }, 28);
    return () => clearInterval(timer);
  }, [inView, target, decimals]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ── 3D Card ──────────────────────────────────────────────────────────────────
export function Card3D({ children, style = {} }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const rx = ((e.clientY - r.top - r.height / 2) / r.height) * -16;
    const ry = ((e.clientX - r.left - r.width / 2) / r.width) * 16;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
  }, []);
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
  }, []);
  return (
    <div ref={ref} className="card-3d" onMouseMove={onMove} onMouseLeave={onLeave} style={style}>
      {children}
    </div>
  );
}

// ── Section Title ────────────────────────────────────────────────────────────
export function SectionTitle({ eyebrow, title, width = 48 }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <div style={{ 
        fontFamily: "'Fira Code', 'JetBrains Mono', monospace", 
        fontSize: 13, 
        letterSpacing: ".15em", 
        color: "#06b6d4", // Cyan accent
        marginBottom: 8, 
        fontWeight: 700, 
        textTransform: "uppercase" 
      }}>
        /{eyebrow || title.toLowerCase().replace(/ /g, "-")}
      </div>
      <h2 style={{ 
        fontSize: "clamp(32px, 5vw, 44px)", 
        fontWeight: 900, 
        color: "#f1f5f9", 
        margin: "0 0 16px", 
        fontFamily: "'Outfit', 'Montserrat', sans-serif", 
        letterSpacing: "-.02em" 
      }}>
        {title}
      </h2>
      <div style={{ 
        width, 
        height: 4, 
        borderRadius: 2, 
        background: "linear-gradient(90deg, #8b5cf6, #f43f5e)" // Purple to Rose gradient
      }} />
    </div>
  );
}

// ── Glass panel ─────────────────────────────────────────────────────────────
export function GlassPanel({ children, style = {} }) {
  return (
    <div style={{
      background: "rgba(30, 27, 75, 0.4)", // Deep Cyber-Purple base
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      border: "1px solid rgba(139, 92, 246, 0.2)", // Subtle purple border (#8b5cf6)
      borderRadius: 20,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // Added depth
      ...style,
    }}>
      {children}
    </div>
  );
}