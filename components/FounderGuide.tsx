
import React, { useState, useRef, useEffect } from 'react';
import { Creator, ChatMessage } from '../types';
import { chatWithMara } from '../services/geminiService';

interface FounderGuideProps {
  creator: Creator;
}

const FounderGuide: React.FC<FounderGuideProps> = ({ creator }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello. I'm Mara. I'm here to listen and guide you as you build your community. What's on your mind today as you look at your mission?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatWithMara(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: response || "I'm reflecting on that. Could you tell me more?" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "I seem to have lost my connection for a moment. Let's take a breath and try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 max-w-4xl mx-auto h-[75vh] flex flex-col">
      <div className="flex-1 overflow-hidden bg-white border border-slate-50 rounded-[40px] shadow-2xl shadow-slate-100 flex flex-col relative">
        {/* Header */}
        <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 signature-gradient rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Mara Elion</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Founder & Renewal Guide</p>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-slate-50 rounded-full">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Values-Anchored Guidance</p>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-8 py-6 rounded-[32px] text-base leading-relaxed font-medium shadow-sm transition-all duration-300 ${
                msg.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-tr-none' 
                  : 'bg-slate-50 text-slate-800 border border-slate-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-50 px-8 py-6 rounded-[32px] rounded-tl-none border border-slate-100 shadow-sm flex items-center space-x-2">
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-8 border-t border-slate-50 bg-white">
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Mara about your mission or community health..." 
              className="flex-1 p-6 bg-slate-50 border-none rounded-[24px] text-base font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/10 placeholder:text-slate-300"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-slate-900 p-6 rounded-[24px] text-white shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all disabled:opacity-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Mara listens for depth, not metrics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderGuide;
