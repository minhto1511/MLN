
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MATTER_DEFINITION } from "@/data/mln111_content";
import { Star } from "lucide-react";

export function MatterDefinitionViewer() {
  const { quote, tooltips, author } = MATTER_DEFINITION;
  
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Helper to render text with tooltips
  const renderInteractiveText = () => {
    let parts = [quote];
    Object.keys(tooltips).forEach((key) => {
      const newParts: string[] = [];
      parts.forEach((part) => {
        if (part.toLowerCase().includes(key.toLowerCase())) {
          const split = part.split(new RegExp(`(${key})`, "gi"));
          newParts.push(...split);
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return (
      <p className="text-3xl md:text-5xl font-bold uppercase leading-relaxed text-center text-[#1A1A1A]">
        {parts.map((part, i) => {
          const lowerPart = part.toLowerCase();
          const tooltipKey = Object.keys(tooltips).find(
            (k) => k.toLowerCase() === lowerPart
          );

          if (tooltipKey) {
            return (
              <span
                key={i}
                className="relative inline-block cursor-help border-b-4 border-[#C41E3A] bg-[#C41E3A]/10 hover:bg-[#C41E3A] hover:text-[#FFD700] transition-colors px-1 mx-1"
                onMouseEnter={() => setActiveTooltip(tooltipKey)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                {part}
                <AnimatePresence>
                  {activeTooltip === tooltipKey && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-6 w-72 p-0 bg-[#1A1A1A] border-4 border-[#C41E3A] shadow-[8px_8px_0_#FFD700] text-left pointer-events-none"
                    >
                      <div className="bg-[#C41E3A] text-[#FFD700] px-4 py-1 font-bold uppercase text-xs">
                         Giải thích từ ngữ
                      </div>
                      <div className="p-4">
                        <span className="block font-black text-[#FFD700] text-lg mb-2 capitalize border-b border-[#333] pb-2">
                            {tooltipKey}
                        </span>
                        <span className="text-[#F5F0E1] font-sans text-sm leading-relaxed block">
                           {tooltips[tooltipKey as keyof typeof tooltips]}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </p>
    );
  };

  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center p-8 bg-[#F5F0E1] border-4 border-[#1A1A1A] shadow-[12px_12px_0_#C41E3A]">
         <div className="mb-8 flex justify-center">
             <span className="flex items-center gap-2 px-6 py-2 bg-[#1A1A1A] text-[#FFD700] text-sm font-bold tracking-widest uppercase shadow-[4px_4px_0_#C41E3A]">
                <Star size={16} fill="currentColor" /> 
                Định nghĩa kinh điển
             </span>
        </div>
        
        <div className="max-w-5xl">
            {renderInteractiveText()}
        </div>

        <div className="mt-12 text-center">
            <div className="inline-block px-8 py-2 border-t-4 border-[#C41E3A]">
                 <span className="text-xl text-[#C41E3A] font-black uppercase tracking-widest">— {author}</span>
            </div>
        </div>
    </div>
  );
}
