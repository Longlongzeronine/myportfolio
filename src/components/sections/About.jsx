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
      className="min-h-screen flex items-center justify-start relative pt-10 overflow-hidden px-3 sm:px-6 md:pl-44"
      style={{ backgroundColor: '#020617' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Particles />
      </div>

      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 w-full max-w-7xl z-10">

          {/* Left Content */}
          <div className="w-full md:w-3/4 mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center md:text-left" style={{ color: '#f1f5f9' }}>
              {about.title}
            </h2>

            {/* Skills Card */}
            <div
              className="rounded-xl p-4 sm:p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{
                border: '1px solid rgba(71,85,105,0.4)',
                backgroundColor: 'rgba(15,23,42,0.45)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.7), 0 20px 60px rgba(71,85,105,0.15), inset 0 1px 0 rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)';
              }}
            >
              <p className="mb-6 text-justify text-sm sm:text-base leading-relaxed" style={{ color: '#cbd5e1' }}>
                {about.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#f1f5f9' }}>{about.sections.frontend}</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {about.frontendSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:scale-105 transition-all duration-200 cursor-pointer"
                        style={{
                          border: '1px solid rgba(71,85,105,0.4)',
                          backgroundColor: 'rgba(30,41,59,0.5)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(51,65,85,0.6)';
                          e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)';
                          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.5)';
                          e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)';
                          e.currentTarget.style.boxShadow = '';
                        }}
                      >
                        {renderIcon(skill.icon, skill.color)}
                        <span className="text-xs sm:text-sm md:text-base break-words" style={{ color: '#e2e8f0' }}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#f1f5f9' }}>{about.sections.backend}</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {about.backendSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:scale-105 transition-all duration-200 cursor-pointer"
                        style={{
                          border: '1px solid rgba(71,85,105,0.4)',
                          backgroundColor: 'rgba(30,41,59,0.5)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(51,65,85,0.6)';
                          e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)';
                          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.5)';
                          e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)';
                          e.currentTarget.style.boxShadow = '';
                        }}
                      >
                        {renderIcon(skill.icon, skill.color)}
                        <span className="text-xs sm:text-sm md:text-base break-words" style={{ color: '#e2e8f0' }}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="mt-8">
              <div
                className="p-4 sm:p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{
                  border: '1px solid rgba(71,85,105,0.4)',
                  backgroundColor: 'rgba(15,23,42,0.45)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.7), 0 20px 60px rgba(71,85,105,0.15), inset 0 1px 0 rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)';
                }}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#f1f5f9' }}>{about.sections.education}</h3>
                <ul className="list-disc list-inside space-y-3 text-xs sm:text-sm md:text-base" style={{ color: '#cbd5e1' }}>
                  {about.education.map((edu, index) => (
                    <li key={index} className="break-words leading-relaxed">
                      <strong style={{ color: '#e2e8f0' }}>{edu.title}</strong>{' '}
                      <span style={{ color: '#94a3b8' }}>–</span>{' '}
                      {edu.school}{' '}
                      {edu.year && <span style={{ color: '#64748b' }}>({edu.year})</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Image - Hidden on mobile and tablet, visible on lg screens and up */}
          <div className="hidden lg:flex w-full md:w-1/4 justify-center md:justify-end ml-10 mr-40 mt-20">
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