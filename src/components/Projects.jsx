const projects = [
  {
    title: "Bus Tracker Pro",
    description:
      "A real-time bus tracking web application with full-stack architecture.",
    tech: ["React", "Node.js", "MySQL"],
    links: [{ label: "GitHub", url: "https://github.com/kushalinisatheeswaran" }],
    badge: { text: "Full Stack", color: "bg-blue-500/20 text-blue-300" },
  },
  {
    title: "Task Management App",
    description:
      "A complete task management system with user authentication and task CRUD operations.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    links: [{ label: "GitHub", url: "https://github.com/kushalinisatheeswaran" }],
    badge: { text: "Full Stack", color: "bg-violet-500/20 text-violet-300" },
  },
  {
    title: "Note Taking App",
    description:
      "Full-stack note taking application with React frontend, Node.js backend and MySQL database.",
    tech: ["React", "Node.js", "MySQL", "JavaScript"],
    links: [
      {
        label: "Frontend Repo",
        url: "https://github.com/kushalinisatheeswaran/note-taking-frontend",
      },
      {
        label: "Backend Repo",
        url: "https://github.com/kushalinisatheeswaran/note-taking-app",
      },
    ],
    badge: { text: "Full Stack", color: "bg-emerald-500/20 text-emerald-300" },
  },
  {
    title: "Flappy Bird Game",
    description: "A classic Flappy Bird clone built entirely in C++ with graphics.",
    tech: ["C++"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/kushalinisatheeswaran/Flappybird_game",
      },
    ],
    badge: { text: "C++ Game", color: "bg-orange-500/20 text-orange-300" },
  },
  {
    title: "Dice Roll Game",
    description: "An interactive dice rolling game built in C++.",
    tech: ["C++"],
    links: [{ label: "GitHub", url: "https://github.com/kushalinisatheeswaran" }],
    badge: { text: "C++ Game", color: "bg-orange-500/20 text-orange-300" },
  },
  {
    title: "City Cab Management System",
    description:
      "A bonus project focused on cab operations, booking flow and management logic.",
    tech: ["JavaScript", "Node.js", "MySQL"],
    links: [{ label: "GitHub", url: "https://github.com/kushalinisatheeswaran" }],
    badge: { text: "Bonus Project", color: "bg-cyan-500/20 text-cyan-300" },
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="reveal">
        <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">Projects</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Featured full-stack applications and C++ game development projects.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
          >
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${project.badge.color}`}
            >
              {project.badge.text}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-slate-100">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
