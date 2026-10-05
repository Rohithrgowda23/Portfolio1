import { useEffect, useRef, useState } from "react";
import { PROFILE, NAV, RESUME_URL } from "../data";

function IntroVideo({ onClose }: { onClose: () => void }) {
  const v = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  useEffect(() => {
    v.current?.play().catch(() => setPlaying(false));
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);
  const toggle = () => { const el = v.current; if (!el) return; el.paused ? el.play() : el.pause(); };
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Introduction video">
      <div className="modal-box">
        <video ref={v} src="/intro.mp4" poster="/photo.jpg" playsInline preload="metadata" muted={muted}
               onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
        <div className="controls">
          <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
          <button onClick={() => setMuted(!muted)} aria-pressed={muted}>{muted ? "Unmute" : "Mute"}</button>
          <button onClick={onClose} autoFocus>Close</button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [video, setVideo] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;
    const move = (e: MouseEvent) => {
      const x = (e.clientX / innerWidth - 0.5) * 10, y = (e.clientY / innerHeight - 0.5) * 6;
      stage.current?.style.setProperty("--mx", `${x}px`);
      stage.current?.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <h1><span className="rise">{PROFILE.firstName.toUpperCase()}</span><span className="rise d2">{PROFILE.lastName.toUpperCase()}</span></h1>
        <p className="role">{PROFILE.role}</p>
        {PROFILE.location && <p className="meta">{PROFILE.location}</p>}
        <div className="cta">
          {NAV.some((n) => n.id === "work") && <a className="btn solid" href="#work">Explore work</a>}
          <a className="btn" href="#contact">Contact me</a>
          <a className="btn" href={RESUME_URL} download>Download résumé</a>
          <button className="btn" onClick={() => setVideo(true)}>Play intro</button>
        </div>
      </div>
      <div className="stage" ref={stage}>
        <span className="ghost" aria-hidden>{PROFILE.firstName.toUpperCase()}</span>
        <img className="character" src="/character.png" alt={`3D character of ${PROFILE.name}`} width={660} height={1428}
          onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
      </div>
      {video && <IntroVideo onClose={() => setVideo(false)} />}
    </section>
  );
}
