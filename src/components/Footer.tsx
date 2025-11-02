const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto text-center text-slate-400">
        <p>
          © {new Date().getFullYear()} Chamith Nimmitha — Built with React &
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
};
export default Footer;
