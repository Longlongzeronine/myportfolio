import { RevealOnScroll } from "../RevealOnScroll";
import Particles from "../../Particles"; // make sure the path is correct
import { FaHtml5, FaReact, FaBootstrap, FaNodeJs, FaPython, FaPhp, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPhpmyadmin, SiVite, SiFlutter } from "react-icons/si";
import myImage from './sample-proj/2.png';

export const About = () => {
    const frontendSkills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" /> },
        { name: "Vite", icon: <SiVite className="text-purple-400 text-2xl" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-2xl" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-2xl" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
    ];

    const backendSkills = [
        { name: "PHP", icon: <FaPhp className="text-indigo-400 text-2xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400 text-2xl" /> },
        { name: "Firebase", icon: <FaDatabase className="text-blue-500 text-2xl" /> },
        { name: "PhpMyAdmin", icon: <SiPhpmyadmin className="text-orange-400 text-2xl" /> },
        { name: "SQLyog", icon: <FaDatabase className="text-red-500 text-2xl" /> },
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center relative bg-slate-950 pt-10 overflow-hidden"
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
                        <h2 className="text-5xl font-bold mb-8 text-light text-center md:text-left">
                            About Me
                        </h2>

                        <div className="rounded-xl p-6 md:p-8 border border-gray-300 hover:-translate-y-1 transition-all cursor-pointer">
                            <p className="text-gray-300 mb-6 text-justify">
                                Passionate about Flutter development and mobile app design, I focus on creating intuitive, responsive, and visually appealing interfaces. I integrate Firebase backend services and AI chatbot functionality to deliver seamless user experiences.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Frontend Skills */}
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {frontendSkills.map((skill, index) => (
                                            <div 
                                                key={index} 
                                                className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:bg-slate-800 hover:scale-105 transition cursor-pointer"
                                            >
                                                {skill.icon}
                                                <span className="text-white">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Backend Skills */}
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {backendSkills.map((skill, index) => (
                                            <div 
                                                key={index} 
                                                className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:bg-slate-800 hover:scale-105 transition cursor-pointer"
                                            >
                                                {skill.icon}
                                                <span className="text-white">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                       {/* Education & Contact */}
                        <div className="mt-8">
                            <div className="p-6 rounded-xl border border-gray-300 hover:-translate-y-1 transition-all cursor-pointer">
                                <h3 className="text-xl font-bold mb-4 text-white">🎓 Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-3">
                                    <li>
                                        <strong>B.S in Information Technology</strong> - UMTC University of Mindanao Tagum City (2021-2025)
                                    </li>
                                    <li>
                                        <strong>Relevant Coursework:</strong> Web Development, Mobile App Development, Flutter Development
                                    </li>
                                    <li>
                                        <strong>Intern at AIMHI (2025)</strong> AIMHI is an AI-driven platform that helps contractors cut costs and boost project efficiency.
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/4 flex justify-center md:justify-end ml-10 md:block mr-40 hidden">
                        <img
                            src={myImage}
                            alt="Francis Amoguis"
                            className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px] rounded-lg"
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
