import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

/* ---------- Theme Toggle (FIXED, NOT REMOVED) ---------- */
const ThemeToggle = () => {
  const { theme, toggleTheme, primary} = useTheme();
  const isDark = theme === "dark";

  return (
      <button
  onClick={toggleTheme}
  aria-label="Toggle dark mode"
  className={`
    group relative 
    w-12 h-12 
    flex items-center justify-center
    rounded-full
    backdrop-blur-xl
    border
    transition-all duration-500
    hover:scale-110
    shadow-lg
    ${isDark
      ? "bg-white/10 border-white/20"
      : "bg-black/5 border-black/10"}
  `}
>
  {/* Glow Effect */}
  <div
    className={`
      absolute inset-0 rounded-full blur-xl opacity-40
      transition-all duration-500
    `}
    style={{
      backgroundColor: primary,
    }}
  />

  {/* Rotating Icon */}
  <div
    className={`
      relative z-10
      transition-transform duration-500
      ${isDark ? "rotate-180" : "rotate-0"}
    `}
  >
    {isDark ? (
      <Sun size={20} className="text-yellow-400" />
    ) : (
      <Moon size={20} className="text-gray-700 dark:text-gray-200" />
    )}
  </div>
</button>


  );
};
/* ------------------------------------------------------ */

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  // { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { primary } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      NAV_ITEMS.forEach((item) => {
        const section = document.querySelector(item.href);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-white dark:bg-black shadow-md z-40">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <a href="#hero" className="text-xl font-bold" style={{ color: primary }}>
          Shamnas P 

        </a>

        {/* EXISTING DESKTOP NAV (UNCHANGED) */}
        <ul className="hidden md:flex gap-6 dark:text-white">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`transition ${
                  active === item.name ? "font-semibold underline" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* 🔹 ADDED TOGGLE (DESKTOP) – nothing removed */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <button
          className="md:hidden font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* EXISTING MOBILE MENU (UNCHANGED) */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 dark:text-white shadow-md px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`block transition ${
                  active === item.name ? "font-semibold underline" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* 🔹 ADDED TOGGLE (MOBILE) – nothing removed */}
          <ThemeToggle />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
