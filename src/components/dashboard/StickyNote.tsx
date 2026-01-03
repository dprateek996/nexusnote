import React from 'react';

type StickyNoteProps = {
    title: string;
    content: string;
    category: string;
    color: {
        bg: string;
        text: string;
    };
    date?: string;
    rotation?: string;
};

export const StickyNote = ({
    title,
    content,
    category,
    color,
    date = "Dec 23, 2025",
    rotation = "rotate-[-1deg]"
}: StickyNoteProps) => (
    <div
        className={`
            group relative bg-white border-[0.5px] border-[#F5E1E0] 
            ${rotation} hover:rotate-0 hover:-translate-y-2 
            transition-all cursor-grab active:cursor-grabbing w-full h-full flex flex-col
        `}
        style={{
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-md), 0 20px 40px rgba(234,179,177,0.1)',
            transition: `all var(--transition-slower) var(--ease-out-back)`,
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(234,179,177,0.3)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-md), 0 20px 40px rgba(234,179,177,0.1)';
        }}
    >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-md)' }}>
            <span
                className={`uppercase tracking-wider ${color.bg} ${color.text}`}
                style={{
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                }}
            >
                {category}
            </span>
            <div className="rounded-full bg-slate-200 group-hover:bg-[#EAB3B1] transition-colors" style={{ height: '6px', width: '6px' }} />
        </div>
        <h3
            className="text-slate-800 tracking-tight leading-tight group-hover:text-slate-900 transition-colors"
            style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-sm)' }}
        >
            {title}
        </h3>
        <p
            className="text-slate-500 leading-relaxed flex-grow"
            style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}
        >
            {content}
        </p>
        <div
            className="border-t border-slate-50 flex justify-between items-center text-slate-400 tracking-wide"
            style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-md)', fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-medium)' }}
        >
            <span>{date}</span>
            <button
                className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-600 hover:text-[#EAB3B1] uppercase tracking-wider"
                style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)' }}
            >
                Edit
            </button>
        </div>
    </div>
);
