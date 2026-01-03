import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const StudyLab = () => (
    <div
        className="relative overflow-hidden group border border-white/60 bg-white/50 backdrop-blur-xl"
        style={{
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--spacing-xl)',
            boxShadow: 'var(--shadow-xl)'
        }}
    >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#EAB3B1]/20 rounded-full blur-3xl group-hover:bg-[#EAB3B1]/35" style={{ transition: 'all var(--transition-slower)' }} />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#F5E1E0]/40 rounded-full blur-2xl" />
        <div className="relative" style={{ zIndex: 'var(--z-base)' }}>
            <div
                className="bg-[#EAB3B1] flex items-center justify-center text-white group-hover:shadow-[#EAB3B1]/70 transition-shadow"
                style={{
                    width: 'var(--size-lg)',
                    height: 'var(--size-lg)',
                    borderRadius: 'var(--radius-xl)',
                    marginBottom: 'var(--spacing-lg)',
                    boxShadow: 'var(--shadow-lg)'
                }}
            >
                <Sparkles size={22} />
            </div>
            <h3
                className="text-slate-800 tracking-tight"
                style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-sm)' }}
            >
                Study Lab
            </h3>
            <p
                className="text-slate-500 leading-relaxed"
                style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--spacing-xl)' }}
            >
                Generate AI acronyms and summarize notes with one click.
            </p>
            <button
                className="w-full border-2 border-[#EAB3B1]/30 text-[#d9a09e] hover:bg-[#EAB3B1] hover:text-white hover:border-[#EAB3B1] flex items-center justify-center group/btn hover:shadow-lg hover:shadow-[#EAB3B1]/30"
                style={{
                    padding: 'var(--spacing-md)',
                    borderRadius: 'var(--radius-xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    background: 'white',
                    gap: 'var(--spacing-sm)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all var(--transition-slow) var(--ease-out-expo)'
                }}
            >
                Open Lab <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
    </div>
);
