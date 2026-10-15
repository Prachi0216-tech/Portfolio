import React from 'react';
import { 
  X, 
  Printer, 
  FileText
} from 'lucide-react';
import { 
  personalInfo, 
  education, 
  experience, 
  projects, 
  certifications, 
  achievements 
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0e0722] text-slate-900 dark:text-slate-100 rounded-3xl border border-purple-200 dark:border-purple-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Toolbar */}
        <div className="px-6 py-4 bg-purple-50 dark:bg-purple-950/60 border-b border-purple-200 dark:border-purple-500/25 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Prachi Singh — Professional Resume
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-purple-200/60 dark:bg-purple-500/20 hover:bg-purple-300 dark:hover:bg-purple-500/40 text-slate-800 dark:text-purple-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans">
          
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-purple-200 dark:border-purple-500/20">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 flex flex-wrap items-center justify-center gap-3">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`tel:${personalInfo.phone}`} className="hover:underline">{personalInfo.phone}</a>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
            </p>
            <p className="text-xs sm:text-sm text-purple-700 dark:text-purple-400 mt-2 flex flex-wrap items-center justify-center gap-4 font-mono font-semibold">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/prachi-singh
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/Prachi0216-tech
              </a>
            </p>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 pb-1 border-b border-purple-200 dark:border-purple-500/30 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 pb-1 border-b border-purple-200 dark:border-purple-500/30 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{edu.institution}</p>
                    <p className="text-slate-700 dark:text-slate-300">{edu.degree}</p>
                  </div>
                  <div className="text-left sm:text-right text-xs font-mono text-purple-700 dark:text-purple-300 font-medium">
                    <p>{edu.location}</p>
                    <p>{edu.duration} {edu.status ? `(${edu.status})` : ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 pb-1 border-b border-purple-200 dark:border-purple-500/30 mb-3">
              Work Experience
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{exp.company}</span>
                    <span className="text-purple-700 dark:text-purple-300 font-bold ml-2">— {exp.role}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 pb-1 border-b border-purple-200 dark:border-purple-500/30 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div>
                <strong className="text-slate-900 dark:text-white">Programming Languages: </strong>
                <span>Python, JavaScript (ES6+), SQL, HTML5, CSS3</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Frontend Development: </strong>
                <span>React, Vite, Tailwind CSS, Lucide Icons, Recharts, PWA Architecture</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Backend & AI: </strong>
                <span>FastAPI, Node.js, Express.js, RESTful APIs, WebSockets, PyTorch, Scikit-learn</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Databases & Cloud: </strong>
                <span>MongoDB, PyMongo, MS SQL Server, Cloud Deployment (Render/Vercel)</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Core Tools & Computer Vision: </strong>
                <span>OpenCV, PyTorch (FaceNet / InceptionResnetV1), MTCNN, Git, GitHub, VS Code, Postman</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 pb-1 border-b border-purple-200 dark:border-purple-500/30 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <p className="font-bold text-slate-900 dark:text-white">
                      {proj.title}
                    </p>
                    <div className="flex items-center gap-2 font-mono text-xs text-purple-700 dark:text-purple-400 font-semibold">
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="underline">
                          Live Demo
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="underline">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 pb-1 border-b border-purple-200 dark:border-purple-500/30 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 dark:text-slate-300">
                {certifications.map((c) => (
                  <li key={c.id}>
                    <strong>{c.title}</strong> – {c.issuer}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 pb-1 border-b border-purple-200 dark:border-purple-500/30 mb-2">
                Achievements & Extracurricular
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 dark:text-slate-300">
                {achievements.map((a) => (
                  <li key={a.id}>
                    <strong>{a.title}</strong> ({a.date})
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
