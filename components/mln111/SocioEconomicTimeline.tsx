
"use client";

import React from "react";
import { motion } from "framer-motion";
import { HISTORICAL_MATERIALISM } from "@/data/mln111_content";
import { useRef } from "react";

export function SocioEconomicTimeline() {
  // Using simple vertical scroll or just a list for now, styled heavily.
  const eras = HISTORICAL_MATERIALISM.timeline;
  const containerRef = useRef(null);

  return (
    <div className="bg-[#1A1A1A] py-24 border-t-8 border-[#C41E3A]" ref={containerRef}>
      <h2 className="text-4xl md:text-5xl font-black text-[#F5F0E1] text-center mb-24 uppercase">
        5 Hình thái <br/> <span className="text-[#C41E3A]">Kinh tế - Xã hội</span>
      </h2>

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#444] md:-translate-x-1/2"></div>

        {eras.map((era, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-start mb-24 relative ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[#C41E3A] border-4 border-[#FFD700] rounded-full -translate-x-1/2 z-10 shadow-[0_0_20px_#C41E3A]" />

            {/* Content Side */}
            <div className="ml-12 md:ml-0 md:w-1/2 md:px-12 pt-1">
                <div className="bg-[#F5F0E1] border-4 border-[#1A1A1A] p-6 shadow-[8px_8px_0_#4A3C31] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#C41E3A] transition-all">
                    <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#FFD700] font-bold text-xs uppercase mb-3">
                        Hình thái {idx + 1}
                    </span>
                    <h3 className="text-2xl font-black text-[#C41E3A] uppercase mb-2">{era.name}</h3>
                    <p className="text-[#4A3C31] text-sm leading-relaxed font-sans mb-4">
                        {era.desc}
                    </p>
                    {/* Placeholder for visualized characteristics if needed */}
                    <div className="h-2 w-full bg-[#1A1A1A]/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#C41E3A]" style={{ width: `${(idx + 1) * 20}%` }} />
                    </div>
                </div>
            </div>
            
            {/* Empty Side for layout balance */}
            <div className="md:w-1/2" />
          </motion.div>
        ))}
        
        <div className="text-center pt-12 relative z-10">
            <div className="inline-block px-8 py-4 bg-[#C41E3A] text-[#FFD700] text-2xl font-black uppercase border-4 border-[#FFD700] animate-pulse">
                Chủ nghĩa Cộng sản
            </div>
        </div>
      </div>
    </div>
  );
}
