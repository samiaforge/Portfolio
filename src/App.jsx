import React from 'react';
import { BackgroundGlow } from './components/common/BackgroundGlow';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#070A12] text-[#94A3B8] selection:bg-blue-600/30 selection:text-white">
      {/* Dark Cinematic Ambient Lighting */}
      <BackgroundGlow />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section (100% Image-Free) */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Education Section */}
        <Education />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
