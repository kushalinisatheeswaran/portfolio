import { createElement, useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:kushalinisatheeswaran33@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="reveal">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Get In <span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-cyan-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Feel free to connect for software engineering internship opportunities, project collaborations, or technical discussions.
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
              className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition hover:border-purple-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700/60 dark:bg-[#172033] dark:shadow-lg dark:hover:border-cyan-400/60 dark:hover:bg-[#1E2942]"
            >
              {createElement(card.icon, { className: "text-2xl text-purple-600 dark:text-cyan-300" })}
              <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">{card.label}</p>
              <p className="mt-1 break-words text-xs text-slate-500 dark:text-slate-400">{card.value}</p>
            </a>
          ))}
        </div>

        <form
          className="reveal space-y-4 rounded-2xl border border-purple-100 bg-white p-6 shadow-md dark:border-slate-700/60 dark:bg-[#172033] dark:shadow-lg transition-colors duration-300"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Send a Message</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Submitting this form prepares a direct email message via your email application.
          </p>
          <div>
            <label htmlFor="contact-name" className="sr-only">Name</label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-purple-500 focus:bg-white dark:border-slate-700/60 dark:bg-[#0F172A] dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-cyan-400 dark:focus:bg-[#0F172A]"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">Email</label>
            <input
              id="contact-email"
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-purple-500 focus:bg-white dark:border-slate-700/60 dark:bg-[#0F172A] dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-cyan-400 dark:focus:bg-[#0F172A]"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">Message</label>
            <textarea
              id="contact-message"
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-purple-500 focus:bg-white dark:border-slate-700/60 dark:bg-[#0F172A] dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-cyan-400 dark:focus:bg-[#0F172A]"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:from-cyan-400 hover:to-purple-500 dark:bg-none dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 dark:shadow-none"
          >
            <FiSend />
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
