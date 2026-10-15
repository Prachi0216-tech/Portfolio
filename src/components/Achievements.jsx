import React, { useState } from 'react';
import { 
  Trophy, 
  Calendar, 
  Target, 
  Medal,
  ExternalLink,
  Eye,
  X
} from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <section id="achievements" className="py-20 relative w-full overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/30 text-purple-800 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Milestones & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Achievements</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world simulations, collaborative hackathons, and tech innovation showcases with verified certificates.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-purple-950/30 border border-purple-200/90 dark:border-purple-500/25 shadow-xl shadow-purple-500/5 hover:border-purple-400 dark:hover:border-purple-500/60 transition-all hover:-translate-y-1.5 group relative flex flex-col justify-between w-full"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-100 to-indigo-100 dark:from-purple-600/30 dark:to-indigo-600/30 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-300 group-hover:scale-105 transition-transform shadow-inner">
                    <Medal className="w-7 h-7 text-amber-500" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-400/30 text-purple-800 dark:text-purple-300">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>

                {/* Organization & Date */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-purple-700 dark:text-purple-300 mt-2 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {item.organization}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-slate-600 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    {item.date}
                  </span>
                </div>

                {/* Certificate Preview Image */}
                {item.certificateImage && (
                  <div className="my-3 relative rounded-xl overflow-hidden border border-purple-200 dark:border-purple-500/30 group/img bg-slate-100 dark:bg-slate-900">
                    <img 
                      src={item.certificateImage} 
                      alt={item.title}
                      className="w-full h-36 object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setActiveCertificate(item.certificateImage)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center gap-2 text-white text-xs font-bold transition-opacity cursor-pointer backdrop-blur-[2px]"
                    >
                      <Eye className="w-4 h-4" /> View Certificate
                    </button>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Tags & Action Buttons */}
              <div className="pt-4 border-t border-purple-100 dark:border-purple-500/15 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-800 dark:text-purple-200 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {item.verifyUrl && (
                  <a
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors py-1 cursor-pointer"
                  >
                    <span>View on Drive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        {activeCertificate && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full bg-white dark:bg-[#120a26] rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30">
              <div className="p-3 bg-purple-950/80 flex justify-between items-center text-white">
                <span className="text-xs font-mono font-bold">Achievement Certificate Document</span>
                <button 
                  onClick={() => setActiveCertificate(null)}
                  className="p-1 rounded-lg hover:bg-white/20 text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-3 max-h-[80vh] overflow-auto flex items-center justify-center">
                <img src={activeCertificate} alt="Achievement Certificate" className="max-w-full max-h-[75vh] rounded-lg shadow object-contain" />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
