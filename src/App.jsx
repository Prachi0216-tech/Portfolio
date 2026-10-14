import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#090514] dark:bg-[#090514] light:bg-[#faf7fd] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300 selection:bg-purple-600 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Sections */}
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Full Resume Modal */}
        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />

      </div>
    </ThemeProvider>
  );
}
