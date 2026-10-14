import React from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  Layers,
  FileBadge
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/10 dark:bg-purple-600/15 light:bg-purple-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 dark:text-purple-300 light:text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileBadge className="w-3.5 h-3.5 text-purple-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Certifications</span>
          </h2>
          <p className="mt-3 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Certified technical competencies across algorithmic problem solving, prompt engineering, and cloud strategy.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-2xl bg-purple-950/20 dark:bg-purple-950/30 light:bg-white border border-purple-500/25 dark:border-purple-500/25 light:border-purple-200 shadow-xl backdrop-blur-md hover:border-purple-500/60 transition-all hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top color strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" />

              <div>
                {/* Header Icon & Issuer */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-300 dark:text-purple-300 light:text-purple-800">
                    {cert.badge}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-400 transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-semibold text-purple-300 dark:text-purple-300 light:text-purple-700 mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>{cert.issuer}</span>
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 mt-3 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-purple-500/15">
                  {cert.skillsLearned.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-purple-500/10 text-purple-300 dark:text-purple-300 light:text-purple-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Verify Button */}
              <div className="pt-6 mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {cert.date}
                </span>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  <span>Verification Portal</span>
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
