import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  FileText, 
  Download,
  ExternalLink,
  Sparkles,
  MapPin,
  CheckCircle2,
  Terminal,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const roles = [
  "Full Stack Developer",
  "AI & Computer Vision Enthusiast",
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
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 dark:bg-purple-600/20 light:bg-purple-300/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 light:bg-cyan-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 dark:bg-indigo-600/15 light:bg-indigo-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide text-purple-300 dark:text-purple-300 light:text-purple-800">
                Available for Full Stack & AI Roles
              </span>
              <span className="hidden sm:inline-block text-purple-400/40">•</span>
              <span className="hidden sm:inline-block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-600">
                Intern @ ConsultIT
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15] mb-4">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Role Rotator */}
            <div className="h-9 mb-5 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl font-mono font-medium text-purple-300 dark:text-purple-300 light:text-purple-700 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400" />
                <span className="border-b-2 border-purple-500 pb-0.5 transition-all">
                  {roles[roleIndex]}
                </span>
              </span>
            </div>

            {/* Career Objective / Professional Summary */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed max-w-2xl mb-8">
              Aspiring Full Stack & AI Developer (<span className="text-purple-400 font-semibold">B.Tech CSE, AKTU 2027</span>) with hands-on experience building full-stack web applications, high-performance RESTful APIs, and real-time biometric systems with FastAPI, React, and PyTorch.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 text-purple-200 dark:text-purple-200 light:text-purple-800 font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 backdrop-blur-md hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Resume Preview & Download</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 dark:border-slate-700 light:border-slate-300 bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-100 hover:bg-slate-700/60 text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Location Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 pt-4 border-t border-purple-500/20 w-full">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-purple-50 hover:text-white dark:hover:text-white light:hover:text-purple-900 border border-slate-700 dark:border-slate-700 light:border-purple-200 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span className="font-mono text-xs">github.com/Prachi0216-tech</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-purple-50 hover:text-white dark:hover:text-white light:hover:text-purple-900 border border-slate-700 dark:border-slate-700 light:border-purple-200 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs">linkedin/prachi-singh</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-purple-50 hover:text-white dark:hover:text-white light:hover:text-purple-900 border border-slate-700 dark:border-slate-700 light:border-purple-200 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-fuchsia-400" />
                <span className="font-mono text-xs">{personalInfo.email}</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 dark:bg-slate-800/60 light:bg-purple-50 hover:text-white dark:hover:text-white light:hover:text-purple-900 border border-slate-700 dark:border-slate-700 light:border-purple-200 transition-colors"
                title="Click to copy phone number"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs">
                  {copiedPhone ? "Copied!" : personalInfo.phone}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Profile Picture with Glowing Purple Aura */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              
              {/* Secondary Cyan Accent Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-600/30 rounded-3xl blur-2xl opacity-50 -z-10 pointer-events-none"></div>

              {/* Main Photo Card Container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-88 md:h-[420px] rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-purple-500/50 via-purple-900/40 to-slate-900 border border-purple-500/40 shadow-2xl shadow-purple-950/80">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-950 relative">
                  <img
                    src={personalInfo.profileImage}
                    alt="Prachi Singh"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to Google Drive direct thumbnail if local has issue
                      e.target.onerror = null;
                      e.target.src = "https://lh3.googleusercontent.com/d/13Ln5CFC3SMq_LyV3Bo5_aSks_AznWtG2";
                    }}
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0518] via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-purple-950/80 backdrop-blur-md border border-purple-500/30">
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
                className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-900/90 dark:bg-purple-900/90 light:bg-purple-100 text-purple-200 dark:text-purple-200 light:text-purple-900 border border-purple-400/50 text-[11px] font-medium shadow-lg hover:bg-purple-800 transition-all"
                title="View original profile photo on Google Drive"
              >
                <span>Google Drive Photo</span>
                <ExternalLink className="w-3 h-3 text-purple-300" />
              </a>

              {/* Floating Badge: Tech Stack */}
              <div className="absolute -bottom-5 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white text-white dark:text-white light:text-slate-900 border border-purple-500/30 shadow-xl backdrop-blur-md">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold">FastAPI • React • PyTorch</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-10">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-purple-950/20 dark:bg-purple-950/30 light:bg-purple-50/80 border border-purple-500/20 text-center backdrop-blur-sm hover:border-purple-500/50 transition-colors"
                >
                  <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-purple-400/80 dark:text-purple-400/80 light:text-purple-700 truncate mt-0.5">
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
