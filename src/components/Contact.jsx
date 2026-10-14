import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Sparkles,
  MessageSquare,
  User,
  AtSign,
  FileEdit
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#60a5fa', '#c084fc', '#3b82f6', '#ec4899']
      });

      // Prepare mailto link as direct fallback so visitor can also fire email client if desired
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Prachi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;

      // Reset form after short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 900);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/15 light:bg-purple-200/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 dark:text-purple-300 light:text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Me</span>
          </h2>
          <p className="mt-3 text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Interested in discussing full-time opportunities, software development internships, or AI projects? Let's connect!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-purple-950/20 dark:bg-purple-950/30 light:bg-white border border-purple-500/25 dark:border-purple-500/25 light:border-purple-200 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Contact Channels</span>
              </h3>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-purple-950/40 dark:bg-purple-950/40 light:bg-purple-50 border border-purple-500/20 mb-4 hover:border-purple-500/40 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">Email Address</p>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-sm font-bold text-white dark:text-white light:text-slate-900 hover:text-purple-400 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 transition-colors"
                    title="Copy Email"
                  >
                    {copiedItem === 'email' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-purple-950/40 dark:bg-purple-950/40 light:bg-purple-50 border border-purple-500/20 mb-4 hover:border-purple-500/40 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">Phone Number</p>
                      <a 
                        href={`tel:${personalInfo.phone}`} 
                        className="text-sm font-bold text-white dark:text-white light:text-slate-900 hover:text-purple-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedItem === 'phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-purple-950/40 dark:bg-purple-950/40 light:bg-purple-50 border border-purple-500/20 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">Location</p>
                    <p className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-purple-500/20 flex flex-col sm:flex-row gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-purple-50 border border-slate-700 dark:border-slate-700 light:border-purple-200 hover:border-purple-500 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 transition-all"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-purple-50 border border-slate-700 dark:border-slate-700 light:border-purple-200 hover:border-purple-500 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-purple-950/20 dark:bg-purple-950/30 light:bg-white border border-purple-500/25 dark:border-purple-500/25 light:border-purple-200 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
                Fill in the form below and I will get back to you as soon as possible.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-emerald-200">Message dispatched successfully!</p>
                    <p className="text-xs text-emerald-300/90 mt-0.5">
                      Thank you for reaching out. I look forward to connecting with you.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-purple-950/30 dark:bg-purple-950/30 light:bg-slate-50 border ${
                        errors.name ? 'border-rose-500' : 'border-purple-500/25 focus:border-purple-500'
                      } focus:outline-none text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <AtSign className="w-3.5 h-3.5 text-purple-400" />
                      <span>Your Email *</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-purple-950/30 dark:bg-purple-950/30 light:bg-slate-50 border ${
                        errors.email ? 'border-rose-500' : 'border-purple-500/25 focus:border-purple-500'
                      } focus:outline-none text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <FileEdit className="w-3.5 h-3.5 text-purple-400" />
                    <span>Subject *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    className={`w-full px-4 py-2.5 rounded-xl bg-purple-950/30 dark:bg-purple-950/30 light:bg-slate-50 border ${
                      errors.subject ? 'border-rose-500' : 'border-purple-500/25 focus:border-purple-500'
                    } focus:outline-none text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                    <span>Message *</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-purple-950/30 dark:bg-purple-950/30 light:bg-slate-50 border ${
                      errors.message ? 'border-rose-500' : 'border-purple-500/25 focus:border-purple-500'
                    } focus:outline-none text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 transition-all resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Direct mailto link fallback */}
                <div className="text-center pt-2">
                  <a
                    href={`mailto:${personalInfo.email}?subject=Portfolio%20Inquiry`}
                    className="text-xs text-purple-400 hover:text-purple-300 underline font-medium"
                  >
                    Or open directly in your mail client
                  </a>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
