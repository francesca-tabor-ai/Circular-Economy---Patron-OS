
import React, { useState } from 'react';
import { Creator, PatronTier } from '../types';
import { generateTierRecommendations, generateWhyYouMatterMessage } from '../services/geminiService';

interface ConversionEngineProps {
  creator: Creator;
}

const ConversionEngine: React.FC<ConversionEngineProps> = ({ creator }) => {
  const [loading, setLoading] = useState(false);
  const [tiers, setTiers] = useState<PatronTier[]>([
    { id: '1', name: 'Support', price: 10, description: 'Basic support for the mission.', benefits: ['Patron-only posts', 'Impact summary'] },
    { id: '2', name: 'Participate', price: 25, description: 'Monthly live group sessions.', benefits: ['All previous', 'Monthly live circle', 'Discord access'] },
    { id: '3', name: 'Inner Circle', price: 100, description: 'Direct monthly 1:1 mentorship.', benefits: ['All previous', 'Direct messaging', 'Private workshop'] },
  ]);
  const [whyYouMatter, setWhyYouMatter] = useState<string>("Your support allows me to guide those who seek silence in our noisy world, making deep healing accessible to all.");

  const handleSmartTiers = async () => {
    setLoading(true);
    const recs = await generateTierRecommendations(creator.bio, creator.mission);
    if (recs) {
      setTiers(recs.map((r: any, idx: number) => ({ ...r, id: idx.toString() })));
    }
    setLoading(false);
  };

  const handleGenerateMessaging = async () => {
    setLoading(true);
    const msg = await generateWhyYouMatterMessage(creator.name, creator.mission);
    if (msg) setWhyYouMatter(msg);
    setLoading(false);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 space-y-20">
      <section>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Subscription Architecture</h2>
            <p className="text-sm font-medium text-slate-400 mt-1">Design tiers that prioritize relationship depth over volume.</p>
          </div>
          <button 
            onClick={handleSmartTiers}
            disabled={loading}
            className="flex items-center space-x-2 text-[10px] font-bold text-slate-900 bg-slate-50 px-6 py-3 rounded-full hover:bg-slate-100 transition border border-slate-100 uppercase tracking-widest disabled:opacity-50"
          >
            <span>{loading ? 'Optimizing Architecture...' : '✨ Optimize with Gemini'}</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tiers.map((tier) => (
            <div key={tier.id} className="bg-white border border-slate-100 rounded-[32px] p-10 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-50 group-hover:signature-gradient transition-all"></div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-900 transition-colors">{tier.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold tracking-tighter">${tier.price}</span>
                    <span className="text-xs font-bold text-slate-400 ml-1">/mo</span>
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-10 leading-relaxed min-h-[48px]">{tier.description}</p>
              <div className="space-y-4 mb-10">
                {tier.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center text-xs font-bold text-slate-400">
                    <div className="w-4 h-4 rounded-full border border-slate-100 flex items-center justify-center mr-3 group-hover:border-teal-200 group-hover:text-teal-500 transition-colors">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>
              <button className="w-full py-4 rounded-2xl bg-slate-50 text-[10px] font-bold text-slate-900 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                Modify Logic
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <section className="bg-slate-50 p-12 rounded-[40px] border border-slate-50">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900">Value Proposition</h3>
              <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Meaning-First Interface</p>
            </div>
            <button 
              onClick={handleGenerateMessaging}
              disabled={loading}
              className="text-[10px] font-bold signature-text-gradient uppercase tracking-widest hover:opacity-80 transition disabled:opacity-50"
            >
              {loading ? 'Refining...' : 'Regenerate Narrative'}
            </button>
          </div>
          
          <div className="relative">
            <textarea 
              value={whyYouMatter}
              onChange={(e) => setWhyYouMatter(e.target.value)}
              className="w-full h-40 p-8 bg-white border-none rounded-3xl text-slate-800 text-base leading-relaxed focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-shadow placeholder:text-slate-300 font-medium"
              placeholder="Why does your support matter?"
            />
          </div>
          
          <div className="mt-10 flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <svg className="w-4 h-4 mr-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Semantic Trust Engine Verified
          </div>
        </section>

        <section>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Conversion Preview</p>
          <div className="bg-white border border-slate-100 rounded-[48px] p-12 text-center shadow-2xl shadow-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <div className="signature-gradient w-12 h-12 rounded-full opacity-5"></div>
            </div>
            <img src="https://picsum.photos/seed/maya/300/300" className="w-24 h-24 rounded-full mx-auto mb-8 border-4 border-slate-50 shadow-sm" alt="Maya Sol" />
            <h5 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Maya Sol</h5>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Independent Cultural Guide</p>
            <div className="bg-slate-50 p-8 rounded-[32px] mb-10">
              <p className="text-lg font-medium text-slate-700 italic leading-relaxed">"{whyYouMatter}"</p>
            </div>
            <button className="w-full bg-slate-900 text-white py-6 rounded-[24px] text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all">
              Initiate Patronage
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConversionEngine;
