import { RevealOnScroll } from "../RevealOnScroll";
import Particles from "../../Particles"; // adjust path if needed
import myImage from './sample-proj/1.png';
import resume from './sample-proj/resume.pdf';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-slate-950 pt-10 overflow-hidden"
    >
      {/* Animated Particles Background */}
      <Particles 
        className="absolute inset-0 z-0 w-full h-full"
        particleCount={2000}             // increase particle count
        particleSpread={40}             // spread them out more
        particleBaseSize={200}          // bigger particles
        speed={0.25}                    // faster movement
        moveParticlesOnHover={true}     // follow mouse
        hoverEffectStrength={0.5}       // how strongly particles move with mouse
        alphaParticles={false}          // opaque particles
        disableRotation={true}
      />

      <RevealOnScroll>
        <div className="flex items-center z-10 px-4 gap-4">
          <img
            src={myImage}
            alt="Francis Amoguis"
            className="w-1/3 h-auto mt-10 hidden md:block"
          />
          <div className="text-center z-10 px-4">
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white">
              Hi, I'm Francis Amoguis
            </h1>

            <p className="text-white text-base sm:text-lg mb-8 max-w-lg mx-auto">
              I am an aspiring developer eager to build web applications and apply my skills in server-side and front-end development in an entry-level role.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(80,61,168,1)] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(80,61,168,0.4)]"
              >
                View Resume
              </a>

              <a
                href="#about"
                className="border border-gray-500/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-dark-100"
              >
                Know me more
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
