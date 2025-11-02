const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
      <h3 className="text-2xl font-bold text-cyan-400 mb-3">{project.name}</h3>
      <p className="text-slate-300 mb-4">{project.description}</p>
      <ul className="space-y-2 mb-4">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-slate-400 text-sm flex items-start">
            <span className="text-cyan-400 mr-2">•</span>
            {highlight}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-slate-900 text-cyan-400 rounded-full text-xs border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

// Projects Section Component
const Projects = () => {
  const projects: ProjectItem[] = [
    {
      name: "MStack",
      description:
        "Modular Java framework for distributed microservices with service discovery, dynamic load balancing, and event-driven orchestration",
      highlights: [
        "Reduced boilerplate by 90% via dynamic SQL generation",
        "Integrated event-stream pipelines for async workflows",
        "Built-in authentication and authorization system",
        "Real-time diagnostics cutting debugging time by 50%",
      ],
      tech: ["Java", "Reactive Programming", "RSocket", "Scalecube", "JPA"],
    },
    {
      name: "Traveelia",
      description:
        "Travel-sharing web app with advanced text editing and destination discovery",
      highlights: [
        "Improved page performance by 40% through Next.js optimization",
        "Integrated Lexical for rich text editing",
        "Image compression and lazy loading for enhanced UX",
      ],
      tech: ["NextJS", "MySQL", "AWS", "Lexical"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
