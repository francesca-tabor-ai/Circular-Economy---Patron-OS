
import React, { useState } from 'react';
import { Creator, Post } from '../types';

const INITIAL_POSTS: Post[] = [
  { id: '1', title: 'Finding Stillness in Winter', content: 'Today I recorded a new 20-minute guide focused on deep winter hibernation and internal listening...', date: 'Feb 12', isPrivate: true, type: 'text' },
  { id: '2', title: 'Impact Summary: January Cycle', content: 'Because of your support, I was able to dedicate 40 hours to teaching sliding-scale sessions for health workers...', date: 'Feb 05', isPrivate: false, type: 'drop' },
  { id: '3', title: 'March Circle Registration', content: 'Secure your spot for our live equinox circle. We will be exploring somatic movement and collective resonance...', date: 'Jan 28', isPrivate: true, type: 'text' },
];

interface PatronFeedProps {
  creator: Creator;
}

const PatronFeed: React.FC<PatronFeedProps> = ({ creator }) => {
  const [posts] = useState<Post[]>(INITIAL_POSTS);
  const [messageMode, setMessageMode] = useState(false);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-16">
        <div className="bg-slate-50 p-1.5 rounded-2xl flex space-x-1 border border-slate-100">
          <button 
            onClick={() => setMessageMode(false)}
            className={`px-8 py-3 rounded-[14px] text-[10px] font-bold uppercase tracking-widest transition-all ${!messageMode ? 'bg-white text-slate-900 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Content Drops
          </button>
          <button 
            onClick={() => setMessageMode(true)}
            className={`px-8 py-3 rounded-[14px] text-[10px] font-bold uppercase tracking-widest transition-all ${messageMode ? 'bg-white text-slate-900 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Direct Channel
          </button>
        </div>
        <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-100">
          Publish Drop
        </button>
      </div>

      {!messageMode ? (
        <div className="space-y-12">
          {posts.map(post => (
            <div key={post.id} className="bg-white border border-slate-50 rounded-[40px] p-12 hover:border-slate-100 hover:shadow-2xl hover:shadow-slate-50 transition-all duration-500 group relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${post.isPrivate ? 'bg-indigo-50 text-indigo-500' : 'bg-slate-50 text-slate-400'}`}>
                  {post.isPrivate ? 'Inner Circle Only' : 'Public Mission'}
                </div>
                <div className="h-1 w-1 bg-slate-200 rounded-full"></div>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{post.date}</span>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest ml-auto">{post.type}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
              <p className="text-base text-slate-500 font-medium leading-relaxed max-w-3xl mb-10">{post.content}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/patron${i}/80/80`} className="w-10 h-10 rounded-full border-4 border-white shadow-sm" alt="Patron" />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400 border-4 border-white">+32</div>
                  </div>
                  <div className="h-4 w-px bg-slate-100"></div>
                  <div className="flex items-center space-x-4 text-slate-300 text-xs font-bold">
                    <span className="flex items-center hover:text-red-500 transition-colors cursor-pointer">
                      <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                      45
                    </span>
                    <span className="flex items-center hover:text-slate-900 transition-colors cursor-pointer">
                      <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.827-1.233L3 21l1.65-4.5A8.959 8.959 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      12
                    </span>
                  </div>
                </div>
                <button className="text-[10px] font-bold text-slate-900 uppercase tracking-widest bg-slate-50 px-6 py-3 rounded-full hover:bg-slate-100 transition-all opacity-0 group-hover:opacity-100">Full Drop Analytics</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[48px] border border-slate-50 shadow-2xl shadow-slate-100 flex h-[700px] overflow-hidden">
          {/* Messages Sidebar */}
          <div className="w-80 border-r border-slate-50 flex flex-col">
            <div className="p-8 border-b border-slate-50">
              <input type="text" placeholder="Search relationship..." className="w-full text-xs font-bold p-4 bg-slate-50 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/10 placeholder:text-slate-300 uppercase tracking-widest" />
            </div>
            <div className="flex-1 overflow-y-auto">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`p-6 flex items-center space-x-4 hover:bg-slate-50 cursor-pointer transition-all ${i === 1 ? 'bg-slate-50/50' : ''}`}>
                  <div className="relative">
                    <img src={`https://picsum.photos/seed/p${i}/100/100`} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Patron" />
                    <div className="absolute top-0 right-0 w-3 h-3 bg-teal-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-slate-900 truncate">Patron Identity #{i+100}</p>
                    <p className="text-[10px] font-bold text-slate-400 truncate uppercase tracking-tight">Inner Circle Member</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Chat Window */}
          <div className="flex-1 flex flex-col bg-slate-50/30">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-white">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full signature-gradient"></div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Patron Identity #101</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Connection</p>
                </div>
              </div>
              <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">Profile Details</button>
            </div>
            <div className="flex-1 p-10 space-y-8 overflow-y-auto">
              <div className="flex justify-end">
                <div className="bg-slate-900 text-white px-8 py-5 rounded-[32px] rounded-tr-none text-sm font-medium max-w-[70%] shadow-lg shadow-slate-200 leading-relaxed">
                  Hi! I've attached the meditative loop we discussed. Let me know how the silence feels today.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white border border-slate-50 text-slate-800 px-8 py-5 rounded-[32px] rounded-tl-none text-sm font-medium max-w-[70%] shadow-sm leading-relaxed">
                  Thank you Maya. The stillness practice has really been grounding me during this transition. Your work matters deeply.
                </div>
              </div>
            </div>
            <div className="p-8 bg-white border-t border-slate-50">
              <div className="flex items-center space-x-4">
                <input type="text" placeholder="Design a mindful response..." className="flex-1 p-5 bg-slate-50 border-none rounded-[24px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/10" />
                <button className="bg-slate-900 p-5 rounded-[24px] text-white shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatronFeed;
