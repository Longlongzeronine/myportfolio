import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import myImage from './sample-proj/p-1.png'; 
import myImage1 from './sample-proj/p-2.png';
import myImage2 from './sample-proj/p-5.png';  
import myImage3 from './sample-proj/p-4.png'; 
import myImage4 from './sample-proj/p-6.png';   
import Particles from "../../Particles"; // ✅ Particle Background

export const Projects = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false); // ✅ alert state

  // Function to handle GitHub button click
  const handleGithubClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // auto-hide after 2s
  };

  return (
    <section 
      id="projects" 
      className="relative min-h-screen flex items-center justify-center py-20 bg-white overflow-hidden"
    >
      {/* ✅ Particle Background */}
      <Particles 
        className="absolute inset-0 w-full h-full -z-10"
        particleCount={400}
        particleSpread={30}
        particleBaseSize={1000}
        sizeRandomness={0.7}
        speed={0.25}
        particleColors={['#ff0000', '#00a2ff', '#ffe600', '#00d26a', '#ff5aad']}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={true}
      />

      {/* ✅ Custom Alert */}
      {showAlert && (
        <div className="fixed top-5 right-5 bg-yellow-300 text-yellow-900 font-semibold px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
          📁 Coming Soon!
        </div>
      )}

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 pt-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-center text-black">
              Featured{" "}
              <span className="bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-800 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-5xl mx-auto pt-3">
              A collection of projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">

            {/* First Card */}
            <div className="relative rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
              <span className="absolute top-3 right-3 bg-[#ffb3b3] text-[#800202] text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
                Latest
              </span>

              <img src={myImage} alt="Research Portal" className="w-full h-50 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">UM Research Portal</h3>
                <p className="text-dark mb-4">
                  A website to efficiently manage, track, and store research titles, enabling categorization, collaboration, and easy searchable access to research projects.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Bootstrap", "HTML", "MySQL", "PHP"].map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm font-medium border transform transition-all duration-300 cursor-pointer hover:scale-105 ${
                        key % 2 === 0
                        ? 'bg-[#800202] border-[#800202] text-white hover:bg-transparent hover:text-[#800202]'
                        : 'bg-amber-500 border-amber-500 text-white hover:bg-transparent hover:text-amber-500'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setFullScreenImage(myImage)}
                    className="flex items-center justify-center gap-2 w-55 py-2 border border-[#800202] text-[#800202] rounded-md hover:bg-[#800202] hover:text-white transition cursor-pointer"
                  >
                    👁️ Full Screen
                  </button>
                  <button
                    onClick={handleGithubClick}
                    className="flex items-center justify-center gap-2 w-55 py-2 border border-amber-500 text-amber-500 rounded-md hover:bg-amber-500 hover:text-white transition cursor-pointer"
                  >
                    📁 GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
              <span className="absolute top-3 right-3 bg-indigo-100 text-indigo-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
                Latest
              </span>

              <img src={myImage3} alt="Portfolio Website" className="w-full h-50 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">My Portfolio</h3>
                <p className="text-dark mb-4">
                  A portfolio of modern, responsive web apps built with React.js, Tailwind CSS, HTML, and CSS — focused on clean, intuitive design.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Tailwind CSS", "React JS", "HTML", "CSS"].map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm font-medium border transform transition-all duration-300 cursor-pointer hover:scale-105 ${
                        key % 2 === 0
                        ? 'bg-[#020618] border-[#020618] text-white hover:bg-transparent hover:text-[#020618]'
                        : 'bg-indigo-100 border-indigo-100 text-black hover:bg-transparent hover:text-indigo-500'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setFullScreenImage(myImage3)}
                    className="flex items-center justify-center gap-2 w-55 py-2 border border-[#020618] text-[#020618] rounded-md hover:bg-[#020618] hover:text-white transition cursor-pointer"
                  >
                    👁️ Full Screen
                  </button>
                  <button
                    onClick={handleGithubClick}
                    className="flex items-center justify-center gap-2 w-55 py-2 border border-indigo-400 text-indigo-400 rounded-md hover:bg-indigo-400 hover:text-white transition cursor-pointer"
                  >
                    📁 GitHub
                  </button>
                </div>
              </div>
            </div>



            
            {/* third Card */}
            <div className="relative rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
              <span className="absolute top-3 right-3 bg-[#b9f2b2] text-[#326e25] text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
                Latest
              </span>

              <img src={myImage1} alt="Barangay Governance Management System" className="w-full h-50 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Barangay Governance Management System</h3>
                <p className="text-dark mb-4">
                  The E-BRGY system modernizes barangay administration in the Philippines by automating processes and enhancing transparency.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Bootstrap", "Hostinger", "MySQL", "PHP"].map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm font-medium border transform transition-all duration-300 cursor-pointer hover:scale-105 ${
                        key % 2 === 0
                        ? 'bg-[#68b658] border-[#68b658] text-white hover:bg-transparent hover:text-[#68b658]'
                        : 'bg-lime-200 border-lime-200 text-black hover:bg-transparent hover:text-lime-500'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setFullScreenImage(myImage1)}
                    className="flex items-center justify-center gap-2 w-55 py-2 border border-[#68b658] text-[#68b658] rounded-md hover:bg-[#68b658] hover:text-white transition cursor-pointer"
                  >
                    👁️ Full Screen
                  </button>
                  <button
                    onClick={handleGithubClick}
                    className="flex items-center justify-center gap-2 w-55 py-2 border border-lime-300 text-lime-500 rounded-md hover:bg-lime-300 hover:text-black transition cursor-pointer"
                  >
                    📁 GitHub
                  </button>
                </div>
              </div>
            </div>




            {/* Fourth Card */}
            <div className="relative rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
              <span className="absolute top-3 right-3 bg-[#aef0df] text-[#145f4a] text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
                Latest
              </span>

              <img src={myImage2} alt="PALMPC System" className="w-full h-50 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">PALMPC Coop Cashiering & Inventory System</h3>
                <p className="text-dark mb-4">
                  A cooperative cashiering and inventory system with barcode scanning and thermal printing for fast and accurate transactions.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[".NET", "Visual Basic .NET", "SQLYOG", "Github"].map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer ${
                        key % 2 === 0
                        ? 'bg-[#89dcd5] border-[#89dcd5] text-black hover:bg-transparent hover:text-[#89dcd5]'
                        : 'bg-[#248b65] border-[#248b65] text-white hover:bg-transparent hover:text-[#248b65]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setFullScreenImage(myImage2)}
                    className="flex items-center justify-center gap-2 w-55 py-2 border border-[#248b65] text-[#248b65] rounded-md hover:bg-[#248b65] hover:text-white transition cursor-pointer"
                  >
                    👁️ Full Screen
                  </button>
                  <button
                    onClick={handleGithubClick}
                    className="flex items-center justify-center gap-2 w-55 py-2 border border-[#89dcd5] text-[#89dcd5] rounded-md hover:bg-[#89dcd5] hover:text-black transition cursor-pointer"
                  >
                    📁 GitHub
                  </button>
                </div>
              </div>
            </div>





                    {/* Fifth Card */}
          <div className="relative rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(7,123,175,0.2)] transition cursor-pointer overflow-hidden">
            <span className="absolute top-3 right-3 bg-[#077baf] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
              Latest
            </span>

            <img src={myImage4} alt="Amoguis Inventory App" className="w-full h-50 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Amoguis Inventory App</h3>
              <p className="text-dark mb-4">
                This is a Flutter mobile app with Firebase backend, featuring an AI chatbot to assist users with inventory management efficiently.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Flutter", "Firebase", "Dart", "AI Chatbot"].map((tech, key) => (
                  <span
                    key={key}
                    className={`py-1 px-3 rounded-full text-sm font-medium border transform transition-all duration-300 cursor-pointer hover:scale-105 ${
                      key % 2 === 0
                        ? 'bg-[#077baf] border-[#077baf] text-white hover:bg-transparent hover:text-[#077baf]'
                        : 'bg-[#cce7f6] border-[#cce7f6] text-[#077baf] hover:bg-transparent hover:text-[#077baf]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setFullScreenImage(myImage4)}
                  className="flex items-center justify-center gap-2 w-55 py-2 border border-[#077baf] text-[#077baf] rounded-md hover:bg-[#077baf] hover:text-white transition cursor-pointer"
                >
                  👁️ Full Screen
                </button>
                <button
                  onClick={handleGithubClick}
                  className="flex items-center justify-center gap-2 w-55 py-2 border border-[#cce7f6] text-[#077baf] rounded-md hover:bg-[#cce7f6] hover:text-[#077baf] transition cursor-pointer"
                >
                  📁 GitHub
                </button>
              </div>
            </div>
          </div>






          </div>
        </div>
      </RevealOnScroll>

      {/* Fullscreen Overlay */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button 
            onClick={() => setFullScreenImage(null)} 
            className="absolute top-5 right-5 text-white text-3xl font-bold z-50 hover:text-gray-300 cursor-pointer"
          >
            &times;
          </button>
          <img src={fullScreenImage} alt="Full Screen" className="max-w-full max-h-full object-contain" />
        </div>
      )}

      {/* Slide-in animation for alert */}
      <style>
        {`
          @keyframes slide-in {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease forwards;
          }
        `}
      </style>
    </section>
  );
};
