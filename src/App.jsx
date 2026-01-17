import React, { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import { SocialNavbar } from "./components/SocialNavbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { component: <Home />, name: "home" },
    { component: <Projects />, name: "projects" },
    { component: <About />, name: "about" },
    { component: <Contact />, name: "contact" }
  ];

  const goToPage = (pageName) => {
    const pageIndex = pages.findIndex(page => page.name === pageName);
    if (pageIndex !== -1) {
      setCurrentPage(pageIndex);
      setMenuOpen(false);
    }
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`flex flex-col w-full h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 overflow-hidden`}
      >
        <Navbar 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          goToPage={goToPage}
          currentPage={pages[currentPage].name}
        />
        <MobileMenu 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
          goToPage={goToPage}
          currentPage={pages[currentPage].name}
        />

        <main className="flex-1 w-full h-full overflow-y-auto overflow-x-hidden">
          {/* Only render the current page */}
          <div className="w-full min-h-full">
            {pages[currentPage].component}
          </div>
        </main>

        <SocialNavbar />

        {currentPage === pages.length - 1 && <Footer />}
      </div>
    </>
  );
}

export default App;