import { RevealOnScroll } from "../RevealOnScroll";
import myImage from './sample-proj/p-1.png'; 
import myImage1 from './sample-proj/p-2.png';
import myImage2 from './sample-proj/p-5.png';  
import myImage3 from './sample-proj/p-4.png';  
import Particles from "../../Particles"; // ✅ Particle Background

export const Projects = () => {
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
                particleColors={['#ff0000', '#00a2ff', '#ffe600', '#00d26a', '#ff5aad']} // 🎨 Ballpit colors
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={true}
            />

            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 pt-4 relative z-10">
                    <h1 className="text-3xl font-bold mb-15 text-black text-center">
                        Featured Projects
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                        
                    {/* First Card */}
                    <div className="rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
                        <img src={myImage} alt="Research Portal" className="w-full h-50 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">UM Research Portal</h3>
                            <p className="text-dark mb-4">
                                A website to efficiently manage, track, and store research titles, enabling categorization, collaboration, and easy searchable access to research projects.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
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
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
                        <img src={myImage3} alt="Portfolio Website" className="w-full h-50 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">My Portfolio</h3>
                            <p className="text-dark mb-4">
                                A portfolio of modern, responsive web apps built with React.js, Tailwind CSS, HTML, and CSS — focused on clean, intuitive design.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
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
                        </div>
                    </div>

                        {/* Third Card */}
                        <div className="rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
                            <img src={myImage2} alt="PALMPC System" className="w-full h-50 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">PALMPC Coop Cashiering & Inventory System</h3>
                                <p className="text-dark mb-4">
                                    A cooperative cashiering and inventory system with barcode scanning and thermal printing for fast and accurate transactions.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
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
                            </div>
                        </div>




                       {/* Fourth Card */}
                    <div className="rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
                        <img src={myImage1} alt="Barangay Governance Management System" className="w-full h-50 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Barangay Governance Management System</h3>
                            <p className="text-dark mb-4">
                                The E-BRGY system modernizes barangay administration in the Philippines by automating processes and enhancing transparency.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
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
                        </div>
                    </div>


                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
