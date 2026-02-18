import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/svcelogo2.jpg";
import logo2 from "../assets/ieeelogo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Execom', path: '/execom' },
    { name: 'Events', path: '/events' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Magazine', path: '/magazine' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 shadow-2xl' 
        : 'bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex flex-row items-center gap-2 hover:opacity-80 transition-opacity duration-300">
          <img src={logo1} alt="SVC Logo" className="h-5 w-auto sm:h-10 hover:scale-110 transition-transform duration-300" />
          <img src={logo2} alt="IEEE Logo" className="h-5 w-auto sm:h-10 hover:scale-110 transition-transform duration-300" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className="relative px-3 py-2 text-white text-sm font-medium group"
              >
                {link.name}
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-8 text-white hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 border-t border-blue-800">
          <ul className="space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="block px-3 py-3 text-white hover:text-cyan-400 hover:bg-blue-900/50 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
