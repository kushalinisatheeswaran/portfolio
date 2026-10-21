import { createElement } from "react";
import { FiGithub, FiHeart, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const links = [
  { icon: FiGithub, href: "https://github.com/kushalinisatheeswaran", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/kushalini-satheeswaran-29a267357/",
    label: "LinkedIn",
  },
  { icon: FiInstagram, href: "https://www.instagram.com/shalini.s_12/", label: "Instagram" },
  { icon: FiMail, href: "mailto:kushalinisatheeswaran33@gmail.com", label: "Email" },
];

function Footer() {
  return (
    <footer className="border-t border-purple-100/80 bg-white/85 text-slate-700 dark:border-slate-800/80 dark:bg-[#0B1220]/90 dark:text-slate-300 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm md:flex-row">
        <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          Built by <span className="font-semibold text-slate-900 dark:text-slate-100">Kushalini Satheeswaran</span>
          <FiHeart className="text-pink-500 dark:text-pink-400" />
        </p>

        <div className="flex items-center gap-3">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={item.label}
              className="rounded-lg border border-purple-200 bg-purple-50/60 p-2 text-lg text-purple-700 transition hover:border-purple-300 hover:text-purple-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              {createElement(item.icon)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
