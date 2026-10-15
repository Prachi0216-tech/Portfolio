import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  Calendar,
  FileBadge,
  Eye,
  X
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section id="certifications" className="py-20 relative w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/30 text-purple-800 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
            <FileBadge className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Certifications</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Certified technical competencies across algorithmic problem solving, prompt engineering, and cloud strategy.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-purple-950/30 border border-purple-200/90 dark:border-purple-500/25 shadow-lg shadow-purple-500/5 hover:border-purple-400 dark:hover:border-purple-500/60 transition-all hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top color strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 dark:from-purple-500 dark:via-fuchsia-500 dark:to-indigo-500" />

              <div>
                {/* Header Icon & Issuer */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-600/20 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-700 dark:text-purple-300 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-400/30 text-purple-800 dark:text-purple-300">
                    {cert.badge}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{cert.issuer}</span>
                </p>

                {/* Optional Certificate Thumbnail Preview */}
                {cert.certificateImage && (
                  <div className="mt-3 relative rounded-xl overflow-hidden border border-purple-200 dark:border-purple-500/30 group/img bg-slate-100 dark:bg-slate-900">
                    <img 
                      src={cert.certificateImage} 
                      alt={cert.title}
                      className="w-full h-32 object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setPreviewImage(cert.certificateImage)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center gap-2 text-white text-xs font-bold transition-opacity cursor-pointer backdrop-blur-[2px]"
                    >
                      <Eye className="w-4 h-4" /> Quick Preview
                    </button>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-3 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-purple-100 dark:border-purple-500/15">
                  {cert.skillsLearned.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Verify Button */}
              <div className="pt-6 mt-4 flex items-center justify-between border-t border-purple-100 dark:border-purple-500/15">
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  {cert.date}
                </span>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors group/link"
                >
                  <span>{cert.driveUrl ? "View on Drive" : "Verify Portal"}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Image Lightbox Modal */}
        {previewImage && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full bg-white dark:bg-[#120a26] rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30">
              <div className="p-3 bg-purple-950/80 flex justify-between items-center text-white">
                <span className="text-xs font-mono font-bold">Certificate Verification Document</span>
                <button 
                  onClick={() => setPreviewImage(null)}
                  className="p-1 rounded-lg hover:bg-white/20 text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-3 max-h-[80vh] overflow-auto flex items-center justify-center">
                <img src={previewImage} alt="Certificate Document" className="max-w-full max-h-[75vh] rounded-lg shadow object-contain" />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
