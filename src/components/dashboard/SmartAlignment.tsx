import React from 'react';
import { ArrowRight } from 'lucide-react';

export const SmartAlignment = () => (
    <div
        className="bg-[#0A0A0B] text-white relative overflow-hidden h-full flex flex-col justify-center"
        style={{ borderRadius: 'var(--radius-2xl)', padding: 'var(--spacing-xl)', boxShadow: 'var(--shadow-2xl)' }}
    >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative" style={{ zIndex: 'var(--z-base)' }}>
            <header
                className="flex justify-between items-center"
                style={{ marginBottom: 'var(--spacing-xl)' }}
            >
                <span
                    className="text-slate-500 uppercase"
                    style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', letterSpacing: '0.2em' }}
                >
                    Smart Alignment
                </span>
                <div className="flex" style={{ gap: 'var(--spacing-xs)' }}>
                    <div className="rounded-full bg-[#EAB3B1]" style={{ width: 'var(--spacing-xs)', height: 'var(--spacing-xs)' }} />
                    <div className="rounded-full bg-white/20" style={{ width: 'var(--spacing-xs)', height: 'var(--spacing-xs)' }} />
                </div>
            </header>
            <h4
                className="tracking-tight leading-snug"
                style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-lg)' }}
            >
                What is your main<br />focus today?
            </h4>
            <div className="relative flex items-center group">
                <input
                    type="text"
                    placeholder="Type your goal..."
                    className="w-full bg-white/5 border border-white/10 text-slate-200 focus:outline-none focus:border-[#EAB3B1] transition-all placeholder:text-slate-600"
                    style={{
                        borderRadius: 'var(--radius-xl)',
                        padding: 'var(--spacing-md) var(--spacing-lg) var(--spacing-md) var(--spacing-md)',
                        paddingRight: '3.5rem',
                        fontSize: 'var(--font-size-sm)',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                    }}
                />
                <button
                    className="absolute top-1/2 -translate-y-1/2 bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95"
                    style={{
                        right: 'var(--spacing-sm)',
                        padding: 'var(--spacing-sm)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-lg)',
                        transition: 'transform var(--transition-base) var(--ease-out-expo)'
                    }}
                >
                    <ArrowRight size={16} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    </div>
);
