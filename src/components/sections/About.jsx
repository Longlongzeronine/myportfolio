import { RevealOnScroll } from "../RevealOnScroll";
import myImage from './sample-proj/2.png'; // Adjust the path accordingly

export const About = () => {
    const frontedSkills = ["Bootstrap", "React", "Vue", "TailwindCSS", "Figma"];
    const backendSkills = ["Php", "Node.js", "Python", "MYSQL", "MyphpAdmin"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 bg-slate-950">
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 w-full max-w-7xl">
                    {/* Left Content */}
                    <div className="w-full md:w-3/4">
                        <h2 className="text-3xl font-bold mb-8 text-light text-center md:text-left">
                            About Me
                        </h2>

                        <div className="rounded-xl p-6 md:p-8 border border-gray-300 hover:-translate-y-1 transition-all cursor-pointer">
                            <p className="text-gray-300 mb-6 text-justify">
                              Passionate about frontend development and UI design, I thrive on team collaboration and continuously learning new web technologies while creating intuitive, accessible, and visually appealing interfaces that enhance user experience, leveraging modern design systems, optimizing performance, and staying updated with the latest trends and best practices.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Frontend Skills */}
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                        {frontedSkills.map((tech, key) => (
                                            <span
                                                key={key}
                                                className="bg-white text-black py-1 px-3 rounded-full text-sm hover:bg-slate-300 hover:shadow-md transition cursor-pointer"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Backend Skills */}
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                        {backendSkills.map((tech, key) => (
                                            <span
                                                key={key}
                                                className="bg-white text-black py-1 px-3 rounded-full text-sm hover:bg-slate-300 hover:shadow-md transition cursor-pointer"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {/* Education */}
                            <div className="p-6 rounded-xl border border-gray-300 hover:-translate-y-1 transition-all cursor-pointer">
                                <h3 className="text-xl font-bold mb-4 text-white">🎓 Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-3">
                                    <li>
                                        <strong>B.S in Information Technology</strong> - UMTC University of Mindanao Tagum City (2021-2025)
                                    </li>
                                    <li>
                                        <strong>Relevant Coursework:</strong> Web Development, Mobile App Development, Front-End Development
                                    </li>

                                    <li>
                                        <strong>Intern at AIMHI (2025)</strong>AIMHI is an AI-driven platform that helps contractors cut costs and boost project efficiency.
                                    </li>
                                </ul>
                            </div>

                            {/* Project Experience */}
                            <div className="p-6 rounded-xl border border-gray-300 hover:-translate-y-1 transition-all cursor-pointer">
                                <h3 className="text-xl font-bold mb-4 text-white">📞 Contact Information</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">Mobile number</h4>
                                        <p>09079254972</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p>f55876061@gmail.com</p>
                                    </div>

                                     <div>
                                        <h4 className="font-semibold">Address</h4>
                                        <p>Pangi Maco Davao De Oro</p>
                                    </div>
                                    
                                </div>
                            </div>

                            
                        </div>


                        
                    </div>

                    {/* Right Image */}
                 <div className="w-full md:w-1/4 flex justify-center md:justify-end ml-10 md:block mr-20 hidden">
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
