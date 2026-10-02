import { FiBookOpen, FiBriefcase, FiCheckCircle } from "react-icons/fi";

const experienceAreas = [
  "Full-stack web development",
  "Backend development & microservices",
  "REST APIs & modern API design",
  "Authentication & authorization systems",
  "Relational & NoSQL database management",
  "Cross-platform mobile applications",
  "Real-time data streaming & Socket.IO",
  "Machine learning & computer vision projects",
];

const focusAreas = [
  "Software Engineering Internship",
  "Full-Stack Development",
  "Backend Development",
];

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="reveal rounded-3xl border border-slate-700/50 bg-[#131D31] p-8 shadow-xl shadow-black/30 md:p-10">
        <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
          I am a Computer Engineering undergraduate at the University of Sri Jayewardenepura.
          My technical work focuses on building scalable full-stack web platforms, robust REST APIs, secure backend infrastructure, and interactive software applications.
        </p>

        {/* Education & Career Focus Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Education Card */}
          <div className="rounded-2xl border border-slate-700/50 bg-[#1A253C] p-6 shadow-md">
            <div className="flex items-center gap-3 text-cyan-400">
              <FiBookOpen className="text-2xl" />
              <h3 className="text-xl font-semibold text-slate-100">Education</h3>
            </div>
            <div className="mt-4 space-y-2">
              <h4 className="text-lg font-medium text-cyan-300">
                B.Sc. (Hons) Computer Engineering
              </h4>
              <p className="text-slate-300">University of Sri Jayewardenepura</p>
              <div className="pt-2">
                <span className="inline-block rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                  Current GPA: 3.5
                </span>
              </div>
            </div>
          </div>

          {/* Career Focus Card */}
          <div className="rounded-2xl border border-slate-700/50 bg-[#1A253C] p-6 shadow-md">
            <div className="flex items-center gap-3 text-violet-400">
              <FiBriefcase className="text-2xl" />
              <h3 className="text-xl font-semibold text-slate-100">Career Focus</h3>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Actively seeking software engineering roles and internship opportunities:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-xl border border-violet-400/40 bg-violet-500/10 px-3 py-1.5 text-sm font-medium text-violet-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Practical Experience Areas */}
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-semibold text-slate-100">
            Practical Experience & Core Competencies
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {experienceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-xl border border-slate-700/40 bg-[#1A253C]/80 p-3.5 transition hover:border-cyan-400/40"
              >
                <FiCheckCircle className="shrink-0 text-cyan-400" />
                <span className="text-sm font-medium text-slate-200">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
