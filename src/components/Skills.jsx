const skillItems = [
  { name: "React", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "JavaScript", level: 90 },
  { name: "C++", level: 80 },
  { name: "MySQL", level: 78 },
  { name: "HTML/CSS", level: 92 },
  { name: "Tailwind CSS", level: 86 },
  { name: "Git", level: 84 },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <div className="reveal rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-10">
        <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">Skills</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {skillItems.map((skill) => (
            <div key={skill.name} className="rounded-xl bg-slate-900/60 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-slate-100">{skill.name}</span>
                <span className="text-sm text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-700">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
