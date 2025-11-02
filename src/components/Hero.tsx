import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl text-center">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Chamith Nimmitha
          </h2>
          <p className="text-3xl text-slate-300 mb-6">
            Senior Software Engineer
          </p>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Building scalable distributed systems and cloud-native applications
            with expertise in Java, microservices, and reactive programming
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/chamithnimmitha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/chamithnimmitha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="mailto:ckooragoda@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors duration-200"
          >
            <Mail size={20} /> Email
          </a>
        </div>

        <div className="flex justify-center gap-6 text-slate-400 text-sm">
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Galle, Sri Lanka
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} /> +94 768008600
          </span>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
