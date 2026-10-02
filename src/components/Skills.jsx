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
      <div className="reveal rounded-3xl border border-slate-700/50 bg-[#151E33] p-8 shadow-xl shadow-black/30 md:p-10">
        <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Technologies and tools utilized across web, backend, mobile, database, and system development projects.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-700/50 bg-[#1C2740] p-5 shadow-md transition hover:border-cyan-400/40"
            >
              <h3 className="mb-4 text-base font-semibold text-cyan-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
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
