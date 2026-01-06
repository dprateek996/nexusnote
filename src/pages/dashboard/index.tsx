import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Plus, Search, Grid3x3, List, Star, Folder } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { StickyNote } from '@/components/dashboard/StickyNote';

const Dashboard = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [activeFilter, setActiveFilter] = useState<'all' | 'personal' | 'work' | 'study'>('all');

    const notes = [
        {
            id: 1,
            title: "Gym Routine",
            content: "Push/Pull/Legs split details. Remember to increase weight on compound lifts.",
            category: "Personal",
            color: { bg: 'bg-[#F5E1E0]', text: 'text-[#d9a09e]' },
            date: "Dec 23, 2025",
            isPinned: true
        },
        {
            id: 2,
            title: "Project Ideas",
            content: "Voice-based expense tracker UI revamp using the new shadcn/ui components.",
            category: "Work",
            color: { bg: 'bg-slate-100', text: 'text-slate-600' },
            date: "Dec 22, 2025",
            isPinned: false
        },
        {
            id: 3,
            title: "Biology 101",
            content: "Review mitosis phases. Create flashcards for cell structures.",
            category: "Study",
            color: { bg: 'bg-blue-50', text: 'text-blue-500' },
            date: "Dec 21, 2025",
            isPinned: false
        },
        {
            id: 4,
            title: "Weekly Goals",
            content: "Complete design system documentation. Review pull requests. Plan sprint retrospective.",
            category: "Work",
            color: { bg: 'bg-purple-50', text: 'text-purple-500' },
            date: "Dec 20, 2025",
            isPinned: true
        },
        {
            id: 5,
            title: "Reading List",
            content: "Atomic Habits - Chapter 5-8. The Psychology of Money - Start reading.",
            category: "Personal",
            color: { bg: 'bg-amber-50', text: 'text-amber-600' },
            date: "Dec 19, 2025",
            isPinned: false
        },
        {
            id: 6,
            title: "Algorithm Notes",
            content: "Binary search tree implementation. Time complexity analysis for sorting algorithms.",
            category: "Study",
            color: { bg: 'bg-green-50', text: 'text-green-600' },
            date: "Dec 18, 2025",
            isPinned: false
        }
    ];

    const filteredNotes = activeFilter === 'all'
        ? notes
        : notes.filter(note => note.category.toLowerCase() === activeFilter);

    const pinnedNotes = filteredNotes.filter(note => note.isPinned);
    const regularNotes = filteredNotes.filter(note => !note.isPinned);

    // Bento grid card sizes - smart distribution for visual interest
    const getCardSize = (index: number, isPinned: boolean) => {
        if (isPinned) {
            // First 2 pinned: large (2x2), next 2: medium-wide (2x1), rest: small (1x1)
            if (index < 2) return 'col-span-6 md:col-span-8 row-span-2';
            if (index < 4) return 'col-span-6 md:col-span-8 row-span-1';
            return 'col-span-6 md:col-span-4 row-span-1';
        } else {
            // Regular notes cycle: large → tall → wide → small
            const patterns = [
                'col-span-6 md:col-span-8 row-span-2',  // large
                'col-span-6 md:col-span-4 row-span-2',  // tall
                'col-span-6 md:col-span-8 row-span-1',  // wide
                'col-span-6 md:col-span-4 row-span-1',  // small
            ];
            return patterns[index % patterns.length];
        }
    };

    const getCardDisplaySize = (index: number, isPinned: boolean): 'small' | 'medium' | 'large' => {
        if (isPinned) {
            if (index < 2) return 'large';
            if (index < 4) return 'medium';
            return 'small';
        } else {
            const sizes: ('small' | 'medium' | 'large')[] = ['large', 'medium', 'medium', 'small'];
            return sizes[index % sizes.length];
        }
    };

    return (
        <MainLayout>
            <div
                className="min-h-screen font-sans text-slate-900"
                style={{
                    padding: 'var(--spacing-2xl) var(--spacing-xl)',
                    background: '#F9FAFB'
                }}
            >
                {/* Header */}
                <header className="max-w-[1400px] mx-auto" style={{ marginBottom: 'calc(var(--spacing-2xl) + var(--spacing-md))' }}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center" style={{ gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)' }}>
                        <div>
                            <h1 className="font-mono text-5xl font-bold text-[#171717]" style={{ letterSpacing: '-0.025em', lineHeight: '1.1', marginBottom: 'var(--spacing-xs)' }}>
                                my notes
                            </h1>
                            <p className="font-mono text-sm text-[#737373]" style={{ textTransform: 'lowercase' }}>
                                {filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'} in your collection
                            </p>
                        </div>

                        <div className="flex items-center w-full md:w-auto" style={{ gap: 'var(--spacing-md)' }}>
                            <div className="relative flex items-center flex-1 md:flex-initial md:w-96 group">
                                <Search size={18} className="absolute text-slate-400 group-focus-within:text-slate-600 transition-colors" style={{ left: 'var(--spacing-lg)' }} />
                                <input
                                    type="text"
                                    placeholder="search notes..."
                                    className="w-full bg-white border border-[#E5E5E5] text-[#171717] placeholder:text-[#737373] focus:outline-none focus:border-[#A3684D] focus:ring-2 focus:ring-[#A3684D]/20 transition-all font-mono text-sm"
                                    style={{
                                        borderRadius: '12px',
                                        padding: '11px var(--spacing-lg) 11px 3.25rem',
                                        boxShadow: 'var(--shadow-xs)',
                                        textTransform: 'lowercase'
                                    }}
                                />
                            </div>

                            <Link href="/note/new">
                                <button
                                    className="bg-[#A3684D] hover:bg-[#8B5840] text-white flex items-center active:scale-[0.98] transition-all group font-mono text-sm"
                                    style={{
                                        padding: '11px 32px',
                                        borderRadius: '9999px',
                                        fontWeight: '500',
                                        gap: 'var(--spacing-sm)',
                                        boxShadow: 'var(--shadow-sm)',
                                        textTransform: 'lowercase',
                                        transitionDuration: '300ms',
                                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                                    <span className="hidden sm:inline">new note</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Filters and View Toggle - Glassmorphic */}
                    <div
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border border-[#E5E5E5]"
                        style={{
                            padding: 'var(--spacing-lg)',
                            borderRadius: '20px',
                            gap: 'var(--spacing-md)',
                            boxShadow: 'var(--shadow-xs)'
                        }}
                    >
                        <div className="flex items-center flex-wrap" style={{ gap: 'var(--spacing-sm)' }}>
                            {['all', 'personal', 'work', 'study'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter as any)}
                                    className={`transition-all font-mono ${activeFilter === filter
                                        ? 'bg-[#A3684D] text-white shadow-sm'
                                        : 'bg-transparent text-[#737373] hover:bg-[#F9FAFB]'
                                        }`}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '9999px',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        textTransform: 'lowercase',
                                        border: activeFilter === filter ? 'none' : '1px solid #E5E5E5',
                                        transitionDuration: '300ms',
                                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    {filter === 'all' ? 'all notes' : filter}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center bg-[#F9FAFB] border border-[#E5E5E5]" style={{ borderRadius: '12px', padding: '3px' }}>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`flex items-center justify-center transition-all ${viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                style={{
                                    padding: 'var(--spacing-sm)',
                                    borderRadius: 'var(--radius-md)',
                                    width: '40px',
                                    height: '40px'
                                }}
                            >
                                <Grid3x3 size={18} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`flex items-center justify-center transition-all ${viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                style={{
                                    padding: 'var(--spacing-sm)',
                                    borderRadius: 'var(--radius-md)',
                                    width: '40px',
                                    height: '40px'
                                }}
                            >
                                <List size={18} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Notes Grid */}
                <main className="max-w-[1400px] mx-auto">
                    {/* Pinned Notes */}
                    {pinnedNotes.length > 0 && (
                        <div style={{ marginBottom: 'calc(var(--spacing-2xl) + var(--spacing-lg))' }}>
                            <div className="flex items-center text-[#737373]" style={{ gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xl)' }}>
                                <div className="flex items-center justify-center bg-[#A3684D]/10 text-[#A3684D]" style={{ width: '28px', height: '28px', borderRadius: '8px' }}>
                                    <Star size={16} className="fill-current" />
                                </div>
                                <h2 className="font-mono text-xs font-medium" style={{ textTransform: 'lowercase', letterSpacing: '0.025em' }}>
                                    pinned
                                </h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#E5E5E5] to-transparent" style={{ marginLeft: 'var(--spacing-md)' }} />
                            </div>
                            <div
                                className={viewMode === 'grid' ? 'grid grid-cols-6 md:grid-cols-12 auto-rows-[200px]' : 'flex flex-col'}
                                style={{ gap: 'var(--spacing-lg)' }}
                            >
                                {pinnedNotes.map((note, idx) => (
                                    <div
                                        key={note.id}
                                        className={`animate-in fade-in duration-500 ${viewMode === 'grid' ? getCardSize(idx, true) : ''}`}
                                        style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'backwards' }}
                                    >
                                        <Link href={`/note/${note.id}`} className="h-full block">
                                            <StickyNote
                                                title={note.title}
                                                content={note.content}
                                                category={note.category}
                                                color={note.color}
                                                date={note.date}
                                                rotation=""
                                                size={getCardDisplaySize(idx, true)}
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Regular Notes */}
                    {regularNotes.length > 0 && (
                        <div>
                            <div className="flex items-center text-[#737373]" style={{ gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xl)' }}>
                                <div className="flex items-center justify-center bg-[#F9FAFB] text-[#737373]" style={{ width: '28px', height: '28px', borderRadius: '8px' }}>
                                    <Folder size={16} />
                                </div>
                                <h2 className="font-mono text-xs font-medium" style={{ textTransform: 'lowercase', letterSpacing: '0.025em' }}>
                                    all notes
                                </h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#E5E5E5] to-transparent" style={{ marginLeft: 'var(--spacing-md)' }} />
                            </div>
                            <div
                                className={viewMode === 'grid' ? 'grid grid-cols-6 md:grid-cols-12 auto-rows-[200px]' : 'flex flex-col'}
                                style={{ gap: 'var(--spacing-lg)' }}
                            >
                                {regularNotes.map((note, idx) => (
                                    <div
                                        key={note.id}
                                        className={`animate-in fade-in duration-500 ${viewMode === 'grid' ? getCardSize(idx, false) : ''}`}
                                        style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'backwards' }}
                                    >
                                        <Link href={`/note/${note.id}`} className="h-full block">
                                            <StickyNote
                                                title={note.title}
                                                content={note.content}
                                                category={note.category}
                                                color={note.color}
                                                date={note.date}
                                                rotation=""
                                                size={getCardDisplaySize(idx, false)}
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Empty State - Premium Design */}
                    {filteredNotes.length === 0 && (
                        <div
                            className="flex flex-col items-center justify-center text-center backdrop-blur-sm bg-white/40 border border-white/60 rounded-3xl"
                            style={{ padding: 'calc(var(--spacing-2xl) * 2)', minHeight: '500px', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)' }}
                        >
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-2xl opacity-30" style={{ width: '120px', height: '120px', margin: '-10px' }} />
                                <div className="relative flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl" style={{ width: '100px', height: '100px', boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.06)' }}>
                                    <Folder size={48} className="text-slate-300" />
                                </div>
                            </div>
                            <h3 className="text-slate-800 typography-title" style={{ marginBottom: 'var(--spacing-md)' }}>
                                No notes found
                            </h3>
                            <p className="text-slate-500 max-w-md" style={{ fontSize: 'var(--font-size-base)', marginBottom: 'var(--spacing-2xl)', lineHeight: 'var(--line-height-relaxed)' }}>
                                Start capturing your thoughts and ideas. Create your first note to get started.
                            </p>
                            <Link href="/note/new">
                                <button
                                    className="bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center hover:from-slate-800 hover:to-slate-700 transition-all group"
                                    style={{
                                        padding: 'var(--spacing-md) var(--spacing-2xl)',
                                        borderRadius: 'var(--radius-xl)',
                                        fontWeight: 'var(--font-weight-semibold)',
                                        fontSize: 'var(--font-size-base)',
                                        gap: 'var(--spacing-sm)',
                                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                    }}
                                >
                                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                    Create Your First Note
                                </button>
                            </Link>
                        </div>
                    )}
                </main>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
