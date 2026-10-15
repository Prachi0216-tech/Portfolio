import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Download,
  ExternalLink,
  Sparkles,
  Terminal,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const roles = [
  "Full Stack Developer",
  "AI & Machine Learning Engineer",
  "FastAPI & PyTorch Developer",
  "React & PWA Specialist",
  "B.Tech CSE @ AKTU 2027"
];

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-28 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden w-full">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-500/15 dark:bg-purple-600/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[220px] sm:w-[350px] h-[220px] sm:h-[350px] bg-indigo-500/10 dark:bg-cyan-500/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-300 dark:border-purple-500/30 bg-purple-100/80 dark:bg-purple-500/10 backdrop-blur-md mb-6 shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="text-xs font-semibold tracking-wide text-purple-900 dark:text-purple-300 truncate">
                Available for Full Stack & AI Roles
              </span>
              <span className="hidden sm:inline-block text-purple-400">•</span>
              <span className="hidden sm:inline-block text-xs font-medium text-slate-700 dark:text-slate-300">
                Intern @ ConsultIT
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-400 dark:via-fuchsia-400 dark:to-indigo-400">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Role Rotator */}
            <div className="h-9 mb-5 flex items-center justify-center lg:justify-start w-full">
              <span className="text-base sm:text-xl font-mono font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 shrink-0" />
                <span className="border-b-2 border-purple-500 pb-0.5">
                  {roles[roleIndex]}
                </span>
              </span>
            </div>

            {/* Career Objective / Professional Summary */}
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              Aspiring Full Stack & AI Developer (<span className="text-purple-600 dark:text-purple-400 font-bold">B.Tech CSE, AKTU 2027</span>) with hands-on experience building full-stack web applications, high-performance RESTful APIs, and real-time systems with FastAPI, React, PyTorch, and Machine Learning.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all text-center"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl border border-purple-300 dark:border-purple-500/40 bg-purple-50 dark:bg-purple-500/10 hover:bg-purple-100 dark:hover:bg-purple-500/20 text-purple-800 dark:text-purple-200 font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 backdrop-blur-md hover:-translate-y-0.5 transition-all cursor-pointer text-center"
              >
                <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Resume Preview & Download</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl border border-purple-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 hover:bg-purple-50 dark:hover:bg-slate-700/60 text-slate-800 dark:text-slate-200 font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all text-center"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Phone */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm pt-4 border-t border-purple-200 dark:border-purple-500/20 w-full">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-850/60 border border-purple-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white shadow-sm transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="font-mono text-xs">github.com/Prachi0216-tech</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-850/60 border border-purple-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white shadow-sm transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span className="font-mono text-xs">linkedin/prachi-singh</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-850/60 border border-purple-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white shadow-sm transition-all"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-fuchsia-600 dark:text-fuchsia-400" />
                <span className="font-mono text-xs">{personalInfo.email}</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-850/60 border border-purple-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white shadow-sm transition-all cursor-pointer"
                title="Click to copy phone number"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-mono text-xs">
                  {copiedPhone ? "Copied!" : personalInfo.phone}
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Profile Picture */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="relative group max-w-full">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 rounded-3xl blur-xl opacity-60 dark:opacity-70 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

              {/* Main Photo Card Container */}
              <div className="relative w-64 h-72 sm:w-80 sm:h-96 md:w-88 md:h-[420px] rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-purple-400 via-purple-300 to-purple-500 dark:from-purple-500/50 dark:via-purple-900/40 dark:to-slate-900 border border-purple-300 dark:border-purple-500/40 shadow-2xl">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 relative">
                  <img
                    src={personalInfo.profileImage}
                    alt="Prachi Singh"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://lh3.googleusercontent.com/d/13Ln5CFC3SMq_LyV3Bo5_aSks_AznWtG2";
                    }}
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 dark:bg-purple-950/80 backdrop-blur-md border border-purple-400/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm tracking-wide">Prachi Singh</p>
                        <p className="text-purple-300 text-xs font-mono">B.Tech CSE '27 | Full Stack</p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-purple-600/40 flex items-center justify-center border border-purple-400/40">
                        <Sparkles className="w-4 h-4 text-purple-300 animate-spin-slow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill: Google Drive Photo Verification Link */}
              <a
                href={personalInfo.profileDriveUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute -top-3 -right-2 sm:-right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-purple-900/90 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-400/50 text-[11px] font-semibold shadow-lg hover:scale-105 transition-all"
                title="View original profile photo on Google Drive"
              >
                <span>Google Drive Photo</span>
                <ExternalLink className="w-3 h-3 text-purple-600 dark:text-purple-300" />
              </a>

              {/* Floating Badge: Tech Stack */}
              <div className="absolute -bottom-5 -left-2 sm:-left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-purple-300 dark:border-purple-500/30 shadow-xl backdrop-blur-md">
                <Code2 className="w-4 h-4 text-purple-600 dark:text-cyan-400" />
                <span className="text-xs font-bold">FastAPI • React • ML • PyTorch</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full mt-8 sm:mt-10">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-white dark:bg-purple-950/30 border border-purple-200 dark:border-purple-500/20 text-center shadow-sm hover:border-purple-500 transition-all"
                >
                  <p className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-purple-700 dark:text-purple-400/80 truncate mt-0.5">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
