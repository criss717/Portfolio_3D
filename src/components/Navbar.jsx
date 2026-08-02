import { navLinks, CV_URL } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logoCris } from "../assets";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="w-3 h-3">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeSwitch = ({ isDark, setIsDark }) => (
  <button
    onClick={() => setIsDark(!isDark)}
    aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    className="relative w-[46px] h-[26px] rounded-full bg-[#d2d2d7] dark:bg-[#48484a] transition-colors duration-300 shrink-0"
  >
    <span
      className={`absolute top-1/2 -translate-y-1/2 left-0.5 w-5 h-5 rounded-full bg-white shadow-md shadow-black/10 flex items-center justify-center transition-transform duration-300 ease-out ${
        isDark ? "translate-x-5" : ""
      }`}
    >
      {isDark ? (
        <span className="text-ink">
          <MoonIcon />
        </span>
      ) : (
        <span className="text-[rgb(65,89,118)]">
          <SunIcon />
        </span>
      )}
    </span>
  </button>
);

const Navbar = ({ isDark, setIsDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SectionLink = ({ link, className, onClick }) => {
    if (isHome) {
      return (
        <a href={`#${link.id}`} className={className} onClick={onClick}>
          {link.title}
        </a>
      );
    }
    return (
      <Link to={`/#${link.id}`} className={className} onClick={onClick}>
        {link.title}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[rgba(245,245,247,0.8)] dark:bg-[rgba(0,0,0,0.8)] backdrop-blur-md border-[#e8e8ed] dark:border-[#333333]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2.5 text-[18px] font-bold tracking-tight text-ink dark:text-snow"
          >
            <img
              src={logoCris}
              alt="Cristian Guzmán"
              className="w-12 h-12 rounded-full object-cover"
            />
            Cristian Guzmán
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <SectionLink
                  link={link}
                  className="text-[12px] font-medium tracking-tight text-ink dark:text-snow hover:opacity-70 transition-opacity"
                />
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
            <a
              href={CV_URL}
              download="CV_Cristian_Guzman.pdf"
              className="bg-[rgb(65,89,118)] text-white text-[12px] font-medium tracking-tight px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Descargar CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="w-5 h-4 relative">
              <span
                className={`absolute left-0 top-0 w-full h-[2px] rounded-full bg-ink dark:bg-snow transition-transform duration-300 ease-out ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 w-full h-[2px] rounded-full bg-ink dark:bg-snow -translate-y-1/2 transition-opacity duration-300 ease-out ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] rounded-full bg-ink dark:bg-snow transition-transform duration-300 ease-out ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-14 right-4 left-4 sm:left-auto sm:w-72 bg-white dark:bg-[#1d1d1f] border border-[#e8e8ed] dark:border-[#333333] rounded-[20px] px-4 py-4 shadow-lg shadow-black/5 dark:shadow-black/40"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <SectionLink
                  key={link.id}
                  link={link}
                  onClick={() => setMenuOpen(false)}
                  className="text-[15px] font-medium tracking-tight text-ink dark:text-snow px-4 py-2.5 rounded-full hover:bg-[#f5f5f7] dark:hover:bg-black transition-colors"
                />
              ))}
            </nav>
            <div className="mt-2 pt-4 border-t border-[#e8e8ed] dark:border-[#333333] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
                <span className="text-ink dark:text-snow text-[15px] font-medium tracking-tight">
                  {isDark ? "Modo Oscuro" : "Modo Claro"}
                </span>
              </div>
              <a
                href={CV_URL}
                download="CV_Cristian_Guzman.pdf"
                className="bg-[rgb(65,89,118)] text-white text-[14px] font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
