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

// Typography sizes based on card size - using Geist Mono for technical precision
const typographyMap = {
    small: {
        title: '14px',
        titleWeight: '600',
        content: '12px',
        lineClamp: 'line-clamp-2'
    },
    medium: {
        title: '18px',
        titleWeight: '600',
        content: '14px',
        lineClamp: 'line-clamp-3'
    },
    large: {
        title: '24px',
        titleWeight: '600',
        content: '16px',
        lineClamp: 'line-clamp-5'
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
        <div
            className="group w-full h-full flex flex-col bg-white border border-[#E5E5E5] cursor-pointer overflow-hidden transition-all duration-300"
            style={{
                padding: '24px',
                borderRadius: '20px',
                boxShadow: '0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25, 28, 33, 0.08)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 0px 0px 1px rgba(25, 28, 33, 0.08)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25, 28, 33, 0.08)';
            }}
        >
            {/* Tag/Category Pill */}
            <div className="flex justify-between items-start mb-3">
                <span
                    className={`${color.text} ${color.bg} font-mono text-xs font-medium transition-all duration-200`}
                    style={{
                        padding: '0 12px',
                        height: '24px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        borderRadius: '9999px',
                        textTransform: 'lowercase',
                        border: `1px solid`,
                        borderColor: 'currentColor',
                        opacity: 0.7,
                    }}
                >
                    {category.toLowerCase()}
                </span>
            </div>

            {/* Title - Geist Mono with tight tracking */}
            <h3
                className="font-mono mb-2"
                style={{
                    fontSize: typography.title,
                    fontWeight: typography.titleWeight,
                    letterSpacing: '-0.45px',
                    lineHeight: '1.3',
                    color: '#171717',
                }}
            >
                {title}
            </h3>

            {/* Content - Inter for readability */}
            <p
                className={`font-sans text-[#737373] leading-relaxed flex-grow ${typography.lineClamp}`}
                style={{
                    fontSize: typography.content,
                }}
            >
                {content}
            </p>

            {/* Footer */}
            <div
                className="border-t border-[#E5E5E5] flex justify-between items-center pt-3 mt-4"
            >
                <span
                    className="font-mono text-xs text-[#737373]"
                    style={{ textTransform: 'lowercase' }}
                >
                    {date}
                </span>
                <span
                    className="font-mono text-xs font-medium text-[#A3684D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ textTransform: 'lowercase' }}
                >
                    view →
                </span>
            </div>
        </div>
    );
};
