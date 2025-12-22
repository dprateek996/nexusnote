"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950",
                className
            )}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-violet-400 opacity-20 blur-[100px]" />
            <div className="absolute right-0 top-0 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-indigo-500 opacity-20 blur-[100px]" />

            {/* Animated Beams */}
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_110%)]">
                <div className="absolute -left-[10%] top-[-10%] h-[150%] w-[150%] animate-background-beams bg-[radial-gradient(circle_800px_at_50%_-20%,#818cf8,transparent)] opacity-40 blur-[80px]" />
                <div className="absolute -left-[20%] top-[-20%] h-[150%] w-[150%] animate-background-beams-slow bg-[radial-gradient(circle_800px_at_50%_-20%,#c084fc,transparent)] opacity-30 blur-[60px]" />
            </div>
        </div>
    );
};
