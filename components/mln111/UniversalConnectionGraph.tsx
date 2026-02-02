
"use client";

import React from "react";
import { motion } from "framer-motion";
import { UNIVERSAL_CONNECTIONS } from "@/data/mln111_content";
import { cn } from "@/lib/utils";

export function UniversalConnectionGraph() {
  const { nodes, links, details } = UNIVERSAL_CONNECTIONS;

  // Simple static layout for "graph"
  const nodePositions: Record<string, { x: number, y: number }> = {
    root: { x: 50, y: 50 },
    nature: { x: 50, y: 20 },
    society: { x: 20, y: 50 },
    thinking: { x: 80, y: 50 },
    objective: { x: 20, y: 80 },
    universal: { x: 50, y: 80 },
    diverse: { x: 80, y: 80 },
  };

  return (
    <div className="h-screen w-full bg-[#1A1A1A] flex flex-col items-center justify-center p-4 relative overflow-hidden border-b-4 border-[#C41E3A]">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#C41E3A_1px,transparent_1px),linear-gradient(to_bottom,#C41E3A_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="z-10 bg-[#C41E3A] text-[#FFD700] px-6 py-2 mb-12 border-2 border-[#FFD700] shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
             <h2 className="text-2xl font-black uppercase tracking-widest">Nguyên lý Mối liên hệ phổ biến</h2>
        </div>
        
        <div className="relative w-full max-w-4xl aspect-video border-4 border-[#F5F0E1] bg-[#1A1A1A] shadow-[12px_12px_0_#C41E3A]">
            {/* Links Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {links.map((link, i) => {
                    const start = nodePositions[link.source];
                    const end = nodePositions[link.target];
                    return (
                        <motion.line
                            key={i}
                            x1={`${start.x}%`}
                            y1={`${start.y}%`}
                            x2={`${end.x}%`}
                            y2={`${end.y}%`}
                            stroke="#555"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    );
                })}
            </svg>

            {/* Nodes Layer */}
            {nodes.map((node) => (
                <div
                    key={node.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer hover:z-50"
                    style={{ left: `${nodePositions[node.id].x}%`, top: `${nodePositions[node.id].y}%` }}
                >
                    <motion.div
                        className={cn(
                            "w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-4 shadow-lg transition-all hover:scale-110",
                            node.type === "core" ? "bg-[#C41E3A] border-[#FFD700] z-20" :
                            node.type === "domain" ? "bg-[#F5F0E1] border-[#1A1A1A] z-10" :
                            "bg-[#1A1A1A] border-[#F5F0E1] z-0"
                        )}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                    >
                        <span className={cn(
                            "text-xl font-black uppercase",
                            node.type === "core" ? "text-[#FFD700]" :
                            node.type === "domain" ? "text-[#1A1A1A]" :
                            "text-[#F5F0E1]"
                        )}>
                            {node.type === 'core' ? 'NL' : node.type === 'domain' ? 'Vực' : 'Tính'}
                        </span>
                    </motion.div>
                    
                    <div className="mt-4 bg-[#1A1A1A] border-2 border-[#fff] px-3 py-1 text-[#F5F0E1] text-sm font-bold uppercase tracking-wide whitespace-nowrap shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                        {node.label}
                    </div>

                    {/* Simple tooltip for properties */}
                    {node.type === "property" && (
                         <div className="absolute top-full mt-4 w-56 p-4 bg-[#C41E3A] border-2 border-[#FFD700] text-xs text-[#fff] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 shadow-xl font-sans">
                            <span className="block font-bold text-[#FFD700] uppercase mb-1">{node.label}:</span>
                            {details[node.id as keyof typeof details]}
                         </div>
                    )}
                </div>
            ))}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl z-10 w-full text-[#F5F0E1]">
             <div className="bg-[#1A1A1A] p-4 border border-[#555] text-center">
                 <h4 className="font-bold text-[#FFD700] uppercase mb-2">Khách quan</h4>
                 <p className="text-xs opacity-70">Mối liên hệ vốn có, không phụ thuộc ý muốn chủ quan.</p>
             </div>
             <div className="bg-[#1A1A1A] p-4 border border-[#555] text-center">
                 <h4 className="font-bold text-[#FFD700] uppercase mb-2">Phổ biến</h4>
                 <p className="text-xs opacity-70">Tồn tại ở mọi sự vật, hiện tượng trong mọi không gian, thời gian.</p>
             </div>
             <div className="bg-[#1A1A1A] p-4 border border-[#555] text-center">
                 <h4 className="font-bold text-[#FFD700] uppercase mb-2">Đa dạng</h4>
                 <p className="text-xs opacity-70">Mối liên hệ khác nhau có vị trí, vai trò khác nhau.</p>
             </div>
        </div>
    </div>
  );
}
