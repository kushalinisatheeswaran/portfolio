import { useEffect } from "react";
import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll(".reveal");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F7F7FB] text-slate-900 selection:bg-purple-500 selection:text-white dark:bg-[#0B1220] dark:text-slate-100 dark:selection:bg-cyan-500 dark:selection:text-slate-950 overflow-x-hidden transition-colors duration-300">
      {/* Soft Ambient Radial Background Glows for Light Theme */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden dark:hidden">
        <div className="absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-cyan-200/40 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 h-[35rem] w-[35rem] rounded-full bg-purple-200/40 blur-[150px]" />
        <div className="absolute bottom-1/4 -left-32 h-[30rem] w-[30rem] rounded-full bg-fuchsia-200/30 blur-[140px]" />
      </div>

      {/* Subtle Ambient Radial Glows for Dark Theme */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden dark:block">
        <div className="absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[35rem] w-[35rem] rounded-full bg-blue-500/5 blur-[160px]" />
        <div className="absolute bottom-1/4 -left-40 h-[30rem] w-[30rem] rounded-full bg-violet-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Activities />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
