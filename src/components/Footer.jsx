import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Sparkles,
  ExternalLink,
  Code
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070311] dark:bg-[#070311] light:bg-[#f3edf9] border-t border-purple-500/20 text-slate-400 dark:text-slate-400 light:text-slate-600 pt-16 pb-12 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-600/10 rounded-t-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-500/15">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-purple-600/30">
                PS
              </div>
              <span className="font-extrabold text-xl text-white dark:text-white light:text-slate-900 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-sm">
              Full Stack & AI Developer specializing in scalable React frontends, high-performance FastAPI backends, and computer vision architectures.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-purple-950/40 dark:bg-purple-950/40 light:bg-purple-200/50 hover:bg-purple-600/30 text-purple-300 dark:text-purple-300 light:text-purple-900 border border-purple-500/20 transition-all hover:scale-105"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-purple-950/40 dark:bg-purple-950/40 light:bg-purple-200/50 hover:bg-purple-600/30 text-cyan-300 dark:text-cyan-300 light:text-cyan-900 border border-purple-500/20 transition-all hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-purple-950/40 dark:bg-purple-950/40 light:bg-purple-200/50 hover:bg-purple-600/30 text-fuchsia-300 dark:text-fuchsia-300 light:text-fuchsia-900 border border-purple-500/20 transition-all hover:scale-105"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-white dark:text-white light:text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-purple-400 transition-colors">Certifications</a>
              <a href="#achievements" className="hover:text-purple-400 transition-colors">Achievements</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Live Projects Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white dark:text-white light:text-slate-900 uppercase tracking-wider">
              Featured Systems
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a 
                href="https://attendance-seven-green.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-purple-300 hover:text-purple-200 font-medium"
              >
                <span>SmartFace Attendance</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://myroute-transit.onrender.com/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 font-medium"
              >
                <span>MyRoute Transit PWA</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://github.com/Prachi0216-tech/brand-sentiment-analysis" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white font-medium"
              >
                <span>Brand Sentiment NLP</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Built with React, Vite & Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white transition-all text-xs font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
