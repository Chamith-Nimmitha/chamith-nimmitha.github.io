const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "RandomDelta",
      role: "Founder / Senior Software Engineer",
      period: "Oct 2023 - Present",
      location: "Galle, Sri Lanka",
      achievements: [
        "Founded and led software startup delivering scalable cloud-based applications",
        "Designed plug-and-play Java microservice framework reducing coding tasks by 90%",
        "Built ReactJS frontend with JCEF for unified web/desktop deployment",
        "Led development of Traveelia travel-sharing platform",
      ],
      tech: ["Java", "Scalecube", "RSocket", "ReactJS", "NextJS", "JCEF"],
    },
    {
      company: "Enactor",
      role: "Software Engineer",
      period: "Oct 2022 - Oct 2023",
      location: "Galle, Sri Lanka",
      achievements: [
        "Optimized retail systems, increasing performance by 300% with Zookeeper architecture",
        "Improved scalability through distributed workload management",
        "Led migration from Docker Swarm to Kubernetes",
        "Delivered scalable production-ready services",
      ],
      tech: ["Java", "Zookeeper", "Docker", "Kubernetes"],
    },
    {
      company: "Persistent Systems Lanka",
      role: "Software Engineer",
      period: "Apr 2022 - Aug 2022",
      location: "Colombo, Sri Lanka",
      achievements: [
        "Increased message throughput from 700 to 3,200 messages/second",
        "Developed comprehensive stress-testing suite",
        "Pioneered OracleDB to PostgreSQL migration, automating 70% of process",
      ],
      tech: ["Java", "SwiftMQ", "OracleDB", "PostgreSQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({
  experience,
}) => {
  return (
    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-cyan-400">
            {experience.role}
          </h3>
          <p className="text-xl text-slate-300">{experience.company}</p>
        </div>
        <div className="text-right">
          <p className="text-slate-400">{experience.period}</p>
          <p className="text-slate-500 text-sm">{experience.location}</p>
        </div>
      </div>
      <ul className="space-y-2 mb-4">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="text-slate-300 flex items-start">
            <span className="text-cyan-400 mr-2">▹</span>
            {achievement}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-slate-900 text-cyan-400 rounded-full text-sm border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;
