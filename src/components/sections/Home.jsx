import { RevealOnScroll } from "../RevealOnScroll";
import Particles from "../../Particles";
import myImage from "./sample-proj/1.png";
import resume from "./sample-proj/FResume.pdf";
import homeData from "./Endpoint/home.json";

export const Home = ({ goToPage }) => { // ✅ ADD THIS - Accept goToPage prop
  const { home } = homeData;

  // ✅ ADD THIS - Handler function
  const handleKnowMeMore = () => {
    goToPage("about");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-slate-950 pt-10 overflow-hidden"
    >
      {/* Animated Particles Background */}
      <Particles
        className="absolute inset-0 z-0 w-full h-full"
        particleCount={2000}
        particleSpread={40}
        particleBaseSize={200}
        speed={0.25}
        moveParticlesOnHover={true}
        hoverEffectStrength={0.5}
        alphaParticles={false}
        disableRotation={true}
      />

      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center z-10 px-4 max-w-6xl mx-auto">
          <img
            src={myImage}
            alt={home.name}
            className="w-64 md:w-80 h-auto hidden md:block flex-shrink-0"
          />

          <div className="text-center z-10 px-4">
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white">
              {home.title}
            </h1>

            <p className="text-white text-base sm:text-lg mb-8 max-w-lg mx-auto">
              {home.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Resume Button */}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(80,61,168,1)] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(80,61,168,0.4)]"
              >
                {home.buttons[0].text}
              </a>

              {/* About Button - ✅ CHANGE THIS */}
              <button
                onClick={handleKnowMeMore}
                className="border border-gray-500/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-dark-100 cursor-pointer"
              >
                {home.buttons[1].text}
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};