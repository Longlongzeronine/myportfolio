            import { RevealOnScroll } from "../RevealOnScroll";
            import myImage from './sample-proj/p-1.png'; 
            import myImage1 from './sample-proj/p-2.png';
            import myImage2 from './sample-proj/p-3.png';  
            import myImage3 from './sample-proj/p-4.png';  

            export const Projects = () => {
                return (
                    <section 
                        id="projects" 
                        className="min-h-screen flex items-center justify-center py-20 bg-white"
                    >
                        <RevealOnScroll>
                            <div className="max-w-5xl mx-auto px-4 pt-4">
                                <h1 className="text-3xl  font-bold mb-15 text-black text-center">
                                    Featured Projects
                                </h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                                    
                                    {/* First Card */}
                                {/* First Card */}
                                <div className="rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
                                    <img src={myImage} alt="Research Portal" className="w-full h-50 object-cover" />

                                    <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">UM Research Portal</h3>
                                    <p className="text-dark mb-4">
                                        A website to efficiently manage, track, and store research titles, enabling categorization, collaboration, and easy searchable access to research projects.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["Bootstrap", "HTML", "Mysql", "PHP"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className={`py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(128,2,2,0.2)] transition-all cursor-pointer ${key % 2 === 0 ? 'bg-[#800202] text-white hover:bg-[#a30606]' : 'bg-amber-500 text-white hover:bg-amber-500'}`}
                                        >
                                            {tech}
                                        </span>
                                        ))}
                                    </div>

                                        
                                    </div>
                                </div>


                                {/* Second Card */}

                                                            <div className="rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
                                <img src={myImage3} alt="Budget Tracking System Web" className="w-full h-50 object-cover" />

                                <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">My Portfolio</h3>
                                <p className="text-dark  mb-4">
                              A portfolio of modern, responsive web apps built with React.js, Tailwind CSS, HTML, and CSS — focused on clean, intuitive design.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["Tailwind CSS", "React JS", "HTML", "CSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(2,6,24,0.2)] transition-all cursor-pointer ${key % 2 === 0 ? 'bg-[#020618] text-white hover:bg-[#01040f]' : 'bg-indigo-100    text-dark hover:bg-indigo -100'}`}
                                    >
                                        {tech}
                                    </span>
                                    ))}
                                </div>

                            
                                </div>
                            </div>


                               

                                    {/* Third Card */}
                                <div className="rounded-xl border border-black/10 shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer overflow-hidden">
                                    <img src={myImage2} alt="Budget Tracking System App" className="w-full h-50 object-cover" />

                                    <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">BTS: Budget Tracking System App</h3>
                                    <p className="text-dark mb-4">
                                        Helps users monitor and manage their spending by categorizing expenses, setting budgets, and providing insightful reports.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["App", "Android Studio", "Flutter", "Material"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className={`py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(39,38,38,0.2)] transition-all cursor-pointer ${key % 2 === 0 ? 'bg-[#272626] text-white hover:bg-[#1f1e1e]' : 'bg-gray-600 text-white hover:bg-gray-600'}`}
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
                                        {["Bootstrap", "Hostinger", "Mysql", "PHP"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className={`py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(104,182,88,0.2)] transition-all cursor-pointer ${key % 2 === 0 ? 'bg-[#68b658] text-white hover:bg-[#57a348]' : 'bg-lime-200 text-dark hover:bg-lime-200'}`}
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
