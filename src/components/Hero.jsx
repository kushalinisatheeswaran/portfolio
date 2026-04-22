import { createElement, useEffect, useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const roles = [
  "Full Stack Developer",
  "C++ Game Developer",
  "React & Node.js Developer",
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
        setTimeout(() => setIsDeleting(true), 700);
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
    <section id="home" className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
      <div className="reveal rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Full Stack Developer
        </p>
        <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">
          <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Kushalini Satheeswaran
          </span>
        </h1>
        <p className="mb-4 h-8 text-lg font-semibold text-slate-200 md:text-2xl">
          {text}
          <span className="ml-1 animate-pulse text-cyan-400">|</span>
        </p>
        <p className="max-w-2xl text-slate-300">
          Passionate developer from Sri Lanka building full-stack web apps and
          C++ games.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-cyan-400/60 px-6 py-3 font-semibold text-cyan-300 transition hover:scale-105 hover:bg-cyan-500/10"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="rounded-lg border border-white/10 bg-white/5 p-3 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300"
            >
              {createElement(item.icon)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
