
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Creator } from '../types';

const MOCK_INCOME_DATA = [
  { month: 'Sep', mrr: 1200 },
  { month: 'Oct', mrr: 1500 },
  { month: 'Nov', mrr: 1900 },
  { month: 'Dec', mrr: 2100 },
  { month: 'Jan', mrr: 2800 },
  { month: 'Feb', mrr: 3450 },
  { month: 'Mar (Proj)', mrr: 3900 },
];

interface IncomeDashboardProps {
  creator: Creator;
}

const IncomeDashboard: React.FC<IncomeDashboardProps> = ({ creator }) => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Total Stability Index</p>
          <div className="flex items-baseline space-x-3">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">$3,450</h2>
            <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">+12.4%</span>
          </div>
          <p className="text-xs text-slate-400 mt-3 font-medium">Predicted MRR for next cycle.</p>
        </div>

        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Coverage Runway</p>
          <div className="flex items-baseline space-x-3">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">8.5 <span className="text-lg text-slate-400">mo</span></h2>
          </div>
          <p className="text-xs text-slate-400 mt-3 font-medium">Months of sustainable creation.</p>
        </div>

        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Network Churn</p>
          <div className="flex items-baseline space-x-3">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">1.2%</h2>
            <span className="text-[10px] font-bold text-slate-400 border border-slate-100 px-2 py-0.5 rounded-full uppercase">Optimal</span>
          </div>
          <p className="text-xs text-slate-400 mt-3 font-medium">98.8% retention rate last 90 days.</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-slate-50/50 p-10 rounded-[40px] border border-slate-50">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">Creation Revenue</h3>
            <p className="text-sm font-medium text-slate-400 mt-1">Growth driven by depth, not virality.</p>
          </div>
          <div className="flex space-x-2">
             <button className="px-4 py-1.5 bg-white border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider hover:bg-slate-50 transition">History</button>
             <button className="px-4 py-1.5 bg-slate-900 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Projection</button>
          </div>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_INCOME_DATA}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="10 10" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} dy={20} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} dx={-20} />
              <Tooltip 
                cursor={{ stroke: '#94a3b8', strokeWidth: 1 }}
                contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', padding: '20px'}} 
              />
              <Area 
                type="monotone" 
                dataKey="mrr" 
                stroke="#0f172a" 
                strokeWidth={3} 
                fill="url(#colorGradient)" 
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6">
        <div className="space-y-8">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Network Health Alerts</h4>
          <div className="space-y-6">
            <div className="flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mr-5 transition-transform group-hover:scale-105">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Dormant Supporters</p>
                <p className="text-xs text-slate-400 font-medium">3 patrons haven't engaged in 2 weeks. Retention nudge suggested.</p>
              </div>
              <button className="ml-auto text-[10px] font-bold text-slate-900 bg-slate-50 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Action</button>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mr-5 transition-transform group-hover:scale-105">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Milestone Detected</p>
                <p className="text-xs text-slate-400 font-medium">12 patrons reaching their 6-month anniversary today.</p>
              </div>
              <button className="ml-auto text-[10px] font-bold text-slate-900 bg-slate-50 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Gift</button>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-10 rounded-[40px] text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 signature-gradient opacity-10 rounded-full -mr-32 -mt-32 blur-3xl transition-opacity group-hover:opacity-20"></div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Sustainable Growth</p>
          <h4 className="text-2xl font-bold tracking-tight mb-8">You are 69% of the way to total creative independence.</h4>
          <div className="w-full h-2 bg-slate-800 rounded-full mb-10">
            <div className="h-full signature-gradient rounded-full" style={{width: '69%'}}></div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Gap to Freedom</p>
              <p className="text-xl font-bold">$1,550</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Supporter Gap</p>
              <p className="text-xl font-bold">~42 Patrons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeDashboard;
