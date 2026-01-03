import Link from 'next/link';
import { Search } from 'lucide-react';
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { StickyNote } from '@/components/dashboard/StickyNote';
import { SmartAlignment } from '@/components/dashboard/SmartAlignment';
import { StudyLab } from '@/components/dashboard/StudyLab';

const Canvas = ({ children }: { children: React.ReactNode }) => (
    <div
        className="col-span-12 lg:col-span-8 bg-white border border-slate-100 min-h-[700px] relative overflow-hidden"
        style={{
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--spacing-2xl)',
            boxShadow: 'var(--shadow-sm)',
            backgroundImage: `radial-gradient(#E2E8F0 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px'
        }}
    >
        <div className="flex items-center mb-10 relative" style={{ gap: 'var(--spacing-sm)', zIndex: 'var(--z-base)' }}>
            <span className="relative flex" style={{ height: 'var(--spacing-sm)', width: 'var(--spacing-sm)' }}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full bg-green-500" style={{ height: 'var(--spacing-sm)', width: 'var(--spacing-sm)' }}></span>
            </span>
            <h2 className="uppercase text-slate-400" style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', letterSpacing: '0.2em' }}>Live Canvas</h2>
        </div>
        {children}
    </div>
);

const Dashboard = () => {
    return (
        <MainLayout>
            <div className="min-h-screen bg-[#F8F9FA] font-sans text-slate-900 selection:bg-[#EAB3B1] selection:text-white" style={{ padding: 'var(--spacing-lg) var(--spacing-xl)' }}>
                <header className="flex flex-col md:flex-row justify-between items-center" style={{ marginBottom: 'var(--spacing-xl)', gap: 'var(--spacing-lg)' }}>
                    <div className="flex items-center self-start md:self-auto uppercase" style={{ gap: 'var(--spacing-sm)', fontSize: 'var(--font-size-sm)' }}>
                        <span className="text-slate-400 tracking-widest" style={{ fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-xs)' }}>NEXUS</span>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-800 tracking-widest" style={{ fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-xs)' }}>DASHBOARD</span>
                    </div>
                    <div className="flex items-center w-full md:w-auto" style={{ gap: 'var(--spacing-md)' }}>
                        <div className="relative flex items-center w-full md:w-64">
                            <Search size={16} strokeWidth={2.5} className="absolute text-slate-400" style={{ left: 'var(--spacing-md)' }} />
                            <input
                                type="text"
                                placeholder="Search notes..."
                                className="w-full bg-slate-50 border border-slate-100 text-slate-600 placeholder:text-slate-400 focus:outline-none focus:border-[#EAB3B1]/50 focus:bg-white transition-all"
                                style={{ borderRadius: 'var(--radius-full)', padding: 'var(--spacing-sm) var(--spacing-md) var(--spacing-sm) 2.75rem', fontSize: 'var(--font-size-sm)' }}
                            />
                        </div>
                        <div className="bg-slate-200 hidden md:block" style={{ height: 'var(--size-sm)', width: '1px', margin: '0 var(--spacing-sm)' }}></div>
                        <button className="bg-[#EAB3B1] text-white uppercase tracking-widest hover:bg-[#d9a09e] hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0 ring-offset-2 focus:ring-2 ring-[#EAB3B1]" style={{ padding: 'var(--spacing-sm) var(--spacing-lg)', borderRadius: 'var(--radius-full)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-xs)', boxShadow: 'var(--shadow-lg)', transition: 'all var(--transition-slow) var(--ease-out-expo)' }}>
                            + New Note
                        </button>
                    </div>
                </header>
                <div className="grid grid-cols-12 max-w-[1600px] mx-auto" style={{ gap: 'var(--spacing-xl)' }}>
                    <Canvas>
                        <div className="relative h-full w-full min-h-[550px]">
                            <Link href="/note/1" passHref className="block">
                                <div className="absolute top-0 left-0 md:left-4 w-64 md:w-72">
                                    <StickyNote
                                        title="Gym Routine"
                                        content="Push/Pull/Legs split details. Remember to increase weight on compound lifts."
                                        category="Personal"
                                        color={{ bg: 'bg-[#F5E1E0]', text: 'text-[#d9a09e]' }}
                                        rotation="rotate-[-2deg]"
                                    />
                                </div>
                            </Link>
                            <Link href="/note/2" passHref className="block">
                                <div className="absolute top-24 left-10 md:left-[22rem] w-64 md:w-72">
                                    <StickyNote
                                        title="Project Ideas"
                                        content="Voice-based expense tracker UI revamp using the new shadcn/ui components."
                                        category="Work"
                                        color={{ bg: 'bg-slate-100', text: 'text-slate-600' }}
                                        rotation="rotate-[1deg]"
                                    />
                                </div>
                            </Link>
                            <Link href="/note/3" passHref className="block">
                                <div className="absolute top-[20rem] left-0 md:left-24 w-64 md:w-72">
                                    <StickyNote
                                        title="Biology 101"
                                        content="Review mitosis phases. Create flashcards for cell structures."
                                        category="Study"
                                        color={{ bg: 'bg-blue-50', text: 'text-blue-500' }}
                                        rotation="rotate-[-1deg]"
                                    />
                                </div>
                            </Link>
                        </div>
                    </Canvas>
                    <div className="col-span-12 lg:col-span-4 flex flex-col" style={{ gap: 'var(--spacing-lg)' }}>
                        <StudyLab />
                        <div className="flex-1 min-h-[300px]">
                            <SmartAlignment />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
