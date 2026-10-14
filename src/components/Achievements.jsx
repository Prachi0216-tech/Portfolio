import React from 'react';
import { 
  Trophy, 
  Calendar, 
  Sparkles, 
  Lightbulb, 
  Target, 
  Users, 
  CheckCircle2,
  Medal
} from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-purple-600/10 dark:bg-purple-600/15 light:bg-purple-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 dark:text-purple-300 light:text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-purple-400" />
            <span>Milestones & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Achievements</span>
          </h2>
          <p className="mt-3 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Real-world simulations, collaborative hackathons, and tech innovation showcases.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-purple-950/20 dark:bg-purple-950/30 light:bg-white border border-purple-500/25 dark:border-purple-500/25 light:border-purple-200 shadow-xl backdrop-blur-md hover:border-purple-500/60 transition-all hover:-translate-y-1.5 group relative flex flex-col justify-between"
            >
              {/* Corner Aura */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl group-hover:bg-purple-500/25 transition-all pointer-events-none" />

              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shadow-inner">
                    <Medal className="w-7 h-7 text-yellow-400" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 dark:text-purple-300 light:text-purple-800">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>

                {/* Organization & Date */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-purple-300 dark:text-purple-300 light:text-purple-700 mt-2 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-cyan-400" />
                    {item.organization}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {item.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-purple-500/15 flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-500/10 border border-purple-500/20 text-purple-200 dark:text-purple-200 light:text-purple-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
