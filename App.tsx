
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import IncomeDashboard from './components/IncomeDashboard';
import ConversionEngine from './components/ConversionEngine';
import PatronFeed from './components/PatronFeed';
import AboutPage from './components/AboutPage';
import MaraChatWidget from './components/MaraChatWidget';
import { Creator } from './types';

const INITIAL_CREATOR: Creator = {
  name: "Maya Sol",
  bio: "Meditation guide and somatic healer helping urban professionals find silence.",
  mission: "To build a sanctuary of stillness in a chaotic world.",
  mrr: 3450,
  patronCount: 142,
  goal: 5000
};

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'conversion' | 'feed' | 'about'>('dashboard');
  const [creator, setCreator] = useState<Creator>(INITIAL_CREATOR);
  const mainRef = useRef<HTMLElement>(null);
  const prevTabRef = useRef<'dashboard' | 'conversion' | 'feed' | 'about' | null>(null);

  // Scroll to top when tab changes
  useEffect(() => {
    if (prevTabRef.current !== null && prevTabRef.current !== activeTab) {
      // Smooth scroll to top
      if (mainRef.current) {
        mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    prevTabRef.current = activeTab;
  }, [activeTab]);

  const handleNavigateToDashboard = () => {
    setShowLanding(false);
    setActiveTab('dashboard');
    // Scroll to top when navigating from landing page
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleTabChange = (tab: 'dashboard' | 'conversion' | 'feed' | 'about') => {
    setActiveTab(tab);
  };

  if (showLanding) {
    return <LandingPage onNavigateToDashboard={handleNavigateToDashboard} />;
  }

  return (
    <div className="flex h-screen bg-white relative overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main ref={mainRef} className="flex-1 overflow-y-auto">
        <header className="px-10 py-8 border-b border-slate-50 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-20">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              {activeTab === 'dashboard' && 'Stability Engine'}
              {activeTab === 'conversion' && 'Direct Conversion'}
              {activeTab === 'feed' && 'Patron Connection'}
              {activeTab === 'about' && 'The Manifesto'}
            </h1>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              {activeTab === 'about' ? 'Our Mission & Philosophy' : `Maya Sol — PatronOS Dashboard`}
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Current MRR</p>
              <p className="text-sm font-semibold text-slate-900">${creator.mrr.toLocaleString()}</p>
            </div>
            <div className="h-8 w-px bg-slate-100"></div>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
              Live Profile
            </button>
          </div>
        </header>

        <div className="px-10 py-12 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && <IncomeDashboard creator={creator} />}
          {activeTab === 'conversion' && <ConversionEngine creator={creator} />}
          {activeTab === 'feed' && <PatronFeed creator={creator} />}
          {activeTab === 'about' && <AboutPage />}
        </div>
      </main>

      {/* Persistent Chat Widget */}
      <MaraChatWidget creator={creator} activeTab={activeTab} />
    </div>
  );
};

export default App;
