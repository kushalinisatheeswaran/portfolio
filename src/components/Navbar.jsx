import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Activities", id: "activities" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight text-cyan-400">
          Kushalini.dev
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Kushalini-Satheeswaran-CV.pdf"
            download
            className="hidden items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20 md:flex"
          >
            <FiDownload />
            Download CV
          </a>

          <button
            className="text-2xl text-slate-200 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="space-y-3 border-t border-white/10 bg-slate-900/95 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                className="block py-1 text-slate-300 transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/Kushalini-Satheeswaran-CV.pdf"
              download
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500/20 py-2.5 text-sm font-semibold text-cyan-300 border border-cyan-400/40"
            >
              <FiDownload />
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
