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
import { SocialNavbar } from "./components/SocialNavbar"; // ✅ Added import

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`flex flex-col w-full min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 overflow-x-hidden`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main className="flex-1 w-full">
          <Home />
          <Projects />
          <About />
          <Contact />
        </main>

        {/* ✅ Social Navbar on middle-right */}
        <SocialNavbar />

        <Footer />
      </div>
    </>
  );
}

export default App;
