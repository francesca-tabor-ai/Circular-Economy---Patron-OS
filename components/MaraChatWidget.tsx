
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Creator, ChatMessage } from '../types';
import { chatWithMara } from '../services/geminiService';

interface MaraChatWidgetProps {
  creator: Creator;
  activeTab: 'dashboard' | 'conversion' | 'feed' | 'about';
}

const MaraChatWidget: React.FC<MaraChatWidgetProps> = ({ creator, activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "Hello. I'm Mara Elion, founder of PatronOS. I'm here to listen and guide you through the complexities of building a sustainable creative life. Whether you're feeling the weight of the 'noise' or seeking deeper connection with your supporters, I'm ready to walk with you. What's moving in you today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const starterProbes = useMemo(() => {
    switch (activeTab) {
      case 'dashboard':
        return [
          "How can I reduce my churn?",
          "What does my stability index mean?",
          "How to prepare for a slow month?"
        ];
      case 'conversion':
        return [
          "Is my value proposition too salesy?",
          "Tips for converting passive followers.",
          "How should I price my Inner Circle?"
        ];
      case 'feed':
        return [
          "How to acknowledge a patron milestone?",
          "Ideas for a monthly impact summary.",
          "How to handle a difficult message?"
        ];
      case 'about':
        return [
          "What does 'renewal guide' mean?",
          "Why rebuild the patronage model?",
          "How can I build a circular system?"
        ];
      default:
        return [
          "Tell me your story, Mara.",
          "How do I get started?",
          "What is PatronOS?"
        ];
    }
  }, [activeTab]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg = textToSend.trim();
    if (!textOverride) setInput('');
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatWithMara(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: response || "I'm reflecting on that. Could you tell me more about what you're feeling?" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "I seem to have lost my connection for a moment. Let's take a breath and try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[420px] h-[680px] max-h-[85vh] bg-white border border-slate-100 rounded-[40px] shadow-2xl shadow-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">
          {/* Header */}
          <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-white/50 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
                  className="w-12 h-12 rounded-2xl object-cover shadow-lg shadow-teal-500/10" 
                  alt="Mara Elion" 
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-none mb-1">Mara Elion</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Founder & Renewal Guide</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-300 hover:text-slate-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-[28px] text-sm leading-relaxed font-medium shadow-sm transition-all duration-300 ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-50 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-3 rounded-[24px] rounded-tl-none border border-slate-50 shadow-sm flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Footer & Probes */}
          <div className="p-6 border-t border-slate-50 bg-white space-y-4">
            {messages.length < 3 && !isLoading && (
              <div className="flex flex-col space-y-2">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1 mb-1">Common Reflections</p>
                {starterProbes.map((probe, i) => (
                  <button 
                    key={i}
                    onClick={() => handleSend(probe)}
                    className="text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-2xl text-xs font-semibold text-slate-600 transition-colors border border-slate-100/50"
                  >
                    {probe}
                  </button>
                ))}
              </div>
            )}
            
            <div className="flex items-center space-x-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Share your thoughts with Mara..." 
                className="flex-1 p-4 bg-slate-50 border-none rounded-[20px] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/10 placeholder:text-slate-300"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="bg-slate-900 p-4 rounded-[20px] text-white shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button - Now featuring Mara's Portrait */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-20 h-20 rounded-[28px] flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl ${isOpen ? 'bg-slate-900 shadow-slate-200' : 'bg-white p-1.5 shadow-teal-500/10'}`}
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <>
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full rounded-[24px] object-cover" 
              alt="Mara Elion" 
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 border-4 border-white rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 px-2 py-0.5 bg-slate-900 text-[8px] font-black text-white rounded-md uppercase tracking-widest shadow-sm">Online</div>
          </>
        )}
      </button>
    </div>
  );
};

export default MaraChatWidget;
