
"use client";

import React from "react";
import { motion } from "framer-motion";
import { HISTORICAL_MATERIALISM } from "@/data/mln111_content";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export function BaseSuperstructureStack() {
  const { base, superstructure } = HISTORICAL_MATERIALISM.stack;

  return (
    <div className="min-h-screen bg-[#F5F0E1] flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-black text-[#1A1A1A] mb-12 uppercase text-center">
        Cơ sở hạ tầng & <br/> Kiến trúc thượng tầng
      </h2>

      <div className="relative max-w-2xl w-full flex flex-col gap-8">
        
        {/* Superstructure (Top) */}
        <motion.div
           initial={{ opacity: 0, y: -50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
             <div className="bg-[#C41E3A] text-[#FFD700] p-8 border-4 border-[#1A1A1A] shadow-[12px_12px_0_#1A1A1A] relative z-10">
                 <div className="absolute -top-4 -left-4 bg-[#FFD700] text-[#C41E3A] font-bold px-4 py-1 border-2 border-[#1A1A1A] uppercase tracking-wider">
                     Kiến trúc thượng tầng
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4 mt-4">
                     {superstructure.items.map((item, i) => (
                         <div key={i} className="bg-[#A01830] p-3 text-center border border-[#FFD700]/30 font-bold uppercase text-sm">
                             {item}
                         </div>
                     ))}
                 </div>
                 
                 <p className="mt-6 text-sm opacity-90 leading-relaxed border-t border-[#FFD700]/30 pt-4 font-mono">
                     {superstructure.desc}
                 </p>
             </div>
             
             {/* Interaction Arrow Down */}
             <div className="absolute -bottom-10 left-1/4 text-[#C41E3A] font-bold flex flex-col items-center">
                 <span className="text-xs uppercase writing-vertical">Tác động trở lại</span>
                 <ArrowUp className="rotate-180" />
             </div>
        </motion.div>
        
        {/* The Base (Bottom) */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="relative"
        >
             <div className="bg-[#1A1A1A] text-[#F5F0E1] p-8 border-4 border-[#C41E3A] shadow-[12px_-12px_0_#4A3C31] relative z-20">
                 <div className="absolute -bottom-4 -right-4 bg-[#F5F0E1] text-[#1A1A1A] font-bold px-4 py-1 border-2 border-[#1A1A1A] uppercase tracking-wider">
                     {base.name}
                 </div>
                 
                 <div className="space-y-4 mt-4">
                     {base.items.map((item, i) => (
                         <div key={i} className={cn(
                             "p-4 border-2 font-bold uppercase text-center transition-all",
                             i === 1 ? "bg-[#FFD700] text-[#1A1A1A] border-[#C41E3A] scale-105 shadow-lg" : "bg-[#333] border-[#555] text-[#AAA]"
                         )}>
                             {item} {i === 1 && "(Thống trị - Quyết định)"}
                         </div>
                     ))}
                 </div>
                 
                 <p className="mt-6 text-sm opacity-70 leading-relaxed border-t border-[#555] pt-4 font-mono">
                     {base.desc}
                 </p>
             </div>
             
             {/* Interaction Arrow Up */}
             <div className="absolute -top-10 right-1/4 text-[#1A1A1A] font-bold flex flex-col items-center">
                 <ArrowUp />
                 <span className="text-xs uppercase writing-vertical">Quyết định</span>
             </div>
        </motion.div>
      </div>
      
      <div className="mt-16 text-center text-[#C41E3A] font-bold max-w-xl bg-[#C41E3A]/10 p-4 border border-[#C41E3A]">
         QUY LUẬT: CSHT quyết định KTTT. Nhưng KTTT có tính độc lập tương đối và tác động mạnh mẽ trở lại CSHT.
      </div>
    </div>
  );
}
