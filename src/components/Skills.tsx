const SkillCategory: React.FC<{ category: string; skills: string[] }> = ({
  category,
  skills,
}) => {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500 transition-all duration-300">
      <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-slate-900 text-slate-300 rounded-lg text-sm border border-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Skills Section Component
const Skills = () => {
  const skills = {
    Languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    Frameworks: ["Spring Boot", "Django", "React", "Next.js"],
    Databases: ["PostgreSQL", "MySQL", "DynamoDB", "OracleDB"],
    DevOps: ["Docker", "Kubernetes", "Jenkins", "Git", "Maven", "CI/CD"],
    Cloud: ["AWS"],
    Expertise: [
      "Microservices",
      "Distributed Systems",
      "Reactive Programming",
      "REST APIs",
      "Event-Driven Architecture",
    ],
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <SkillCategory key={idx} category={category} skills={items} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
