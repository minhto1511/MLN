
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DIALECTIC_LAWS } from "@/data/mln111_content";
import { cn } from "@/lib/utils";
import { GitCommitHorizontal as GitCommit, Zap } from "lucide-react";

export function TheThreeLawsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col h-screen bg-[#F5F0E1] text-[#1A1A1A] overflow-hidden border-4 border-[#1A1A1A]">
      {/* Tab Headers */}
      <div className="flex flex-row overflow-x-auto border-b-4 border-[#1A1A1A] bg-[#1A1A1A]">
        {DIALECTIC_LAWS.map((law, idx) => (
          <button
            key={law.id}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "flex-1 p-6 text-center transition-all min-w-[200px] flex flex-col justify-center items-center relative uppercase font-bold",
              activeTab === idx
                ? "bg-[#C41E3A] text-[#FFD700]"
                : "bg-[#2A2A2A] text-[#888] hover:bg-[#333] hover:text-[#DDD]"
            )}
          >
            <span className="text-xs opacity-70 mb-1 tracking-widest">
              Quy luật {idx + 1}
            </span>
            <span className="text-lg md:text-xl leading-tight font-black">
              {law.name}
            </span>
             {activeTab === idx && (
                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFD700]" />
             )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 w-full relative overflow-y-auto p-4 md:p-12 scrollbar-thin">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto space-y-12"
          >
            {/* Header */}
            <div className="text-center border-b-4 border-[#C41E3A] pb-8">
              <h1 className="text-3xl md:text-5xl font-black text-[#C41E3A] uppercase mb-4">
                {DIALECTIC_LAWS[activeTab].fullName}
              </h1>
              <p className="text-[#4A3C31] text-xl italic font-serif max-w-3xl mx-auto bg-[#e5dfce] p-4 border border-[#d4cebc]">
                &quot;{DIALECTIC_LAWS[activeTab].mechanism}&quot;
              </p>
            </div>

            {/* Visualization Router */}
            <div className="bg-[#1A1A1A] p-8 border-4 border-[#1A1A1A] shadow-[8px_8px_0_#C41E3A]">
              {activeTab === 0 && <TransformationSlider />}
              {activeTab === 1 && <DualismView />}
              {activeTab === 2 && <SpiralAnimation />}
            </div>

            {/* Core Concepts */}
            <div className="grid md:grid-cols-2 gap-6">
               {(DIALECTIC_LAWS[activeTab].concepts || []).map((concept: { term: string; desc: string }, cIdx: number) => (
                  <div key={cIdx} className="bg-white p-6 border-2 border-[#1A1A1A] hover:bg-[#FFD700] hover:border-[#C41E3A] transition-colors group">
                    <h3 className="text-[#C41E3A] group-hover:text-[#1A1A1A] font-black uppercase text-lg mb-2 flex items-center gap-2">
                       <span className="w-4 h-4 bg-[#C41E3A] group-hover:bg-[#1A1A1A]" />
                      {concept.term}
                    </h3>
                    <p className="text-[#4A3C31] text-sm leading-relaxed font-sans">
                      {concept.desc}
                    </p>
                  </div>
               ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- Sub-components (Visualizations) ---

function TransformationSlider() {
  const [value, setValue] = useState(30);
  
  const stage = value < 50 ? "Chất A (Cũ)" : value < 90 ? "Tích lũy Lượng" : "Chất B (Mới)";
  const isLeap = value >= 90;

  return (
    <div className="space-y-8 text-[#F5F0E1]">
      <div className="flex justify-between items-end mb-4 h-32 relative border-b-2 border-[#555] pb-2">
        {/* Animated Particles */}
         <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden">
             {Array.from({ length: Math.floor(value / 5) }).map((_, i) => (
               <motion.div 
                 key={i}
                 className={cn("absolute w-3 h-3 border border-[#F5F0E1]", isLeap ? "bg-[#C41E3A] border-[#C41E3A]" : "bg-[#FFD700]/50")}
                 layoutId={`p-${i}`}
                 initial={{ opacity: 0 }}
                 animate={{ 
                    opacity: 0.8, 
                    x: (i * 50) % 600, 
                    y: (isLeap ? -200 : 100) + 50 + (i % 2 === 0 ? 20 : -20),
                    rotate: isLeap ? 45 : 0
                  }}
                 transition={{ repeat: Infinity, duration: 2 + (i % 3) }}
               />
             ))}
         </div>
         <div className="z-10 text-3xl font-black uppercase transition-colors duration-500" style={{ color: isLeap ? "#C41E3A" : "#FFD700" }}>
           {stage}
         </div>
      </div>

      <div className="relative pt-6">
        <div className="flex justify-between text-xs text-[#888] mb-2 uppercase font-mono">
            <span>Độ (Giới hạn)</span>
            <span>Điểm nút</span>
        </div>
        
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-4 bg-[#333] rounded-none appearance-none cursor-pointer accent-[#C41E3A] border border-[#555]"
        />
        
        {/* Markers */}
        <div className="absolute top-10 left-[90%] -translate-x-1/2 flex flex-col items-center">
            <div className="w-1 h-6 bg-[#C41E3A]" />
            <span className="text-[10px] text-[#C41E3A] font-bold uppercase mt-1">Nút</span>
        </div>
      </div>
      
      <p className="text-sm text-[#AAA] text-center font-mono">
        Kéo thanh trượt để tích lũy <b>Lượng</b>. Khi vượt qua <b>Điểm nút</b>, sẽ xảy ra <b>Bước nhảy</b> để chuyển sang <b>Chất mới</b>.
      </p>
    </div>
  );
}

function DualismView() {
  return (
    <div className="h-64 relative flex items-center justify-center bg-[#1A1A1A]">
      {/* Container representing "The Object" */}
      <motion.div 
         className="w-64 h-64 border-8 border-[#F5F0E1] flex items-center justify-center relative overflow-hidden bg-[#222]"
         animate={{ rotate: 360 }}
         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Force 1: Red Triangle */}
        <motion.div 
          className="absolute w-0 h-0 border-l-[100px] border-l-transparent border-t-[150px] border-t-[#C41E3A] border-r-[100px] border-r-transparent top-0"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
         {/* Force 2: Gold Triangle */}
         <motion.div 
          className="absolute w-0 h-0 border-l-[100px] border-l-transparent border-b-[150px] border-b-[#FFD700] border-r-[100px] border-r-transparent bottom-0 mix-blend-difference"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10 text-center bg-[#1A1A1A] p-2 border-2 border-[#fff]">
            <div className="font-black text-[#F5F0E1] text-xl uppercase">Mâu thuẫn</div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-4 right-4 text-right max-w-xs space-y-2">
         <div className="flex items-center justify-end gap-2 text-[#C41E3A] font-bold uppercase">
            <Zap size={20} /> <span>Đấu tranh (Tuyệt đối)</span>
         </div>
         <div className="flex items-center justify-end gap-2 text-[#FFD700] font-bold uppercase">
            <GitCommit size={20} /> <span>Thống nhất (Tương đối)</span>
         </div>
      </div>
    </div>
  );
}

function SpiralAnimation() {
  return (
    <div className="h-64 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md h-40">
        {/* SVG Spiral - Angular style */}
        <svg viewBox="0 0 400 200" className="w-full h-full stroke-[#FFD700] fill-none stroke-[4]">
           <motion.path
             d="M 50 150 L 100 100 L 150 150 L 200 100 L 250 150 L 300 100 L 350 150"
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           />
           {/* Markers */}
           <rect x="45" y="145" width="10" height="10" fill="#C41E3A" />
           <rect x="345" y="145" width="10" height="10" fill="#C41E3A" />
        </svg>
        
        <div className="absolute top-[60%] left-[10%] text-xs font-bold text-[#888] uppercase">Khẳng định</div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 text-xs font-bold text-[#888] uppercase">Phủ định</div>
        <div className="absolute top-[60%] right-[5%] text-xs font-bold text-[#FFD700] uppercase text-right">Phủ định <br/> của Phủ định</div>
      </div>
      
      <p className="text-center text-[#AAA] mt-8 max-w-md border-t border-[#333] pt-4 font-mono">
        Đường xoắn ốc của sự phát triển: Lặp lại cái cũ nhưng trên cơ sở cao hơn (Tính kế thừa + Tính phát triển).
      </p>
    </div>
  );
}
