import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <div 
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        className="flex items-center justify-between md:justify-center bg-white/95 backdrop-blur-sm px-6 py-3 shadow-md border border-gray-200 rounded-xl"
      >
        
        {/* Desktop Nav - Increased spacing here (space-x-12) */}
        <ul className="hidden md:flex items-center space-x-12 text-base font-medium">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setActiveLink(href)}
                className={`relative transition-colors duration-300 ${
                  activeLink === href
                    ? "text-[#503DA8] font-bold"
                    : "text-gray-600 hover:text-[#503DA8]"
                }`}
              >
                {label}
                {activeLink === href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#503DA8] rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="w-6 h-5 flex flex-col justify-between z-50 md:hidden focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span 
            className={`h-0.5 w-full bg-black rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`} 
          />
          <span 
            className={`h-0.5 w-full bg-black rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`} 
          />
          <span 
            className={`h-0.5 w-full bg-black rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`} 
          />
        </button>
      </div>
    </nav>
  );
};