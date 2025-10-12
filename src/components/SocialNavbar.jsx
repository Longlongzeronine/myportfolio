import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const SocialNavbar = () => {
  return (
    <div
      className="hidden lg:flex fixed top-1/2 right-6 -translate-y-1/2 z-50 flex-col items-center space-y-4
                 bg-slate-950/90 border border-white/30 rounded-2xl backdrop-blur-md 
                 shadow-[0_0_20px_rgba(255,255,255,0.1)] px-2 py-4"
    >
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-xl bg-slate-950 hover:bg-slate-800 
                   border border-white/40 transition-all duration-300"
      >
        <FaLinkedinIn className="text-[#0077B5] text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#0077B5] transition-transform" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-xl bg-slate-950 hover:bg-slate-800 
                   border border-white/40 transition-all duration-300"
      >
        <FaGithub className="text-white text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_white] transition-transform" />
      </a>

      {/* Email */}
      <a
        href="mailto:your@email.com"
        className="group p-3 rounded-xl bg-slate-950 hover:bg-slate-800 
                   border border-white/40 transition-all duration-300"
      >
        <FaEnvelope className="text-pink-400 text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#ec4899] transition-transform" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-xl bg-slate-950 hover:bg-slate-800 
                   border border-white/40 transition-all duration-300"
      >
        <FaWhatsapp className="text-green-400 text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#22c55e] transition-transform" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-xl bg-slate-950 hover:bg-slate-800 
                   border border-white/40 transition-all duration-300"
      >
        <FaInstagram className="text-purple-400 text-xl group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#a855f7] transition-transform" />
      </a>
    </div>
  );
};
