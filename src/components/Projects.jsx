import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Radio, 
  CheckCircle2, 
  ScanFace,
  Wifi,
  Navigation,
  Bus,
  Smile,
  Frown,
  Meh,
  GraduationCap,
  TrendingUp,
  Brain,
  Sliders,
  Award
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  // Interactive mini-demo states
  const [sentimentInput, setSentimentInput] = useState('Prachi created an outstanding attendance and transit platform!');
  const [sentimentScore, setSentimentScore] = useState({ label: 'Positive', score: '96%', color: 'text-emerald-400' });
  const [punchState, setPunchState] = useState('IN');
  const [isPunching, setIsPunching] = useState(false);

  // Placement ML Demo State
  const [tenthScore, setTenthScore] = useState(78);
  const [degreeScore, setDegreeScore] = useState(74);
  const [hasWorkExp, setHasWorkExp] = useState(true);

  // Compute placement prediction probability based on top predictors
  const calculatePlacementProb = () => {
    // Weighted formula modeled after Random Forest feature importances (ssc_p & degree_p as primary)
    let base = (tenthScore * 0.45) + (degreeScore * 0.45);
    if (hasWorkExp) base += 10;
    const prob = Math.min(Math.max(Math.round((base - 40) * 1.6), 8), 98);
    const isPlaced = prob >= 60;
    return { prob, isPlaced };
  };

  const { prob: placementProb, isPlaced: isStudentPlaced } = calculatePlacementProb();

  const handleTestSentiment = (text) => {
    setSentimentInput(text);
    const lower = text.toLowerCase();
    if (lower.includes('bad') || lower.includes('poor') || lower.includes('slow') || lower.includes('terrible') || lower.includes('error')) {
      setSentimentScore({ label: 'Negative', score: '88%', color: 'text-rose-400' });
    } else if (lower.includes('outstanding') || lower.includes('great') || lower.includes('impressive') || lower.includes('best') || lower.includes('good') || lower.includes('excellent')) {
      setSentimentScore({ label: 'Positive', score: '96%', color: 'text-emerald-400' });
    } else {
      setSentimentScore({ label: 'Neutral', score: '78%', color: 'text-amber-400' });
    }
  };

  const handleSimulatePunch = () => {
    setIsPunching(true);
    setTimeout(() => {
      setPunchState(prev => prev === 'IN' ? 'OUT' : 'IN');
      setIsPunching(false);
    }, 600);
  };

  return (
    <section id="projects" className="py-20 relative w-full overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/30 text-purple-800 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Production-grade systems engineered with modern architectures, real-time biometrics, machine learning pipelines, and progressive web apps.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12 w-full">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-purple-950/30 border border-purple-200/90 dark:border-purple-500/25 shadow-xl shadow-purple-500/5 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all group w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
                
                {/* Left Side: Information & Actions (7 cols) */}
                <div className="lg:col-span-7 space-y-5 w-full">
                  
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-500/15 border border-purple-300 dark:border-purple-500/30 text-purple-800 dark:text-purple-300">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 dark:bg-cyan-500/15 border border-cyan-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features Bullets */}
                  <div className="space-y-2 pt-1">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/25 text-purple-800 dark:text-purple-200 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-xl border border-purple-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm flex items-center gap-2 shadow-sm hover:-translate-y-0.5 transition-all"
                      >
                        <Github className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Side: Interactive Architecture / UI Simulation (5 cols) */}
                <div className="lg:col-span-5 w-full">
                  
                  {/* SmartFace Interactive Attendance Simulation */}
                  {project.previewType === 'attendance' && (
                    <div className="rounded-2xl border border-purple-400/30 bg-[#0c071d] text-slate-100 p-4 sm:p-5 shadow-2xl relative overflow-hidden w-full">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-500/20">
                        <div className="flex items-center gap-2">
                          <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
                          <span className="font-mono text-xs text-purple-300 font-semibold">Live WebSocket Feed</span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                          Connected (FastAPI)
                        </span>
                      </div>

                      {/* Biometric camera scan simulation */}
                      <div className="relative aspect-video rounded-xl bg-slate-950 border border-purple-500/20 flex flex-col items-center justify-center overflow-hidden mb-4">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-dashed border-purple-400/80 flex items-center justify-center relative animate-pulse-slow">
                          <ScanFace className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400" />
                          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
                        </div>
                        <p className="mt-2 text-[10px] sm:text-[11px] font-mono text-cyan-300 text-center px-2">
                          MTCNN Detection & FaceNet Embedding
                        </p>
                      </div>

                      {/* State Machine Status */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                        <div>
                          <p className="text-[11px] text-slate-400 font-mono">Current State Machine</p>
                          <p className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                            Status: <span className={punchState === 'IN' ? 'text-emerald-400' : 'text-amber-400'}>{punchState}</span>
                          </p>
                        </div>
                        <button
                          onClick={handleSimulatePunch}
                          disabled={isPunching}
                          className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow transition-all cursor-pointer"
                        >
                          {isPunching ? 'Verifying...' : `Simulate ${punchState === 'IN' ? 'OUT' : 'IN'} Punch`}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Student Placement ML Interactive Simulation */}
                  {project.previewType === 'placement' && (
                    <div className="rounded-2xl border border-indigo-400/30 bg-[#0d0724] text-slate-100 p-4 sm:p-5 shadow-2xl relative overflow-hidden w-full">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-indigo-500/20">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-indigo-400" />
                          <span className="font-mono text-xs text-indigo-300 font-semibold">Random Forest Predictor</span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold">
                          94.5% ROC-AUC
                        </span>
                      </div>

                      {/* Interactive Feature Inputs */}
                      <div className="space-y-3 mb-4">
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1 text-slate-300">
                            <span>10th Grade Score (ssc_p):</span>
                            <span className="text-purple-300 font-bold">{tenthScore}%</span>
                          </div>
                          <input
                            type="range"
                            min="45"
                            max="98"
                            value={tenthScore}
                            onChange={(e) => setTenthScore(Number(e.target.value))}
                            className="w-full accent-purple-500 cursor-pointer"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1 text-slate-300">
                            <span>Degree Score (degree_p):</span>
                            <span className="text-cyan-300 font-bold">{degreeScore}%</span>
                          </div>
                          <input
                            type="range"
                            min="45"
                            max="98"
                            value={degreeScore}
                            onChange={(e) => setDegreeScore(Number(e.target.value))}
                            className="w-full accent-cyan-500 cursor-pointer"
                          />
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs font-mono text-slate-300">Prior Work Experience:</span>
                          <button
                            type="button"
                            onClick={() => setHasWorkExp(!hasWorkExp)}
                            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                              hasWorkExp 
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            {hasWorkExp ? '✓ Yes (Experienced)' : '✗ No (Fresher)'}
                          </button>
                        </div>
                      </div>

                      {/* Output Probability Banner */}
                      <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-slate-400 font-mono">Predicted Outcome</p>
                          <p className={`text-sm font-bold flex items-center gap-1.5 ${isStudentPlaced ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {isStudentPlaced ? '✓ Likely Placed' : '⚠ Placement At Risk'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-slate-400 font-mono">Model Confidence</p>
                          <p className="text-sm font-mono font-bold text-purple-300">{placementProb}%</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MyRoute Interactive Transit Simulation */}
                  {project.previewType === 'transit' && (
                    <div className="rounded-2xl border border-cyan-400/30 bg-[#081226] text-slate-100 p-4 sm:p-5 shadow-2xl relative overflow-hidden w-full">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-500/20">
                        <div className="flex items-center gap-2">
                          <Navigation className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                          <span className="font-mono text-xs text-cyan-300 font-semibold">Leaflet Transit Geolocation</span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1 font-bold">
                          <Wifi className="w-3 h-3" /> PWA Cached
                        </span>
                      </div>

                      {/* Simulated Route Card */}
                      <div className="aspect-video rounded-xl bg-[#0b1b38] border border-cyan-500/20 p-4 flex flex-col justify-between mb-4 relative">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bus className="w-5 h-5 text-cyan-400" />
                            <span className="font-bold text-sm text-white">Route 420X — Express Commute</span>
                          </div>
                          <span className="text-xs font-mono text-emerald-400 font-bold">On Time</span>
                        </div>

                        {/* Route Line */}
                        <div className="my-2 relative">
                          <div className="h-1.5 bg-cyan-900/60 rounded-full w-full"></div>
                          <div className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full w-2/3"></div>
                          <div className="absolute -top-1.5 left-2/3 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-2 border-white shadow"></div>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-300">
                          <span>Sector 62 (Origin)</span>
                          <span className="text-cyan-300 font-mono font-bold">Next: 3m</span>
                          <span>Anand Vihar (Term.)</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-mono">Service Worker: Active</span>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                        >
                          Live Map <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Brand Sentiment Interactive NLP Simulation */}
                  {project.previewType === 'sentiment' && (
                    <div className="rounded-2xl border border-purple-400/30 bg-[#120824] text-slate-100 p-4 sm:p-5 shadow-2xl relative overflow-hidden w-full">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-500/20">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-purple-400" />
                          <span className="font-mono text-xs text-purple-300 font-semibold">NLP Sentiment Gauge</span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">
                          0.82 F1-Score
                        </span>
                      </div>

                      <div className="space-y-2 mb-3">
                        <label className="text-[11px] font-mono text-slate-400">
                          Test TF-IDF Classifier Input:
                        </label>
                        <input
                          type="text"
                          value={sentimentInput}
                          onChange={(e) => handleTestSentiment(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-slate-100 focus:outline-none focus:border-purple-400 font-sans"
                        />
                      </div>

                      {/* Quick Sentiment Options */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <button
                          onClick={() => handleTestSentiment("This full-stack system is extremely fast and robust!")}
                          className="text-[10px] px-2 py-1 rounded bg-purple-900/40 text-purple-300 hover:bg-purple-900/70 cursor-pointer"
                        >
                          + "Fast & robust"
                        </button>
                        <button
                          onClick={() => handleTestSentiment("The server had unexpected connection delays and errors.")}
                          className="text-[10px] px-2 py-1 rounded bg-purple-900/40 text-purple-300 hover:bg-purple-900/70 cursor-pointer"
                        >
                          - "Unexpected delays"
                        </button>
                      </div>

                      {/* Output Gauge */}
                      <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          {sentimentScore.label === 'Positive' && <Smile className="w-5 h-5 text-emerald-400" />}
                          {sentimentScore.label === 'Neutral' && <Meh className="w-5 h-5 text-amber-400" />}
                          {sentimentScore.label === 'Negative' && <Frown className="w-5 h-5 text-rose-400" />}
                          <div>
                            <p className="text-[10px] text-slate-400 font-mono">Predicted Polarity</p>
                            <p className={`text-sm font-bold ${sentimentScore.color}`}>{sentimentScore.label}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-slate-400 font-mono">Confidence</p>
                          <p className="text-sm font-mono font-bold text-purple-300">{sentimentScore.score}</p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
