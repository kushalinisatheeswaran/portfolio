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
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-300 md:flex-row">
        <p className="flex items-center gap-2">
          Built by Kushalini Satheeswaran
          <FiHeart className="text-pink-400" />
        </p>

        <div className="flex items-center gap-3">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={item.label}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-lg transition hover:border-cyan-400/60 hover:text-cyan-300"
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
