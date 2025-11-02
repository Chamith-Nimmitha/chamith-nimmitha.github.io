import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-slate-300 mb-8">
          I'm always open to discussing new projects, opportunities, or
          collaborations.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:ckooragoda@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center gap-2"
          >
            <Mail size={20} /> Send Email
          </a>
          <a
            href="https://linkedin.com/in/chamithnimmitha"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center gap-2"
          >
            <Linkedin size={20} /> Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
