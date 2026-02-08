import { RevealOnScroll } from "../RevealOnScroll";
import Particles from "../../Particles";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import myImage from "./sample-proj/2.png";
import aboutData from "./Endpoint/about.json";

export const About = () => {
  const { about } = aboutData;

  const renderIcon = (icon, color) => {
    const Icon = FaIcons[icon] || SiIcons[icon];
    return <Icon className={`${color} text-lg sm:text-2xl`} />;
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-start relative bg-slate-950 pt-10 overflow-hidden px-3 sm:px-6 md:pl-44"
    >
      {/* Animated Particles Background */}
      <Particles
        className="absolute inset-0 z-0 w-full h-full"
        particleCount={2000}
        particleSpread={40}
        particleBaseSize={200}
        speed={0.25}
        moveParticlesOnHover={false}
        hoverEffectStrength={0.5}
        alphaParticles={false}
        disableRotation={true}
      />

      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 w-full max-w-7xl z-10">
          
          {/* Left Content */}
          <div className="w-full md:w-3/4 mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white text-center md:text-left">
              {about.title}
            </h2>

            <div className="rounded-xl p-4 sm:p-6 md:p-8 border border-gray-300 hover:-translate-y-1 transition-all cursor-pointer">
              <p className="text-gray-300 mb-6 text-justify text-sm sm:text-base">
                {about.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">{about.sections.frontend}</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {about.frontendSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border border-gray-700 rounded-lg hover:bg-slate-800 hover:scale-105 transition cursor-pointer"
                      >
                        {renderIcon(skill.icon, skill.color)}
                        <span className="text-white text-xs sm:text-sm md:text-base break-words">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">{about.sections.backend}</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {about.backendSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border border-gray-700 rounded-lg hover:bg-slate-800 hover:scale-105 transition cursor-pointer"
                      >
                        {renderIcon(skill.icon, skill.color)}
                        <span className="text-white text-xs sm:text-sm md:text-base break-words">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-8">
              <div className="p-4 sm:p-6 rounded-xl border border-gray-300 hover:-translate-y-1 transition-all cursor-pointer">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">{about.sections.education}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-xs sm:text-sm md:text-base">
                  {about.education.map((edu, index) => (
                    <li key={index} className="break-words">
                      <strong>{edu.title}</strong> – {edu.school}{" "}
                      {edu.year && `(${edu.year})`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Image — EXACT same layout as before */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-end ml-10 md:block mr-40 hidden mt-20">
            <img
              src={myImage}
              alt={about.imageAlt}
              className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px] rounded-lg"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};