import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Target, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 dark:bg-purple-600/15 light:bg-purple-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 dark:text-purple-300 light:text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Me</span>
          </h2>
          <p className="mt-3 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Passionate about bridging intelligent AI algorithms with robust, modern web engineering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Objectives (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Summary Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-purple-950/20 dark:bg-purple-950/30 light:bg-white border border-purple-500/20 dark:border-purple-500/20 light:border-purple-200 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2.5 mb-4">
                <Target className="w-5 h-5 text-purple-400" />
                <span>Professional Background & Objectives</span>
              </h3>
              
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                {personalInfo.careerObjective}
              </p>
              
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {personalInfo.about}
              </p>

              {/* Core Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-purple-500/20">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800">
                    <strong>Full Stack Craft:</strong> Clean React frontends & async FastAPI backends
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800">
                    <strong>Computer Vision:</strong> PyTorch, FaceNet & MTCNN model deployment
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-fuchsia-400 mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800">
                    <strong>Real-Time Systems:</strong> WebSockets, state machines & low-latency feeds
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800">
                    <strong>Scalable DB & Cloud:</strong> MongoDB, MS SQL, Render & Vercel
                  </span>
                </div>
              </div>
            </div>

            {/* Developer Terminal Box */}
            <div className="rounded-2xl overflow-hidden border border-purple-500/30 bg-[#0d071a] shadow-2xl">
              <div className="px-4 py-3 bg-[#150a2b] border-b border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-purple-300">prachi_profile.json</span>
                </div>
                <span className="font-mono text-[11px] text-purple-400/80">bash / zsh</span>
              </div>
              
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <span className="text-purple-400">const</span> developer = &#123;<br />
                &nbsp;&nbsp;<span className="text-indigo-300">name</span>: <span className="text-emerald-300">"{personalInfo.name}"</span>,<br />
                &nbsp;&nbsp;<span className="text-indigo-300">role</span>: <span className="text-emerald-300">"Full Stack & AI Developer"</span>,<br />
                &nbsp;&nbsp;<span className="text-indigo-300">currentInternship</span>: <span className="text-emerald-300">"ConsultIT Pvt Ltd"</span>,<br />
                &nbsp;&nbsp;<span className="text-indigo-300">education</span>: <span className="text-amber-300">&#123;</span> degree: <span className="text-emerald-300">"B.Tech CSE"</span>, batch: <span className="text-cyan-300">2027</span> <span className="text-amber-300">&#125;</span>,<br />
                &nbsp;&nbsp;<span className="text-indigo-300">location</span>: <span className="text-emerald-300">"Ghaziabad, Uttar Pradesh"</span>,<br />
                &nbsp;&nbsp;<span className="text-indigo-300">primaryStack</span>: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"FastAPI"</span>, <span className="text-emerald-300">"PyTorch"</span>, <span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"WebSockets"</span><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;<span className="text-indigo-300">seeking</span>: <span className="text-emerald-300">"Full-time Software Engineering & AI roles"</span><br />
                &#125;;
              </div>
            </div>

          </div>

          {/* Right Column: Education Timeline Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                Education
              </h3>
            </div>

            {education.map((item, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-purple-950/20 dark:bg-purple-950/30 light:bg-white border border-purple-500/20 dark:border-purple-500/20 light:border-purple-200 shadow-xl backdrop-blur-md hover:border-purple-500/50 transition-all group"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />

                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="p-2.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 border border-purple-400/30 text-purple-300 dark:text-purple-300 light:text-purple-700">
                    {item.status}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-400 transition-colors">
                  {item.degree}
                </h4>

                <p className="text-sm font-semibold text-purple-300 dark:text-purple-300 light:text-purple-700 mt-1">
                  {item.institution}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-3 mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.duration}
                  </span>
                </div>

                <ul className="space-y-2 border-t border-purple-500/15 pt-3">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed flex items-start gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Quick Summary Pill */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-purple-900/40 border border-purple-500/30 flex items-center gap-3">
              <Award className="w-6 h-6 text-yellow-400 shrink-0" />
              <p className="text-xs text-purple-200 dark:text-purple-200 light:text-purple-900 leading-snug">
                <strong>Strong Foundation:</strong> Computer Science Engineering with a strong grasp on DSA, Web architecture, and Deep Learning algorithms.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
