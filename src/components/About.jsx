function About() {
  const skills = {
    Frontend: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
    Backend: ["Node.js", "Express", "MySQL"],
    Languages: ["C++", "JavaScript"],
    Tools: ["Git", "GitHub", "VS Code"],
  };

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="reveal rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-10">
        <h2 className="text-3xl font-bold text-slate-100 md:text-4xl">About</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          I am a developer who enjoys building real-world applications and
          immersive games. I focus on creating practical full-stack web
          experiences with modern JavaScript tools while continuing my C++ game
          development journey.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <h3 className="mb-3 text-lg font-semibold text-cyan-300">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"
                  >
                    {item}
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

export default About;
