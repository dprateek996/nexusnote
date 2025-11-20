"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COLORS = ["bg-rose-100/80", "bg-amber-100/80", "bg-sky-100/80", "bg-emerald-100/80", "bg-violet-100/80"];

type StickyNoteStackProps = {
  items: { id: number; title: string; description: string; link: string; }[];
};

export const StickyNoteStack = ({ items }: StickyNoteStackProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`relative w-full h-full p-6 rounded-2xl ${isExpanded ? '' : 'bg-slate-50 border border-slate-200 grid place-items-center'}`}
      onClick={() => !isExpanded && setIsExpanded(true)}
      onHoverStart={() => !isExpanded && setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.button
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
            className="absolute top-4 right-4 z-50 px-3 py-1 text-sm bg-slate-800 text-white rounded-full shadow-lg"
          >
            Collapse
          </motion.button>
        )}
      </AnimatePresence>

      <div className={`w-full h-full ${isExpanded ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'relative'}`}>
        {items.map((card, index) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            className={`
              ${isExpanded ? 'relative' : 'absolute w-72 h-72'}
              ${isExpanded ? 'cursor-pointer' : 'cursor-default'}
            `}
          >
            <motion.div
              whileHover={{ y: isExpanded ? -8 : 0, scale: isExpanded ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`w-full h-full p-6 rounded-xl shadow-lg ${COLORS[index % COLORS.length]}`}
              animate={!isExpanded ? {
                transform: hovered
                  ? `rotateZ(${index * 4 - 8}deg) translateY(${index * 20}px) scale(1.05)` // Fanned out on hover
                  : index === 0 ? 'rotateZ(0deg) translateY(0px)' : // Precise stacking
                    index === 1 ? 'rotateZ(4deg) translateY(12px)' : 
                                  'rotateZ(-4deg) translateY(24px)',
                zIndex: items.length - index,
              } : {}}
            >
              <Link href={card.link} passHref legacyBehavior>
                <a 
                  className="w-full h-full block" 
                  // THE FIX: Disable the link when collapsed
                  onClick={(e) => !isExpanded && e.preventDefault()}
                >
                  <h3 className="font-semibold text-slate-800 text-lg">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{card.description}</p>
                </a>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {!isExpanded && (
        <div className="absolute bottom-6 text-slate-400 text-sm font-medium">
          Click to expand
        </div>
      )}
    </motion.div>
  );
};