import React from 'react';
import { ArrowRight } from 'lucide-react';

export const SmartAlignment = () => (
    <div className="bg-[#0A0A0B] rounded-[32px] p-8 text-white relative overflow-hidden h-full flex flex-col justify-center shadow-2xl">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10">
            <header className="flex justify-between items-center mb-10">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Smart Alignment</span>
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#EAB3B1]" />
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                </div>
            </header>
            <h4 className="text-xl font-semibold mb-6 tracking-tight leading-snug">What is your main<br />focus today?</h4>
            <div className="relative flex items-center group">
                <input
                    type="text"
                    placeholder="Type your goal..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:border-[#EAB3B1] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all placeholder:text-slate-600 text-slate-200"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-white text-black rounded-xl hover:scale-105 active:scale-95 transition-transform flex items-center justify-center shadow-lg">
                    <ArrowRight size={16} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    </div>
);
