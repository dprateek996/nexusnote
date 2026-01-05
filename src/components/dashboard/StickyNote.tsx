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
    size?: 'small' | 'medium' | 'large';
};

// Typography sizes based on card size
const typographyMap = {
    small: {
        title: 'var(--font-size-base)',
        content: 'var(--font-size-xs)',
        lineClamp: 'line-clamp-3'
    },
    medium: {
        title: 'var(--font-size-lg)',
        content: 'var(--font-size-sm)',
        lineClamp: 'line-clamp-4'
    },
    large: {
        title: 'var(--font-size-2xl)',
        content: 'var(--font-size-base)',
        lineClamp: 'line-clamp-6'
    },
};

export const StickyNote = ({
    title,
    content,
    category,
    color,
    date = "Dec 23, 2025",
    rotation = "",
    size = 'medium'
}: StickyNoteProps) => {
    const typography = typographyMap[size];

    return (
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
                    fontSize: typography.title,
                    fontWeight: 'var(--font-weight-semibold)',
                    lineHeight: 'var(--line-height-tight)',
                    marginBottom: 'var(--spacing-sm)',
                    letterSpacing: 'var(--letter-spacing-tight)'
                }}
            >
                {title}
            </h3>

            <p
                className={`text-slate-500 leading-relaxed flex-grow ${typography.lineClamp}`}
                style={{ fontSize: typography.content }}
            >
                {content}
            </p>

            <div
                className="border-t border-slate-50 flex justify-between items-center"
                style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-md)' }}
            >
                <span className="text-slate-400 typography-caption">
                    {date}
                </span>
                <span
                    className="text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity typography-caption"
                    style={{ fontWeight: 'var(--font-weight-bold)' }}
                >
                    EDIT →
                </span>
            </div>
        </div>
    );
};
