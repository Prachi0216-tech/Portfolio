import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText, 
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar({ onOpenResume }) {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? 'py-2.5 sm:py-3 bg-white/95 dark:bg-[#0a0518]/95 backdrop-blur-md border-b border-purple-200/80 dark:border-purple-500/20 shadow-md shadow-purple-500/5 dark:shadow-purple-950/20' 
          : 'py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md shadow-purple-600/30 group-hover:scale-105 transition-all">
              PS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Prachi Singh
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-purple-600 dark:text-purple-400 font-semibold">
                Full Stack & AI Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-purple-100 text-purple-700 font-bold border border-purple-300 dark:bg-purple-600/30 dark:text-white dark:border-purple-500/40 shadow-sm'
                      : 'text-slate-600 hover:text-purple-700 hover:bg-purple-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-purple-500/10'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Theme Toggle & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Bright/Dark mode"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 hover:bg-purple-100 dark:hover:bg-purple-500/20 text-purple-800 dark:text-purple-300 transition-all text-xs font-semibold shadow-sm cursor-pointer"
              title={`Switch to ${isDark ? 'Bright (Light)' : 'Dark'} Mode`}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
                  <span className="hidden xl:inline text-purple-200">Bright Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-purple-700" />
                  <span className="hidden xl:inline text-purple-800 font-bold">Dark Mode</span>
                </>
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-purple-600/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-purple-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-xl border border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-500/10 text-slate-800 dark:text-purple-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#0e0720]/98 backdrop-blur-xl border-b border-purple-200 dark:border-purple-500/25 px-4 pt-3 pb-6 mt-2 shadow-2xl transition-all">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-purple-100 text-purple-800 border-l-4 border-purple-600 dark:bg-purple-600/30 dark:text-white dark:border-purple-500'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-500/15'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-purple-200 dark:border-purple-500/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                View & Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
