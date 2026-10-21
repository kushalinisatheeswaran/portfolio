import { useState } from "react";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-purple-100/80 bg-white/85 backdrop-blur-xl shadow-xs dark:border-slate-800/80 dark:bg-[#0B1220]/90 dark:shadow-none transition-colors duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-fuchsia-600 dark:from-cyan-400 dark:via-violet-300 dark:to-fuchsia-400 bg-clip-text text-transparent font-extrabold">
            <span className="hidden sm:inline">Kushalini Satheeswaran</span>
            <span className="sm:hidden">Kushalini</span>
          </span>
        </a>

        <div className="flex items-center gap-3 md:gap-4">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm font-medium text-slate-700 transition hover:text-purple-600 dark:text-slate-300 dark:hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Kushalini-Satheeswaran-CV.pdf"
            download
            className="hidden items-center gap-2 rounded-xl border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-semibold text-purple-700 shadow-xs transition hover:border-purple-300 hover:bg-purple-100 dark:border-cyan-400/40 dark:bg-cyan-500/10 dark:text-cyan-300 dark:shadow-none dark:hover:border-cyan-400 dark:hover:bg-cyan-500/20 md:flex"
          >
            <FiDownload />
            Download CV
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex items-center justify-center rounded-xl border border-purple-200 bg-purple-50 p-2.5 text-purple-700 shadow-xs transition duration-200 hover:border-purple-300 hover:bg-purple-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500 dark:border-slate-700/80 dark:bg-[#172033] dark:text-cyan-300 dark:shadow-none dark:hover:border-cyan-400/60 dark:hover:bg-[#1E2942] dark:focus-visible:ring-cyan-400"
          >
            {theme === "dark" ? (
              <FiSun className="text-lg text-amber-300 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <FiMoon className="text-lg text-purple-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-2xl text-slate-700 transition hover:text-purple-600 dark:text-slate-200 dark:hover:text-cyan-300 md:hidden focus:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500 dark:focus-visible:ring-cyan-400 rounded-lg p-1"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="space-y-3 border-t border-purple-100 bg-white/95 px-6 py-4 shadow-lg dark:border-white/10 dark:bg-slate-900/95 dark:shadow-black/40 md:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                className="block py-1 text-slate-700 transition hover:text-purple-600 dark:text-slate-300 dark:hover:text-cyan-400"
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
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-purple-200 bg-purple-50 py-2.5 text-sm font-semibold text-purple-700 shadow-xs dark:border-cyan-400/40 dark:bg-cyan-500/20 dark:text-cyan-300 dark:shadow-none"
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
