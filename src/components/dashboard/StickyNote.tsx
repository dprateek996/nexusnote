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
    rotation = ""
}: StickyNoteProps) => (
    <div
        className="group relative bg-white border border-slate-200 hover:border-slate-300 transition-all cursor-pointer w-full h-full flex flex-col hover:-translate-y-1"
        style={{
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            transition: `all var(--transition-base) var(--ease-out-expo)`,
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        }}
    >
        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-md)' }}>
            <span
                className={`uppercase tracking-wider ${color.bg} ${color.text}`}
                style={{
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-semibold)',
                }}
            >
                {category}
            </span>
            <div className="rounded-full bg-slate-200 group-hover:bg-slate-400 transition-colors" style={{ height: '6px', width: '6px' }} />
        </div>
        <h3
            className="text-slate-900 tracking-tight leading-tight transition-colors"
            style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-sm)' }}
        >
            {title}
        </h3>
        <p
            className="text-slate-600 leading-relaxed flex-grow"
            style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-normal)' }}
        >
            {content}
        </p>
        <div
            className="border-t border-slate-100 flex justify-between items-center text-slate-400 tracking-wide"
            style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-md)', fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-medium)' }}
        >
            <span>{date}</span>
            <button
                className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-600 hover:text-slate-900 uppercase tracking-wider"
                style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-semibold)' }}
            >
                Open
            </button>
        </div>
    </div>
);
