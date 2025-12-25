import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const StudyLab = () => (
    <div className="relative overflow-hidden group rounded-[32px] p-8 border border-white/60 bg-white/50 backdrop-blur-xl shadow-xl shadow-[#EAB3B1]/10">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#EAB3B1]/20 rounded-full blur-3xl group-hover:bg-[#EAB3B1]/35 transition-all duration-700" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#F5E1E0]/40 rounded-full blur-2xl" />
        <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#EAB3B1] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#EAB3B1]/50 group-hover:shadow-[#EAB3B1]/70 transition-shadow">
                <Sparkles size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">Study Lab</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium">
                Generate AI acronyms and summarize notes with one click.
            </p>
            <button className="w-full py-4 rounded-2xl bg-white border-2 border-[#EAB3B1]/30 text-[#d9a09e] font-bold hover:bg-[#EAB3B1] hover:text-white hover:border-[#EAB3B1] transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-lg hover:shadow-[#EAB3B1]/30">
                Open Lab <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
    </div>
);
