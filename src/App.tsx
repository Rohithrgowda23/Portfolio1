import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { About, Skills, Projects, Experience, Achievements, Contact, Footer } from "./components/Sections";

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About /><Skills /><Projects /><Experience /><Achievements /><Contact />
      </main>
      <Footer />
    </>
  );
}
