import { createElement, useEffect, useState } from "react";
import { FiDownload, FiFolder, FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Backend Developer",
];

const socialLinks = [
  {
    icon: FiGithub,
    url: "https://github.com/kushalinisatheeswaran",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/kushalini-satheeswaran-29a267357/",
    label: "LinkedIn",
  },
  {
    icon: FiInstagram,
    url: "https://www.instagram.com/shalini.s_12/",
    label: "Instagram",
  },
  {
    icon: FiMail,
    url: "mailto:kushalinisatheeswaran33@gmail.com",
    label: "Email",
  },
];

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setText((prev) =>
        isDeleting
          ? currentRole.slice(0, prev.length - 1)
          : currentRole.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-20">
      {/* Clean Professional Hero Card (#172033) Distinct From Deep Navy Page (#0B1220) */}
      <div className="reveal rounded-3xl border border-slate-700/60 bg-[#172033] p-8 shadow-xl shadow-black/40 md:p-12">
        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:items-center">
          
          {/* Text Content */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Computer Engineering Undergraduate
            </p>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Kushalini Satheeswaran
              </span>
            </h1>
            <p className="mb-5 h-8 text-xl font-semibold text-slate-200 md:text-2xl">
              {text}
              <span className="ml-1 animate-pulse text-cyan-400">|</span>
            </p>
            <p className="max-w-2xl leading-relaxed text-slate-300">
              Computer Engineering undergraduate at the University of Sri Jayewardenepura with hands-on experience building full-stack web, mobile and backend applications using technologies such as React, Next.js, Java, Spring Boot, Node.js and Python.
            </p>

            {/* Main CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-400"
              >
                <FiFolder className="text-lg" />
                View Projects
              </a>
              <a
                href="/Kushalini-Satheeswaran-CV.pdf"
                download
                className="flex items-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 transition hover:scale-[1.02] hover:bg-cyan-500/20 hover:border-cyan-400"
              >
                <FiDownload className="text-lg" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target={item.url.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                  aria-label={item.label}
                  className="rounded-xl border border-slate-700/60 bg-[#1E2942] p-3 text-xl text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-[#253352]"
                >
                  {createElement(item.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Photo with Refined Cyan/Violet Frame */}
          <div className="relative shrink-0 group">
            {/* Ambient Accent Glow Ring */}
            <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-fuchsia-500/30 blur-lg opacity-70 transition duration-500 group-hover:opacity-100"></div>
            
            {/* Gradient Border Accent Ring */}
            <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-tr from-cyan-400 via-violet-500 to-fuchsia-500 opacity-75 transition duration-500 group-hover:opacity-100"></div>

            {/* Main Profile Frame */}
            <div className="relative h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-[1.9rem] bg-[#0F172A] p-2.5 shadow-xl shadow-black/50 border border-slate-700/60 transform transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.01]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] border border-cyan-400/40 bg-[#0B1220]">
                <img
                  src="/profile.jpg"
                  alt="Kushalini Satheeswaran"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
