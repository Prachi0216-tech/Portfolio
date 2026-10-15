import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Building2,
  Code
} from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/30 text-purple-800 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Work History & Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world industry experience designing robust frontend components, enterprise APIs, and database solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative w-full">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent -translate-x-1/2 hidden sm:block"></div>

          {experience.map((item, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0 w-full">
              
              {/* Center Timeline Node */}
              <div className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 border-4 border-white dark:border-[#090514] shadow-lg shadow-purple-600/50 items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
              </div>

              {/* Main Card */}
              <div className="sm:w-[calc(100%-4rem)] sm:ml-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-purple-950/30 border border-purple-200/90 dark:border-purple-500/25 shadow-lg shadow-purple-500/5 hover:border-purple-400 dark:hover:border-purple-500/60 transition-all group">
                
                {/* Header: Company & Role */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-600/20 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-300 shrink-0">
                      <Building2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-base font-semibold text-purple-700 dark:text-purple-300">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Active Badge & Dates */}
                  <div className="flex flex-row sm:flex-col sm:items-end justify-between items-center gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Present Internship
                    </span>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Contributions Bullets */}
                <div className="space-y-3 mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-purple-100 dark:border-purple-500/15 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-purple-800 dark:text-purple-300 font-bold mr-1 flex items-center gap-1">
                    <Code className="w-3.5 h-3.5" /> Stack:
                  </span>
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/25 text-purple-800 dark:text-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
