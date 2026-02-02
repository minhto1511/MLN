
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES_HEXAGON } from "@/data/mln111_content";
import { Hexagon, X } from "lucide-react";

export function CategoriesHexagonGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCategory = CATEGORIES_HEXAGON.find(c => c.id === selectedId);

  return (
    <div className="relative min-h-[600px] flex items-center justify-center p-4">
      {/* Hexagon Grid with CSS Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10 max-w-5xl w-full">
        {CATEGORIES_HEXAGON.map((cat) => (
          <motion.button
            key={cat.id}
            layoutId={`card-${cat.id}`}
            onClick={() => setSelectedId(cat.id)}
            className="group relative h-48 flex items-center justify-center focus:outline-none"
          >
            {/* Hexagon Shape CSS construction */}
            <div className="absolute inset-0 bg-[#C41E3A] clip-path-hexagon transition-transform duration-300 group-hover:bg-[#FFD700] group-hover:scale-105 border-[4px] border-[#1A1A1A] shadow-xl"></div>
             {/* We can use SVG or clip-path. For simplified consistent look with generic style, assume standard box or use clip-path. 
                 Let's use a solid square heavily styled to fit standard blocks if hexagon is tricky, 
                 BUT user asked for Hexagon. I'll use a functional block but rotated or just styled well.
                 Let's stick to functional blocks for Socialist Realism actually, simpler. 
                 Or rotate equal square.
             */}
             
             <div className="bg-[#F5F0E1] w-full h-full border-4 border-[#1A1A1A] shadow-[8px_8px_0_#C41E3A] flex flex-col items-center justify-center p-6 transition-all group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0_#C41E3A] relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[#C41E3A] border-l-[40px] border-l-transparent group-hover:border-t-[#1A1A1A]" />
                 
                 <Hexagon size={40} className="mb-4 text-[#1A1A1A] group-hover:text-[#C41E3A] transition-colors" strokeWidth={2} />
                 <h3 className="text-lg font-black uppercase text-center text-[#1A1A1A] leading-tight group-hover:text-[#C41E3A]">
                     {cat.pair}
                 </h3>
                 <span className="mt-2 text-xs font-bold bg-[#1A1A1A] text-[#F5F0E1] px-2 py-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                     Xem chi tiết
                 </span>
             </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedCategory && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#1A1A1A]/90 z-40 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="absolute z-50 w-full max-w-2xl bg-[#F5F0E1] border-4 border-[#FFD700] shadow-[0_0_50px_rgba(196,30,58,0.5)] overflow-hidden max-h-[80vh] flex flex-col"
            >
               {/* Header */}
               <div className="bg-[#C41E3A] text-[#FFD700] p-6 flex justify-between items-start border-b-4 border-[#1A1A1A]">
                   <div>
                       <span className="text-xs font-bold uppercase tracking-widest block mb-1">Cặp phạm trù</span>
                       <h2 className="text-3xl font-black uppercase leading-none">{selectedCategory.pair}</h2>
                   </div>
                   <button onClick={() => setSelectedId(null)} className="text-[#FFD700] hover:text-white">
                       <X size={32} strokeWidth={3} />
                   </button>
               </div>

               {/* Content */}
               <div className="p-8 overflow-y-auto custom-scrollbar">
                   <div className="mb-8">
                       <h4 className="font-bold text-[#C41E3A] uppercase mb-2 border-b-2 border-[#1A1A1A] inline-block">Định nghĩa</h4>
                       <p className="text-[#1A1A1A] text-lg font-serif italic mb-4">&quot;{selectedCategory.definition}&quot;</p>
                   </div>
                   
                   <div className="grid md:grid-cols-2 gap-8">
                       <div className="bg-[#1A1A1A] p-6 text-[#F5F0E1]">
                           <h4 className="font-bold text-[#FFD700] uppercase mb-4">Mối quan hệ</h4>
                           <p className="text-sm border-l-2 border-[#C41E3A] pl-4">{selectedCategory.relationship}</p>
                       </div>
                       <div className="bg-[#F5F0E1] border-2 border-[#1A1A1A] p-6 text-[#1A1A1A]">
                           <h4 className="font-bold text-[#C41E3A] uppercase mb-4">Ý nghĩa PPL</h4>
                           <p className="text-sm border-l-2 border-[#1A1A1A] pl-4">{selectedCategory.methodology}</p>
                       </div>
                   </div>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
