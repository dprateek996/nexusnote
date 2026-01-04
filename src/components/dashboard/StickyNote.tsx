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
    <div className="group premium-card cursor-pointer w-full h-full flex flex-col" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-xl)' }}>
        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-md)' }}>
            <span
                className={`uppercase tracking-tighter ${color.text} bg-opacity-10 ${color.bg}`}
                style={{
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                }}
            >
                {category}
            </span>
            <div
                className="rounded-full bg-slate-200 group-hover:bg-[rgb(var(--primary-rgb))] transition-colors"
                style={{ width: '6px', height: '6px' }}
            />
        </div>

        <h3
            className="text-slate-900"
            style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: 'var(--line-height-tight)',
                marginBottom: 'var(--spacing-sm)'
            }}
        >
            {title}
        </h3>

        <p
            className="text-slate-500 leading-relaxed flex-grow line-clamp-4"
            style={{ fontSize: 'var(--font-size-sm)' }}
        >
            {content}
        </p>

        <div
            className="border-t border-slate-50 flex justify-between items-center"
            style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-md)' }}
        >
            <span className="text-slate-400" style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-medium)' }}>
                {date}
            </span>
            <span
                className="text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)' }}
            >
                EDIT →
            </span>
        </div>
    </div>
);
