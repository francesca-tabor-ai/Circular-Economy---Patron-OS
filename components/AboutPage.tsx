
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 max-w-4xl mx-auto space-y-24 pb-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <div className="inline-block px-4 py-1 rounded-full signature-gradient bg-opacity-10 text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-4">
          Our Reason for Being
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          We exist for circular economy creators <br />
          <span className="signature-text-gradient">building regenerative income.</span>
        </h2>
        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
          The circular economy needs creators who regenerate value. <br />
          We built the platform exclusively for them.
        </p>
      </section>

      {/* Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section className="space-y-6">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">The Problem</h3>
          <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
            <p>Linear economies extract value. Circular economies regenerate it. Too many circular economy creators are forced into extractive models just to survive.</p>
            <p>We built PatronOS exclusively for the circular economy to change that.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Our Belief</h3>
          <div className="space-y-4 text-slate-900 font-semibold leading-relaxed">
            <p>We believe the future belongs to creators who are:</p>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full signature-gradient"></div>
                <span>Regenerative, not extractive</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full signature-gradient"></div>
                <span>Circular economy-focused</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full signature-gradient"></div>
                <span>Building systems that cycle back</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full signature-gradient"></div>
                <span>Free to create work that regenerates value</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Feature Section */}
      <section className="bg-slate-50 p-16 rounded-[60px] border border-slate-50 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 signature-gradient opacity-5 rounded-full blur-3xl -mr-48 -mt-48 transition-opacity group-hover:opacity-10"></div>
        <div className="max-w-2xl space-y-8 relative z-10">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">What We Do</h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            PatronOS helps circular economy creators turn their most aligned supporters into reliable monthly income — through regenerative, circular models that cycle value back to community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No Feeds</p>
              <p className="text-xs font-bold text-slate-900">Focused Connection</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No Algos</p>
              <p className="text-xs font-bold text-slate-900">Direct Delivery</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No Games</p>
              <p className="text-xs font-bold text-slate-900">Meaningful Engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving / Patronage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section className="space-y-8">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Who We Serve</h3>
          <div className="space-y-4 text-slate-600 font-medium">
            <p>We are built exclusively for circular economy creators. For those building regenerative systems, not extractive ones.</p>
            <p className="text-slate-900 font-bold">Circular design, sustainability, regeneration, waste reduction, and circular economy innovation.</p>
          </div>
        </section>
        <section className="space-y-8">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Why Patronage</h3>
          <div className="space-y-4 text-slate-600 font-medium">
            <p>Circular patronage is one of the oldest ways regenerative systems have survived. We're rebuilding it for the circular economy — using modern tools.</p>
          </div>
        </section>
      </div>

      {/* Vision / Promise */}
      <section className="border-t border-slate-50 pt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Our Vision</h4>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">A world where circular economy creators build regenerative income — not extractive content.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Our Promise</h4>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">Circular economics and tools that regenerate value — not extract it.</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">The Future</h4>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">Fewer creators extracting value. More circular economy creators building regenerative systems.</p>
        </div>
      </section>

      {/* Footer Branding */}
      <section className="text-center pt-12">
        <div className="w-12 h-12 signature-gradient rounded-2xl mx-auto mb-6 flex items-center justify-center text-white">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PatronOS infrastructure layer</p>
      </section>
    </div>
  );
};

export default AboutPage;
