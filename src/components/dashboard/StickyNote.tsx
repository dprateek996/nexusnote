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
    rotation?: string; // e.g., 'rotate-[-1deg]'
};

export const StickyNote = ({
    title,
    content,
    category,
    color,
    date = "Dec 23, 2025",
    rotation = "rotate-[-1deg]"
}: StickyNoteProps) => (
    // Production-grade: 3-layer shadow, lift animation, custom easing
    <div className={`
    group relative bg-white border-[0.5px] border-[#F5E1E0] p-6 rounded-[24px] 
    ${rotation} hover:rotate-0 hover:-translate-y-2 
    shadow-[0_2px_4px_rgba(0,0,0,0.02),0_10px_20px_rgba(0,0,0,0.04),0_20px_40px_rgba(234,179,177,0.1)] 
    hover:shadow-[0_30px_60px_-15px_rgba(234,179,177,0.3)] 
    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    cursor-grab active:cursor-grabbing w-full h-full flex flex-col
  `}>

        {/* Inner White Glow (Subtle Top Border highlight) */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />

        {/* Metadata Row */}
        <div className="flex justify-between items-start mb-4">
            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${color.bg} ${color.text}`}>
                {category}
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-slate-200 group-hover:bg-[#EAB3B1] transition-colors" />
        </div>

        <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-tight mb-2 group-hover:text-slate-900 transition-colors">
            {title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-grow font-medium">
            {content}
        </p>

        {/* Subtle Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center text-[11px] text-slate-400 font-medium tracking-wide">
            <span>{date}</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-600 hover:text-[#EAB3B1] uppercase text-[10px] font-bold tracking-wider">
                Edit
            </button>
        </div>
    </div>
);
