import React from "react";
import {
  FaEnvelope,
  FaCakeCandles,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import profileImage from "../assets/profile.png";

export const SocialNavbar = () => {
  const socialLinks = [
    { Icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
    { Icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { Icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
    { Icon: FaGithub, url: "https://github.com", label: "GitHub" },
    { Icon: FaLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div
      id="social-navbar"
      className="hidden lg:block fixed top-1/2 right-8 -translate-y-1/2 z-50 w-80
      bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl p-6 backdrop-blur-sm"
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1 flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          <div className="relative w-full h-full bg-slate-900 rounded-3xl p-3 flex items-center justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-6">
        <h2 className="text-white text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Francis Jay
        </h2>
        <p className="text-slate-400 text-sm font-medium">
          Full Stack Developer
        </p>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6"></div>

      {/* Contact Info */}
      <div className="space-y-4 mb-6">
        {/* Email */}
        <div className="flex items-start gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-blue-500 transition-all duration-300">
            <FaEnvelope className="text-blue-400 text-lg group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1 font-semibold">
              Email
            </p>
            <p className="text-slate-200 text-sm break-all">
              f55876061@gmail.com
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-green-500 transition-all duration-300">
            <FaPhone className="text-green-400 text-lg group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1 font-semibold">
              Phone
            </p>
            <p className="text-slate-200 text-sm">
              +639079254972
            </p>
          </div>
        </div>

        {/* Birthday */}
        <div className="flex items-start gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-purple-500 transition-all duration-300">
            <FaCakeCandles className="text-purple-400 text-lg group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1 font-semibold">
              Birthday
            </p>
            <p className="text-slate-200 text-sm">
              May 9, 2002
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-red-500 transition-all duration-300">
            <FaLocationDot className="text-red-400 text-lg group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <p className="text-slate-500 text-xs uppercase mb-1 font-semibold">
              Location
            </p>
            <p className="text-slate-200 text-sm">
              Pangi Maco Davao De Oro
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6"></div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-3">
        {socialLinks.map(({ Icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center
            border border-slate-800 hover:border-blue-500 transition-all duration-300
            hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 group"
          >
            <Icon className="text-slate-400 text-lg group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
          </a>
        ))}
      </div>

      <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
    </div>
  );
};
