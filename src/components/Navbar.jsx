import { useEffect, useState } from "react";

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
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center justify-center bg-white rounded-2xl px-8 py-3 shadow-md border border-gray-200">
        
        {/* Desktop Nav (hidden on small screens) */}
        <ul className="hidden md:flex items-center space-x-10 text-base font-mono text-black">
          {[
            { href: "#home", label: "Home" },
            { href: "#projects", label: "Projects" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleLinkClick(href)}
                className={`relative transition duration-300 ${
                  activeLink === href
                    ? "text-[#503DA8] font-semibold"
                    : "text-gray-500 hover:text-[#503DA8]"
                }`}
              >
                {label}
                {activeLink === href && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#503DA8] rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon (only visible on small screens) */}
        <div
          className="w-7 h-5 relative cursor-pointer z-50 text-black md:hidden ml-4"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>
      </div>
    </nav>
  );
};
