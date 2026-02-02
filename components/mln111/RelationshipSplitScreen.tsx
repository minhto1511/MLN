
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DIALECTIC_RELATIONSHIP } from "@/data/mln111_content";
import { cn } from "@/lib/utils";
import { Brain, Box, ChevronRight } from "lucide-react";

export function RelationshipSplitScreen() {
  const [expandedSide, setExpandedSide] = useState<"matter" | "consciousness" | null>(null);

  const { materialismCorrectsConsciousness, consciousnessImpactsMaterialism } = DIALECTIC_RELATIONSHIP;

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-[#1A1A1A] overflow-hidden relative border-t-4 border-[#C41E3A]">
      {/* Reset Button */}
      {expandedSide && (
        <button
          onClick={() => setExpandedSide(null)}
          className="absolute top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-2 bg-[#C41E3A] text-[#FFD700] font-bold uppercase tracking-widest hover:bg-[#A01830] transition-all border-2 border-[#FFD700] shadow-[4px_4px_0_#1A1A1A]"
        >
          TRỞ VỀ TOÀN CẢNH
        </button>
      )}

      {/* Matter Side (LEFT) */}
      <motion.div
        layout
        onClick={() => setExpandedSide("matter")}
        className={cn(
          "relative flex flex-col justify-center items-center p-8 cursor-pointer transition-colors duration-500 border-b-4 md:border-b-0 md:border-r-4 border-[#C41E3A] group",
          expandedSide === "matter" ? "flex-[3] bg-[#F5F0E1]" : expandedSide === "consciousness" ? "flex-[1] bg-[#1A1A1A]" : "flex-1 bg-[#F5F0E1]",
        )}
      >
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#000,#000_1px,transparent_1px,transparent_10px)] pointer-events-none" />
        
        <Box className={cn("w-20 h-20 mb-6 transition-colors", expandedSide === 'matter' ? "text-[#C41E3A]" : "text-[#1A1A1A]")} strokeWidth={2} />
        <h2 className={cn("text-4xl md:text-6xl font-black uppercase mb-4 text-center transition-colors", expandedSide === 'matter' ? "text-[#C41E3A]" : "text-[#1A1A1A]")}>
            Vật chất <br/> Quyết định Ý thức
        </h2>
        
        {expandedSide !== "consciousness" && expandedSide !== "matter" && (
           <div className="mt-4 px-4 py-2 bg-[#1A1A1A] text-[#F5F0E1] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:bg-[#C41E3A] transition-colors">
             Xem chi tiết <ChevronRight size={14} />
           </div>
        )}

        <AnimatePresence>
          {expandedSide === "matter" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl w-full grid gap-4 mt-8 relative z-10"
            >
              {materialismCorrectsConsciousness.map((item, idx) => (
                <div key={idx} className="bg-[#1A1A1A] p-6 border-l-8 border-[#C41E3A] shadow-lg">
                  <h3 className="text-xl font-bold text-[#FFD700] mb-2 uppercase">{item.title}</h3>
                  <p className="text-[#F5F0E1] leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Consciousness Side (RIGHT) */}
      <motion.div
        layout
        onClick={() => setExpandedSide("consciousness")}
        className={cn(
          "relative flex flex-col justify-center items-center p-8 cursor-pointer transition-colors duration-500 group",
          expandedSide === "consciousness" ? "flex-[3] bg-[#1A1A1A]" : expandedSide === "matter" ? "flex-[1] bg-[#2A2A2A]" : "flex-1 bg-[#1A1A1A]",
        )}
      >
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,#FFD700,#FFD700_1px,transparent_1px,transparent_10px)] pointer-events-none" />

        <Brain className={cn("w-20 h-20 mb-6 transition-colors", expandedSide === 'consciousness' ? "text-[#FFD700]" : "text-[#F5F0E1]")} strokeWidth={2} />
        <h2 className={cn("text-4xl md:text-6xl font-black uppercase mb-4 text-center transition-colors", expandedSide === 'consciousness' ? "text-[#FFD700]" : "text-[#F5F0E1]")}>
            Ý thức <br/> Tác động trở lại
        </h2>

        {expandedSide !== "matter" && expandedSide !== "consciousness" && (
            <div className="mt-4 px-4 py-2 bg-[#F5F0E1] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:bg-[#FFD700] transition-colors">
                Xem chi tiết <ChevronRight size={14} />
            </div>
        )}

        <AnimatePresence>
          {expandedSide === "consciousness" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl w-full grid gap-4 mt-8 relative z-10"
            >
               {consciousnessImpactsMaterialism.map((item, idx) => (
                <div key={idx} className="bg-[#F5F0E1] p-6 border-r-8 border-[#FFD700] shadow-lg">
                  <h3 className="text-xl font-bold text-[#C41E3A] mb-2 uppercase">{item.title}</h3>
                  <p className="text-[#1A1A1A] leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
