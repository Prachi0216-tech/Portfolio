import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Search, 
  Sparkles, 
  CheckCircle, 
  Cpu, 
  Terminal,
  Layers,
  Zap,
  Flame,
  Filter
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Flatten or filter skills
  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(s => ({ ...s, categoryName: cat.name, categoryId: cat.id }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.categoryId === selectedCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/15 light:bg-purple-200/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-600/10 dark:bg-indigo-600/15 light:bg-indigo-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 dark:text-purple-300 light:text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Skills</span>
          </h2>
          <p className="mt-3 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            A versatile toolkit spanning full-stack web engineering, async REST APIs, real-time WebSockets, and deep learning computer vision models.
          </p>
        </div>

        {/* Filter Controls: Tabs & Live Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-purple-950/30 dark:bg-purple-950/40 light:bg-purple-50 border border-purple-500/25">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-purple-900 hover:bg-purple-500/10'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-purple-900 hover:bg-purple-500/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. FastAPI, React)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-purple-950/20 dark:bg-purple-950/30 light:bg-white border border-purple-500/25 focus:border-purple-500 focus:outline-none text-xs sm:text-sm text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-purple-950/20 dark:bg-purple-950/30 light:bg-white border border-purple-500/20 dark:border-purple-500/20 light:border-purple-200/80 hover:border-purple-500/60 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
                <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 group-hover:bg-purple-500/25 text-purple-300 dark:text-purple-300 light:text-purple-700 transition-colors">
                  <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-400/20 text-purple-300 dark:text-purple-300 light:text-purple-800">
                  {skill.categoryName}
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="font-bold text-base text-white dark:text-white light:text-slate-900 group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-xs text-purple-300/80 dark:text-purple-300/80 light:text-purple-700 mt-0.5 line-clamp-1">
                  {skill.tag}
                </p>

                {/* Progress Bar & Proficiency */}
                <div className="mt-4 pt-3 border-t border-purple-500/15">
                  <div className="flex justify-between items-center text-xs mb-1.5 font-mono">
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">Proficiency</span>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-purple-950/50 dark:bg-purple-950/60 light:bg-purple-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-700 group-hover:from-purple-400 group-hover:to-cyan-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search returns nothing */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 px-4 rounded-2xl border border-purple-500/20 bg-purple-950/20">
            <p className="text-slate-300 font-medium">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-purple-400 underline font-semibold"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Categorized Showcase Highlights Banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/25 flex items-start gap-3">
            <Zap className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-white dark:text-white light:text-slate-900">Modern Frontend & PWA</h5>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1 leading-relaxed">
                React, Vite, Tailwind CSS, Lucide, Recharts data charts, and Progressive Web App service workers.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/25 flex items-start gap-3">
            <Server className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-white dark:text-white light:text-slate-900">Async Backend & WebSockets</h5>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1 leading-relaxed">
                High-performance FastAPI, Node.js, Express, bi-directional WebSockets, and state machine transitions.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/25 flex items-start gap-3">
            <Cpu className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-white dark:text-white light:text-slate-900">Computer Vision & Deep Learning</h5>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1 leading-relaxed">
                PyTorch, FaceNet embeddings (InceptionResnetV1), MTCNN face detection, and OpenCV image manipulation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
