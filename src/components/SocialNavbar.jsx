import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export const SocialNavbar = () => {
  return (
    <div
      className="hidden lg:flex fixed top-1/2 right-6 -translate-y-1/2 z-50 flex-col items-center space-y-4
                 bg-white border border-slate-950 rounded-2xl backdrop-blur-md 
                 shadow-[0_0_20px_rgba(2,6,23,0.1)] px-2 py-4"
    >
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-xl bg-white hover:bg-gray-100 
                   border border-slate-950 transition-all duration-300"
      >
        <FaLinkedinIn className="text-slate-950 text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#020617] transition-transform" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-xl bg-white hover:bg-gray-100 
                   border border-slate-950 transition-all duration-300"
      >
        <FaGithub className="text-slate-950 text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#020617] transition-transform" />
      </a>

      {/* Email */}
      <a
        href="mailto:your@email.com"
        className="group p-3 rounded-xl bg-white hover:bg-gray-100 
                   border border-slate-950 transition-all duration-300"
      >
        <FaEnvelope className="text-slate-950 text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#020617] transition-transform" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-xl bg-white hover:bg-gray-100 
                   border border-slate-950 transition-all duration-300"
      >
        <FaWhatsapp className="text-slate-950 text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#020617] transition-transform" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-xl bg-white hover:bg-gray-100 
                   border border-slate-950 transition-all duration-300"
      >
        <FaInstagram className="text-slate-950 text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#020617] transition-transform" />
      </a>
    </div>
  );
};
