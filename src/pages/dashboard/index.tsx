import Link from 'next/link';
import { Search, Plus, Grid3x3, List, Filter, Clock, Star, Folder } from 'lucide-react';
import React, { useState } from 'react';
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

    return (
        <MainLayout>
            <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900" style={{ padding: 'var(--spacing-xl)' }}>
                {/* Header */}
                <header className="max-w-[1400px] mx-auto" style={{ marginBottom: 'var(--spacing-2xl)' }}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center" style={{ gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <h1 className="text-slate-900 tracking-tight" style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-xs)' }}>
                                My Notes
                            </h1>
                            <p className="text-slate-500" style={{ fontSize: 'var(--font-size-base)' }}>
                                {filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'}
                            </p>
                        </div>

                        <div className="flex items-center w-full md:w-auto" style={{ gap: 'var(--spacing-md)' }}>
                            <div className="relative flex items-center flex-1 md:flex-initial md:w-80">
                                <Search size={18} className="absolute text-slate-400" style={{ left: 'var(--spacing-md)' }} />
                                <input
                                    type="text"
                                    placeholder="Search notes..."
                                    className="w-full bg-white border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-100 transition-all"
                                    style={{
                                        borderRadius: 'var(--radius-lg)',
                                        padding: 'var(--spacing-sm) var(--spacing-md) var(--spacing-sm) 2.75rem',
                                        fontSize: 'var(--font-size-sm)'
                                    }}
                                />
                            </div>

                            <Link href="/note/new">
                                <button
                                    className="bg-slate-900 text-white flex items-center hover:bg-slate-800 active:scale-95 transition-all"
                                    style={{
                                        padding: 'var(--spacing-sm) var(--spacing-lg)',
                                        borderRadius: 'var(--radius-lg)',
                                        fontWeight: 'var(--font-weight-semibold)',
                                        fontSize: 'var(--font-size-sm)',
                                        gap: 'var(--spacing-sm)',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}
                                >
                                    <Plus size={18} />
                                    <span className="hidden sm:inline">New Note</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Filters and View Toggle */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border border-slate-200" style={{ padding: 'var(--spacing-md)', borderRadius: 'var(--radius-xl)', gap: 'var(--spacing-md)' }}>
                        <div className="flex items-center flex-wrap" style={{ gap: 'var(--spacing-sm)' }}>
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={`transition-all ${activeFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                                style={{
                                    padding: 'var(--spacing-xs) var(--spacing-md)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-medium)'
                                }}
                            >
                                All Notes
                            </button>
                            <button
                                onClick={() => setActiveFilter('personal')}
                                className={`transition-all ${activeFilter === 'personal' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                                style={{
                                    padding: 'var(--spacing-xs) var(--spacing-md)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-medium)'
                                }}
                            >
                                Personal
                            </button>
                            <button
                                onClick={() => setActiveFilter('work')}
                                className={`transition-all ${activeFilter === 'work' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                                style={{
                                    padding: 'var(--spacing-xs) var(--spacing-md)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-medium)'
                                }}
                            >
                                Work
                            </button>
                            <button
                                onClick={() => setActiveFilter('study')}
                                className={`transition-all ${activeFilter === 'study' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                                style={{
                                    padding: 'var(--spacing-xs) var(--spacing-md)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-medium)'
                                }}
                            >
                                Study
                            </button>
                        </div>

                        <div className="flex items-center bg-slate-50" style={{ borderRadius: 'var(--radius-md)', padding: '2px' }}>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`flex items-center justify-center transition-all ${viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                                style={{
                                    padding: 'var(--spacing-xs)',
                                    borderRadius: 'var(--radius-sm)',
                                    width: '36px',
                                    height: '36px'
                                }}
                            >
                                <Grid3x3 size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`flex items-center justify-center transition-all ${viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                                style={{
                                    padding: 'var(--spacing-xs)',
                                    borderRadius: 'var(--radius-sm)',
                                    width: '36px',
                                    height: '36px'
                                }}
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Notes Grid */}
                <main className="max-w-[1400px] mx-auto">
                    {/* Pinned Notes */}
                    {pinnedNotes.length > 0 && (
                        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                            <div className="flex items-center text-slate-600" style={{ gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-lg)' }}>
                                <Star size={16} className="fill-current" />
                                <h2 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Pinned
                                </h2>
                            </div>
                            <div
                                className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col'}
                                style={{ gap: 'var(--spacing-lg)' }}
                            >
                                {pinnedNotes.map((note) => (
                                    <Link key={note.id} href={`/note/${note.id}`}>
                                        <StickyNote
                                            title={note.title}
                                            content={note.content}
                                            category={note.category}
                                            color={note.color}
                                            date={note.date}
                                            rotation=""
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Regular Notes */}
                    {regularNotes.length > 0 && (
                        <div>
                            <div className="flex items-center text-slate-600" style={{ gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-lg)' }}>
                                <Folder size={16} />
                                <h2 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    All Notes
                                </h2>
                            </div>
                            <div
                                className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col'}
                                style={{ gap: 'var(--spacing-lg)' }}
                            >
                                {regularNotes.map((note) => (
                                    <Link key={note.id} href={`/note/${note.id}`}>
                                        <StickyNote
                                            title={note.title}
                                            content={note.content}
                                            category={note.category}
                                            color={note.color}
                                            date={note.date}
                                            rotation=""
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredNotes.length === 0 && (
                        <div className="flex flex-col items-center justify-center text-center" style={{ padding: 'var(--spacing-2xl)', minHeight: '400px' }}>
                            <div className="text-slate-300" style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <Folder size={64} />
                            </div>
                            <h3 className="text-slate-700" style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-sm)' }}>
                                No notes found
                            </h3>
                            <p className="text-slate-500" style={{ fontSize: 'var(--font-size-base)', marginBottom: 'var(--spacing-lg)' }}>
                                Create your first note to get started
                            </p>
                            <Link href="/note/new">
                                <button
                                    className="bg-slate-900 text-white flex items-center hover:bg-slate-800 transition-all"
                                    style={{
                                        padding: 'var(--spacing-sm) var(--spacing-lg)',
                                        borderRadius: 'var(--radius-lg)',
                                        fontWeight: 'var(--font-weight-semibold)',
                                        fontSize: 'var(--font-size-sm)',
                                        gap: 'var(--spacing-sm)'
                                    }}
                                >
                                    <Plus size={18} />
                                    Create Note
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
