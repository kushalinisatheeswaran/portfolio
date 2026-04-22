import { createElement } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const contactCards = [
  {
    icon: FiMail,
    label: "Email",
    value: "kushalinisatheeswaran33@gmail.com",
    href: "mailto:kushalinisatheeswaran33@gmail.com",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/kushalinisatheeswaran",
    href: "https://github.com/kushalinisatheeswaran",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "kushalini-satheeswaran-29a267357",
    href: "https://www.linkedin.com/in/kushalini-satheeswaran-29a267357/",
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    value: "@shalini.s_12",
    href: "https://www.instagram.com/shalini.s_12/",
  },
];

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="reveal">
        <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">Contact</h2>
        <p className="mt-3 text-slate-300">
          Feel free to connect for collaboration, freelance work, or just to say
          hello.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="reveal grid gap-4 sm:grid-cols-2">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-cyan-400/60 hover:-translate-y-1"
            >
              {createElement(card.icon, { className: "text-2xl text-cyan-300" })}
              <p className="mt-3 text-sm font-semibold text-slate-100">{card.label}</p>
              <p className="mt-1 break-words text-sm text-slate-400">{card.value}</p>
            </a>
          ))}
        </div>

        <form
          className="reveal space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          onSubmit={(event) => event.preventDefault()}
        >
          <h3 className="text-xl font-semibold text-slate-100">Send a Message</h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full rounded-lg border border-white/15 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
          />
          <button
            type="submit"
            className="rounded-lg bg-violet-500 px-5 py-3 font-semibold text-white transition hover:bg-violet-400"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
