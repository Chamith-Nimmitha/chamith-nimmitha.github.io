const Navigation: React.FC<{
  isScrolled: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}> = ({ isScrolled, activeSection, setActiveSection }) => {
  const navItems = ["Home", "Experience", "Projects", "Skills", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            CN
          </h1>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-200"
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
