import { useState } from "react";
import { PROFILE, CONTACT, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS, RESUME_URL } from "../data";

const Head = ({ n, children }: { n?: string; children: string }) => (
  <div className="head" data-reveal><h2>{children}</h2>{n && <span>{n}</span>}</div>
);

export function About() {
  if (!PROFILE.summary) return null;
  const links = [CONTACT.github && { l: "GitHub", h: CONTACT.github }, CONTACT.linkedin && { l: "LinkedIn", h: CONTACT.linkedin }].filter(Boolean) as { l: string; h: string }[];
  return (
    <section id="about" className="sec about">
      <div data-reveal>
        <h2>Hi, I'm {PROFILE.firstName}.</h2>
        <p className="lead">{PROFILE.summary}</p>
        <div className="cta">
          {links.map((x) => <a key={x.l} className="btn" href={x.h} target="_blank" rel="noreferrer">{x.l}</a>)}
          <a className="btn" href={RESUME_URL} download>Résumé</a>
        </div>
      </div>
      <aside className="idcard" data-reveal aria-label="Profile card">
          <img src="/photo.jpg" alt="Rohith R Gowda" onError={(e) => (e.currentTarget.style.display = "none")} />
        <dl>
          <dt>Name</dt><dd>{PROFILE.name}</dd>
          <dt>Role</dt><dd>{PROFILE.role}</dd>
          {PROFILE.location && <><dt>Location</dt><dd>{PROFILE.location}</dd></>}
          {EDUCATION[0]?.degree && <><dt>Education</dt><dd>{EDUCATION[0].degree}</dd></>}
          {EDUCATION[0]?.year && <><dt>Graduated</dt><dd>{EDUCATION[0].year}</dd></>}
        </dl>
      </aside>
    </section>
  );
}

export function Skills() {
  if (!SKILLS.length) return null;
  const cats = [...new Set(SKILLS.map((s) => s.category))];
  return (
    <section id="skills" className="sec">
      <Head>The Stack</Head>
      {cats.map((c) => (
        <div key={c} className="cat" data-reveal>
          <h3>{c}</h3>
          <ul className="tiles">
            {SKILLS.filter((s) => s.category === c).map((s) => (
              <li key={s.name} tabIndex={0}>{s.logo && <img src={s.logo} alt="" width={28} height={28} />}<b>{s.name}</b></li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export function Projects() {
  const [open, setOpen] = useState(0);
  if (!PROJECTS.length) return null;
  return (
    <section id="work" className="sec">
      <Head>Work</Head>
      <div className="panels" data-reveal>
        {PROJECTS.map((p, i) => (
          <article key={p.name} className={"panel" + (open === i ? " open" : "")}>
            <button className="panel-head" aria-expanded={open === i} onClick={() => setOpen(i)}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="pname">{p.name}</span>
            </button>
            <div className="panel-body"><div>
              <p>{p.description}</p>
              {p.features.length > 0 && <ul className="feat">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>}
              <p className="tech">{p.tech.join(", ")}</p>
              {p.github && <a className="btn solid" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
              <figure className="mock" aria-label="Illustrative UI, not a real screenshot">
                <div className="bar"><i /><i /><i /></div>
                <div className="rows"><u /><u /><u /></div>
                <figcaption>Illustrative UI</figcaption>
              </figure>
            </div></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  const items = [
    ...EXPERIENCE,
    ...EDUCATION.map((e) => ({ date: e.year ?? "", title: e.degree, org: [e.institution, e.university].filter(Boolean).join(", "), points: e.cgpa ? [`CGPA: ${e.cgpa}`] : undefined })),
  ];
  if (!items.length) return null;
  return (
    <section id="experience" className="sec">
      <Head>Experience & education</Head>
      <ol className="timeline">
        {items.map((x, i) => (
          <li key={i} data-reveal>
            {x.date && <time>{x.date}</time>}
            <h3>{x.title}</h3>
            <p className="org">{x.org}</p>
            {x.points && <ul className="feat">{x.points.map((t) => <li key={t}>{t}</li>)}</ul>}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Achievements() {
  if (!ACHIEVEMENTS.length && !CERTIFICATIONS.length) return null;
  return (
    <section id="achievements" className="sec">
      {CERTIFICATIONS.length > 0 && <>
        <Head>Certifications</Head>
        <ol className="certs">
          {CERTIFICATIONS.map((c, i) => (
            <li key={c.name} data-reveal tabIndex={0}>
              <span>{String(i + 1).padStart(2, "0")}</span><b>{c.name}</b><em>{c.issuer}</em><i aria-hidden>↗</i>
            </li>
          ))}
        </ol>
      </>}
      {ACHIEVEMENTS.length > 0 && <>
        <Head>Achievements</Head>
        <ul className="ach">{ACHIEVEMENTS.map((a) => <li key={a.title} data-reveal><b>{a.title}</b><p>{a.detail}</p></li>)}</ul>
      </>}
    </section>
  );
}

export function Contact() {
  const links = [
    CONTACT.email && { l: CONTACT.email, h: `mailto:${CONTACT.email}` },
    CONTACT.linkedin && { l: "LinkedIn", h: CONTACT.linkedin },
    CONTACT.github && { l: "GitHub", h: CONTACT.github },
  ].filter(Boolean) as { l: string; h: string }[];
  return (
    <section id="contact" className="sec contact">
      <h2 className="big" data-reveal>Let's build<br />something<br />together.</h2>
      <div className="cta">
        {links.map((x) => <a key={x.l} className="btn" href={x.h} target={x.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{x.l}</a>)}
        {CONTACT.phone && <a className="btn" href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>}
        <a className="btn" href={RESUME_URL} download>Download résumé</a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div><b>{PROFILE.name.toUpperCase()}</b><p>{PROFILE.role}</p></div>
      <p>© {new Date().getFullYear()} {PROFILE.name}</p>
    </footer>
  );
}
