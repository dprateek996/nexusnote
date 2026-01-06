import React from 'react';

interface GridBackgroundProps {
    className?: string;
}

export default function GridBackground({ className = '' }: GridBackgroundProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgb(0 0 0 / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0 0 0 / 0.08) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Gradient vignette overlay for depth */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 100%)',
                }}
            />
        </div>
    );
}
