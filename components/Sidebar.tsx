
import React from 'react';

interface SidebarProps {
  activeTab: 'dashboard' | 'conversion' | 'feed' | 'about';
  onTabChange: (tab: 'dashboard' | 'conversion' | 'feed' | 'about') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Stability', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    )},
    { id: 'conversion', label: 'Conversion', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
    )},
    { id: 'feed', label: 'Experience', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    )},
    { id: 'about', label: 'About Us', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )},
  ];

  return (
    <div className="w-24 md:w-72 bg-white border-r border-slate-50 flex flex-col h-full sticky top-0">
      <div className="p-8">
        <div className="flex items-center space-x-3 mb-12">
          <div className="w-10 h-10 signature-gradient rounded-[12px] flex items-center justify-center text-white shadow-xl shadow-teal-500/10 transition-transform duration-300 hover:scale-110 hover:rotate-3 cursor-pointer">
             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
          <span className="hidden md:block text-xl font-bold tracking-tight text-slate-900 transition-opacity duration-300 hover:opacity-80">Patron<span className="text-slate-400">OS</span></span>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id as any)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 group hover:scale-[1.02] active:scale-[0.98] ${
                activeTab === item.id 
                  ? 'bg-slate-50 text-slate-900 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50/50'
              }`}
            >
              <div className={`p-2 rounded-xl transition-all duration-300 ${activeTab === item.id ? 'bg-white shadow-sm scale-110' : 'group-hover:bg-white/50 group-hover:scale-105'}`}>
                {item.icon}
              </div>
              <span className="hidden md:block ml-3 transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-8">
        <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 flex items-center space-x-3 hover:bg-slate-100 hover:shadow-md cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/maya/200/200" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm transition-transform duration-300 group-hover:scale-110" 
              alt="Maya Sol"
              loading="lazy"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
          </div>
          <div className="hidden md:block overflow-hidden">
            <p className="text-xs font-bold text-slate-900 truncate">Maya Sol</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Creator Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
