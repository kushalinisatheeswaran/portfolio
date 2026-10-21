const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "Expo", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "Express", "Flask", "FastAPI", "Next.js Server Actions"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase Firestore"],
  },
  {
    title: "Authentication",
    skills: ["JWT", "NextAuth / Auth.js", "Better Auth", "Firebase Authentication", "Spring Security"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "Prisma", "Mongoose"],
  },
  {
    title: "Libraries & Protocols",
    skills: ["REST APIs", "Socket.IO", "Google Maps API", "OpenCV", "scikit-learn"],
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <div className="reveal rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-700/50 dark:bg-[#151E33] dark:shadow-xl dark:shadow-black/30 md:p-10 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
          Technical <span className="bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-cyan-400 dark:to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Technologies and tools utilized across web, backend, mobile, database, and system development projects.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-purple-100 bg-[#F9F8FF] p-5 shadow-xs transition hover:border-purple-300 hover:shadow-sm dark:border-slate-700/50 dark:bg-[#1C2740] dark:shadow-md dark:hover:border-cyan-400/40"
            >
              <h3 className="mb-4 text-base font-semibold text-purple-700 dark:text-cyan-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-purple-200/80 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-800 dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
