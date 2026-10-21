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
      {/* Hero Panel Container */}
      <div className="reveal relative overflow-hidden rounded-3xl border border-purple-100/80 bg-white/90 p-8 shadow-xl shadow-purple-500/5 backdrop-blur-md dark:border-slate-700/60 dark:bg-[#172033] dark:shadow-black/40 md:p-12 transition-colors duration-300">
        {/* Soft Decorative Gradient Glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-violet-500/10"></div>

        <div className="relative z-10 flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:items-center">
          
          {/* Text Content */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
              Computer Engineering Undergraduate
            </p>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-fuchsia-600 dark:from-cyan-400 dark:via-violet-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
                Kushalini Satheeswaran
              </span>
            </h1>
            <p className="mb-5 h-8 text-xl font-semibold text-slate-800 dark:text-slate-100 md:text-2xl">
              {text}
              <span className="ml-1 animate-pulse text-purple-600 dark:text-cyan-400">|</span>
            </p>
            <p className="max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
              Computer Engineering undergraduate at the University of Sri Jayewardenepura with hands-on experience building full-stack web, mobile and backend applications using technologies such as React, Next.js, Java, Spring Boot, Node.js and Python.
            </p>

            {/* Main CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-[1.02] hover:from-cyan-400 hover:to-purple-500 dark:bg-none dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 dark:shadow-none"
              >
                <FiFolder className="text-lg" />
                View Projects
              </a>
              <a
                href="/Kushalini-Satheeswaran-CV.pdf"
                download
                className="flex items-center gap-2 rounded-xl border border-purple-200 bg-white px-6 py-3 font-semibold text-purple-700 shadow-xs transition hover:scale-[1.02] hover:bg-purple-50 hover:border-purple-300 dark:border-cyan-400/60 dark:bg-cyan-500/10 dark:text-cyan-300 dark:shadow-none dark:hover:bg-cyan-500/20 dark:hover:border-cyan-400"
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
                  className="rounded-xl border border-slate-200 bg-white p-3 text-xl text-slate-700 shadow-xs transition hover:-translate-y-1 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50/50 dark:border-slate-700/60 dark:bg-[#1E2942] dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/60 dark:hover:text-cyan-300 dark:hover:bg-[#253352]"
                >
                  {createElement(item.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Photo with Dual-Theme Frame */}
          <div className="relative shrink-0 group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-cyan-400/25 via-purple-400/25 to-fuchsia-400/25 dark:from-cyan-500/30 dark:via-violet-500/30 dark:to-fuchsia-500/30 blur-xl opacity-70 transition duration-500 group-hover:opacity-100"></div>
            
            {/* Gradient Border Accent Ring */}
            <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-tr from-cyan-400 via-purple-400 to-fuchsia-400 dark:via-violet-500 dark:to-fuchsia-500 opacity-75 transition duration-500 group-hover:opacity-100"></div>

            {/* Main Profile Frame */}
            <div className="relative h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-[1.9rem] bg-white dark:bg-[#0F172A] p-2.5 shadow-xl shadow-purple-500/10 dark:shadow-black/50 border border-purple-100 dark:border-slate-700/60 transform transition-all duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.01]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] border border-purple-200/60 dark:border-cyan-400/40 bg-slate-50 dark:bg-[#0B1220]">
                <img
                  src="/profile.jpg"
                  alt="Kushalini Satheeswaran"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
