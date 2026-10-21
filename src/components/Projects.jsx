import { FiActivity, FiCpu, FiExternalLink, FiFolder, FiGithub, FiLayers } from "react-icons/fi";

const fullStackProjects = [
  {
    title: "Travel Planner",
    description:
      "A full-stack travel planner for organizing trips, destinations and itineraries. Users can authenticate using Google or GitHub, manage trips, upload cover images, explore destinations through Google Maps and reorder itinerary stops.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Google Maps", "UploadThing"],
    github: "https://github.com/kushalinisatheeswaran/Trip-Planner-App",
    live: "https://trip-planner-app-zeta.vercel.app",
    image: "/projects/travel-planner.png",
    badge: { text: "Full Stack", color: "bg-cyan-50 text-cyan-800 border-cyan-200 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/40" },
  },
  {
    title: "Job Application Tracker",
    description:
      "A full-stack job application management platform with a personal Kanban board. Users can create applications, record job details and move applications between recruitment stages using drag-and-drop.",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Mongoose", "Better Auth", "dnd-kit"],
    github: "https://github.com/kushalinisatheeswaran/Job-Application-Tracker",
    live: "https://job-application-tracker-green-iota.vercel.app",
    image: "/projects/job-tracker.png",
    badge: { text: "Full Stack", color: "bg-purple-50 text-purple-800 border-purple-200 dark:bg-violet-500/20 dark:text-violet-300 dark:border-violet-500/40" },
  },
  {
    title: "E-Commerce Application",
    description:
      "A full-stack e-commerce application with a Next.js frontend and Spring Boot REST API. Customers can browse products, manage their cart, place orders and review order history, while administrators can manage products and inventory.",
    tech: ["Next.js", "React", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "JWT", "JPA"],
    github: "https://github.com/kushalinisatheeswaran/ecommerce-app",
    live: "https://ecommerce-beta-olive-19.vercel.app",
    liveLabel: "Frontend Live",
    image: "/projects/ecommerce.png",
    badge: { text: "Full Stack", color: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/40" },
  },
  {
    title: "Task Management Application",
    description:
      "A collaborative task management application for organizing projects, assigning tasks, tracking status, managing comments and visualizing progress.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Firebase", "Firestore", "Recharts"],
    github: "https://github.com/kushalinisatheeswaran/TaskManagemnetApp",
    image: null,
    badge: { text: "Collaborative App", color: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200 dark:bg-fuchsia-500/20 dark:text-fuchsia-300 dark:border-fuchsia-500/40" },
  },
];

const systemsProjects = [
  {
    title: "IntelliGate System",
    subtitle: "Collaborative University Engineering Project",
    description:
      "A university gate automation prototype combining number plate recognition, student identification, backend verification, access logging and mobile monitoring.",
    contribution:
      "My contribution: Backend and database development, including models, routes, database migrations and administrative functionality.",
    tech: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "React Native", "Expo", "Socket.IO", "OpenCV"],
    github: "https://github.com/kushalinisatheeswaran/Intelligate-System",
    image: "/projects/intelligate.png",
    badge: { text: "Engineering Prototype", color: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/40" },
  },
  {
    title: "Bus Tracker Backend",
    subtitle: "Public Transit API & Route Logic",
    description:
      "Backend API logic and route management services for public transit tracking. Handles spatial route calculations and real-time schedule dispatching.",
    tech: ["Node.js", "Express", "MySQL", "REST API"],
    github: "https://github.com/kushalinisatheeswaran",
    image: null,
    badge: { text: "Backend Architecture", color: "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/40" },
  },
];

const mlProjects = [
  {
    title: "PharmaShortage Predictor / MedCascade",
    subtitle: "Experimental Machine Learning Research Project",
    description:
      "An experimental full-stack application for exploring medicine shortage risk scores and hypothetical cascade scenarios through machine learning algorithms and graph-based analysis.",
    tech: ["Python", "FastAPI", "scikit-learn", "Next.js", "TypeScript", "pandas", "NetworkX"],
    github: "https://github.com/kushalinisatheeswaran/pharma-shortage-predictor",
    image: null,
    badge: { text: "Experimental ML", color: "bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-500/25 dark:text-purple-300 dark:border-purple-500/50" },
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
    description: "A classic Flappy Bird clone built in C++ with custom graphical rendering.",
    tech: ["C++"],
    githubLinks: [
      { label: "GitHub Repo", url: "https://github.com/kushalinisatheeswaran/Flappybird_game" },
    ],
  },
  {
    title: "To-Do List",
    description: "Clean interactive task tracking web application with state management.",
    tech: ["React", "JavaScript", "HTML/CSS"],
    githubLinks: [
      { label: "GitHub Repo", url: "https://github.com/kushalinisatheeswaran" },
    ],
  },
  {
    title: "Dice Roll Game",
    description: "An interactive dice rolling application built in C++.",
    tech: ["C++"],
    githubLinks: [
      { label: "GitHub Repo", url: "https://github.com/kushalinisatheeswaran" },
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      
      {/* Featured Projects Header */}
      <div className="reveal space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-semibold text-purple-700 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300">
          <FiFolder className="text-purple-600 dark:text-purple-400" /> Portfolio Showcase
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Featured <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-fuchsia-600 dark:from-cyan-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-300">
          Full-stack web applications, systems engineering prototypes, and machine learning software solutions.
        </p>
      </div>

      {/* CATEGORY A: Full-Stack Projects */}
      <div className="reveal space-y-6">
        <div className="flex items-center justify-between border-b border-purple-100 dark:border-cyan-500/20 pb-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-2 text-cyan-700 dark:border-cyan-400/40 dark:bg-cyan-500/10 dark:text-cyan-300">
              <FiLayers className="text-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Full-Stack Projects</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Complete web and backend architectures with responsive UI and authentication</p>
            </div>
          </div>
          <span className="hidden rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800 dark:border-cyan-500/40 dark:bg-cyan-500/20 dark:text-cyan-300 sm:inline-block">
            {fullStackProjects.length} Projects
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {fullStackProjects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:shadow-xl hover:shadow-purple-500/5 dark:border-slate-700/60 dark:bg-[#151E33] dark:shadow-lg dark:hover:border-cyan-400/80 dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
            >
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              
              <div>
                {/* Verified Screenshot Image */}
                {project.image && (
                  <div className="relative mb-5 overflow-hidden rounded-xl border border-slate-200 aspect-[16/9] bg-slate-100 shadow-inner dark:border-slate-700/80 dark:bg-[#0E1526]">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-3">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${project.badge.color}`}>
                    {project.badge.text}
                  </span>
                </div>

                <h4 className="mt-3 text-xl font-bold text-slate-900 group-hover:text-purple-700 transition dark:text-slate-100 dark:group-hover:text-cyan-300">
                  {project.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-200/80 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-cyan-500/30 dark:bg-[#111827] dark:text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-800 transition hover:border-purple-300 hover:bg-slate-100 hover:text-purple-700 dark:border-slate-700/60 dark:bg-[#1E2942] dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:bg-[#253352] dark:hover:text-cyan-300"
                >
                  <FiGithub className="text-sm" />
                  GitHub Repo
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:from-cyan-400 hover:to-purple-500 dark:bg-none dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                  >
                    <FiExternalLink className="text-sm" />
                    {project.liveLabel || "Live Demo"}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CATEGORY B: Systems / Engineering Projects */}
      <div className="reveal space-y-6">
        <div className="flex items-center justify-between border-b border-purple-100 dark:border-sky-500/20 pb-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-2 text-sky-700 dark:border-sky-400/40 dark:bg-sky-500/10 dark:text-sky-300">
              <FiCpu className="text-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Systems & Engineering Projects</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Backend systems, transit services, and collaborative university hardware-software integrations</p>
            </div>
          </div>
          <span className="hidden rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800 dark:border-sky-500/40 dark:bg-sky-500/20 dark:text-sky-300 sm:inline-block">
            {systemsProjects.length} Projects
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {systemsProjects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl hover:shadow-purple-500/5 dark:border-slate-700/60 dark:bg-[#151E33] dark:shadow-lg dark:hover:border-sky-400/80 dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.18)]"
            >
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              
              <div>
                {/* Verified Screenshot Image */}
                {project.image && (
                  <div className="relative mb-5 overflow-hidden rounded-xl border border-slate-200 aspect-[16/9] bg-slate-100 shadow-inner dark:border-slate-700/80 dark:bg-[#0E1526]">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-3">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${project.badge.color}`}>
                    {project.badge.text}
                  </span>
                </div>

                <h4 className="mt-3 text-xl font-bold text-slate-900 group-hover:text-sky-700 transition dark:text-slate-100 dark:group-hover:text-sky-300">
                  {project.title}
                </h4>
                {project.subtitle && (
                  <p className="mt-1 text-xs font-medium text-sky-700 dark:text-sky-300">
                    {project.subtitle}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                {project.contribution && (
                  <p className="mt-3 text-xs leading-relaxed text-sky-900 italic bg-sky-50/70 p-3 rounded-xl border border-sky-200 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-500/30">
                    {project.contribution}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-200/80 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-sky-500/30 dark:bg-[#111827] dark:text-sky-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-800 transition hover:border-sky-300 hover:bg-slate-100 hover:text-sky-700 dark:border-sky-400/40 dark:bg-sky-500/10 dark:text-sky-200 dark:hover:border-sky-400 dark:hover:bg-sky-500/20 dark:hover:text-white"
                >
                  <FiGithub className="text-sm" />
                  GitHub Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CATEGORY C: Experimental ML Projects */}
      <div className="reveal space-y-6">
        <div className="flex items-center justify-between border-b border-purple-100 dark:border-purple-500/20 pb-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-2 text-purple-700 dark:border-purple-400/40 dark:bg-purple-500/10 dark:text-purple-300">
              <FiActivity className="text-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Experimental ML Projects</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Data science research, risk scoring models, and graph-based predictive algorithms</p>
            </div>
          </div>
          <span className="hidden rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-800 dark:border-purple-500/40 dark:bg-purple-500/20 dark:text-purple-300 sm:inline-block">
            Research & AI
          </span>
        </div>

        <div className="grid gap-6">
          {mlProjects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-purple-200/80 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/5 dark:border-purple-500/40 dark:bg-[#1B253A] dark:shadow-lg dark:hover:border-purple-400/80 dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]"
            >
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${project.badge.color}`}>
                    {project.badge.text}
                  </span>
                  <span className="rounded-full border border-purple-300 bg-purple-100 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-purple-800 dark:border-purple-400/50 dark:bg-purple-500/20 dark:text-purple-200">
                    Experimental
                  </span>
                </div>

                <h4 className="mt-3 text-xl font-bold text-slate-900 group-hover:text-purple-700 transition dark:text-slate-100 dark:group-hover:text-purple-300">
                  {project.title}
                </h4>
                {project.subtitle && (
                  <p className="mt-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                    {project.subtitle}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-purple-200/80 bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-800 dark:border-purple-500/30 dark:bg-[#111827] dark:text-purple-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-purple-100 dark:border-purple-500/20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-semibold text-purple-800 transition hover:bg-purple-100 hover:border-purple-300 dark:border-purple-400/40 dark:bg-purple-500/10 dark:text-purple-200 dark:hover:bg-purple-500/20 dark:hover:border-purple-400 dark:hover:text-white"
                >
                  <FiGithub className="text-sm" />
                  GitHub Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CATEGORY D: Other Projects Section */}
      <div className="reveal pt-8 border-t border-purple-100 dark:border-slate-800 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Other <span className="bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Utility web apps, game prototypes, and custom C++ algorithmic tools.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md dark:border-slate-700/50 dark:bg-[#172033] dark:shadow-md dark:hover:border-purple-400/50 dark:hover:bg-[#1F2C45]"
            >
              <div>
                <h4 className="text-base font-semibold text-slate-900 group-hover:text-purple-700 transition dark:text-slate-100 dark:group-hover:text-purple-300">
                  {project.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-[#111827] dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-700/50">
                {project.githubLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 transition hover:text-cyan-600 hover:underline dark:text-cyan-400 dark:hover:text-purple-300"
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
