import { FiAward, FiUsers } from "react-icons/fi";

const activities = [
  {
    title: "AWS Student Builder Club",
    role: "Core Team Member",
    description: "Active contributor to cloud workshops, student engagement, and technical builder initiatives.",
  },
  {
    title: "Career Xplore 2026",
    role: "Marketing Team Member",
    description: "Promoted career event outreach, student registration, and digital branding strategy.",
  },
  {
    title: "IEEE Computer Society Student Branch",
    role: "Active Member / Organizer",
    description: "Participated in organizing technical competitions, hackathons, and knowledge sharing sessions.",
  },
  {
    title: "PCB Master Series",
    role: "HR Crew",
    description: "Managed logistics, participant communications, and team coordination for hardware workshops.",
  },
  {
    title: "Algo Ace",
    role: "Committee Member",
    description: "Supported competitive programming contests, event management, and candidate coordination.",
  },
];

function Activities() {
  return (
    <section id="activities" className="mx-auto max-w-6xl px-6 py-16">
      <div className="reveal rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-700/50 dark:bg-[#151E33] dark:shadow-xl dark:shadow-black/30 md:p-10 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <FiAward className="text-3xl text-purple-600 dark:text-cyan-400" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
            Activities & <span className="bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">Leadership</span>
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Extracurricular involvements, student communities, and event organization roles.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((act) => (
            <div
              key={act.title}
              className="rounded-2xl border border-purple-100 bg-[#F9F8FF] p-5 shadow-xs transition hover:border-purple-300 hover:shadow-sm dark:border-slate-700/50 dark:bg-[#1A253C] dark:shadow-md dark:hover:border-cyan-400/40"
            >
              <div className="flex items-center gap-2 text-purple-700 dark:text-cyan-300">
                <FiUsers className="shrink-0 text-base" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {act.role}
                </span>
              </div>
              <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-slate-100">
                {act.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {act.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
