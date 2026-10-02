import { FiExternalLink, FiGithub } from "react-icons/fi";

const featuredProjects = [
  {
    title: "Travel Planner",
    description:
      "A full-stack travel planner for organizing trips, destinations and itineraries. Users can authenticate using Google or GitHub, manage trips, upload cover images, explore destinations through Google Maps and reorder itinerary stops.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Google Maps", "UploadThing"],
    github: "https://github.com/kushalinisatheeswaran/Trip-Planner-App",
    live: "https://trip-planner-app-zeta.vercel.app",
    badge: { text: "Full Stack", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  },
  {
    title: "Job Application Tracker",
    description:
      "A full-stack job application management platform with a personal Kanban board. Users can create applications, record job details and move applications between recruitment stages using drag-and-drop.",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Mongoose", "Better Auth", "dnd-kit"],
    github: "https://github.com/kushalinisatheeswaran/Job-Application-Tracker",
    live: "https://job-application-tracker-green-iota.vercel.app",
    badge: { text: "Full Stack", color: "bg-violet-500/20 text-violet-300 border-violet-500/30" },
  },
  {
    title: "E-Commerce Application",
    description:
      "A full-stack e-commerce application with a Next.js frontend and Spring Boot REST API. Customers can browse products, manage their cart, place orders and review order history, while administrators can manage products and inventory.",
    tech: ["Next.js", "React", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "JWT", "JPA"],
    github: "https://github.com/kushalinisatheeswaran/ecommerce-app",
    live: "https://ecommerce-beta-olive-19.vercel.app",
    liveLabel: "Frontend Live",
    badge: { text: "Full Stack", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  },
  {
    title: "IntelliGate System",
    subtitle: "Collaborative University Engineering Project",
    description:
      "A university gate automation prototype combining number plate recognition, student identification, backend verification, access logging and mobile monitoring.",
    contribution:
      "My contribution: Backend and database development, including models, routes, database migrations and administrative functionality.",
    tech: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "React Native", "Expo", "Socket.IO", "OpenCV"],
    github: "https://github.com/kushalinisatheeswaran/Intelligate-System",
    badge: { text: "Engineering Prototype", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  },
  {
    title: "Task Management Application",
    description:
      "A collaborative task management application for organizing projects, assigning tasks, tracking status, managing comments and visualizing progress.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Firebase", "Firestore", "Recharts"],
    github: "https://github.com/kushalinisatheeswaran/TaskManagemnetApp",
    badge: { text: "Collaborative App", color: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30" },
  },
  {
    title: "PharmaShortage Predictor / MedCascade",
    description:
      "An experimental full-stack application for exploring medicine shortage risk scores and hypothetical cascade scenarios through machine learning and graph-based analysis.",
    tech: ["Python", "FastAPI", "scikit-learn", "Next.js", "TypeScript", "pandas", "NetworkX"],
    github: "https://github.com/kushalinisatheeswaran/pharma-shortage-predictor",
    badge: { text: "Experimental ML Project", color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  },
];

const otherProjects = [
  {
    title: "Note Taking App",
    description:
      "Full-stack note taking application with React frontend, Node.js backend and MySQL database.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    githubLinks: [
      { label: "Frontend", url: "https://github.com/kushalinisatheeswaran/note-taking-frontend" },
      { label: "Backend", url: "https://github.com/kushalinisatheeswaran/note-taking-app" },
    ],
  },
  {
    title: "Flappy Bird Game",
    description: "A classic Flappy Bird clone built in C++ with graphical rendering.",
    tech: ["C++"],
    githubLinks: [
      { label: "GitHub", url: "https://github.com/kushalinisatheeswaran/Flappybird_game" },
    ],
  },
  {
    title: "Bus Tracker Backend",
    description: "Backend API logic and route management services for public transit tracking.",
    tech: ["Node.js", "Express", "MySQL"],
    githubLinks: [
      { label: "GitHub", url: "https://github.com/kushalinisatheeswaran" },
    ],
  },
  {
    title: "To-Do List",
    description: "Clean interactive task tracking web application with state management.",
    tech: ["React", "JavaScript", "HTML/CSS"],
    githubLinks: [
      { label: "GitHub", url: "https://github.com/kushalinisatheeswaran" },
    ],
  },
  {
    title: "Dice Roll Game",
    description: "An interactive dice rolling application built in C++.",
    tech: ["C++"],
    githubLinks: [
      { label: "GitHub", url: "https://github.com/kushalinisatheeswaran" },
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="reveal">
        <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Full-stack web applications, engineering prototypes, and machine learning software solutions.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="reveal flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${project.badge.color}`}
                >
                  {project.badge.text}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-100">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="mt-1 text-xs font-medium text-cyan-300">
                  {project.subtitle}
                </p>
              )}

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              {project.contribution && (
                <p className="mt-3 text-xs leading-relaxed text-cyan-200/90 italic bg-slate-900/50 p-2.5 rounded-lg border border-cyan-500/20">
                  {project.contribution}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/5 bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 pt-2 border-t border-white/10">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                <FiGithub className="text-sm" />
                GitHub Repo
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:border-cyan-400"
                >
                  <FiExternalLink className="text-sm" />
                  {project.liveLabel || "Live Demo"}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Other Projects Section */}
      <div className="mt-16 reveal">
        <h3 className="text-2xl font-bold text-slate-100">
          Other <span className="text-cyan-400">Projects</span>
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Smaller applications, algorithms, game prototypes, and utility tools.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-sm transition hover:border-cyan-400/40"
            >
              <div>
                <h4 className="text-base font-semibold text-slate-100">
                  {project.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {project.githubLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-cyan-300 hover:underline"
                  >
                    <FiGithub className="text-xs" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
