import { useEffect, useState } from "react";
import { NAV, PROFILE, RESUME_URL } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 20);
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);
  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <a className="brand" href="#top">{PROFILE.name.toUpperCase()}</a>
      <nav className="links" aria-label="Primary">
        {NAV.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
      </nav>
      <a className="resume-link" href={RESUME_URL} download>Resume</a>
      <button className="menu-btn" aria-expanded={open} aria-controls="overlay" onClick={() => setOpen(!open)}>
        {open ? "CLOSE" : "MENU"}
      </button>
      {open && (
        <div id="overlay" className="overlay" role="dialog" aria-label="Menu">
          {NAV.map((n, i) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
              <span>{String(i + 1).padStart(2, "0")}</span>{n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
