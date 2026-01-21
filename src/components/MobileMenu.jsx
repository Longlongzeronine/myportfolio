import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen, goToPage, currentPage }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <button
        onClick={() => goToPage("home")}
        className={`text-2xl font-semibold my-4 transform transition-transform duration-300 bg-transparent border-none cursor-pointer
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                    ${currentPage === "home" ? "text-blue-400" : "text-white"}
            `}
      >
        Home
      </button>
      <button
        onClick={() => goToPage("about")}
        className={`text-2xl font-semibold my-4 transform transition-transform duration-300 bg-transparent border-none cursor-pointer
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            ${currentPage === "about" ? "text-blue-400" : "text-white"}
    `}
      >
        About
      </button>
      <button
        onClick={() => goToPage("projects")}
        className={`text-2xl font-semibold my-4 transform transition-transform duration-300 bg-transparent border-none cursor-pointer
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            ${currentPage === "projects" ? "text-blue-400" : "text-white"}
    `}
      >
        Projects
      </button>
      <button
        onClick={() => goToPage("contact")}
        className={`text-2xl font-semibold my-4 transform transition-transform duration-300 bg-transparent border-none cursor-pointer
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            ${currentPage === "contact" ? "text-blue-400" : "text-white"}
    `}
      >
        Contact
      </button>
    </div>
  );
};