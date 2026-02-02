"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HUMAN_VIETNAM } from "@/data/mln111_content";
import { cn } from "@/lib/utils";
import { User, Landmark, Plus, Minus } from "lucide-react";

export function HumanVietnamAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#FFF8E7] p-8 lg:p-16 border-4 border-[#C41E3A]">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left: Human Essence */}
        <div className="space-y-8">
            <h3 className="text-4xl font-black uppercase text-[#C41E3A] mb-4 flex items-center gap-4">
                <User size={48} />
                Con Người
            </h3>
            <div className="bg-[#1A1A1A] p-8 text-[#F5F0E1] relative shadow-[12px_12px_0_#C41E3A]">
                <blockquote className="font-serif italic text-2xl leading-relaxed mb-4">
                    &quot;{HUMAN_VIETNAM.human.definition}&quot;
                </blockquote>
                <div className="h-1 w-20 bg-[#C41E3A] mb-4" />
                <p className="font-sans text-sm opacity-90">
                    {HUMAN_VIETNAM.human.role}
                </p>
                {/* Visual Accent */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFD700]" />
            </div>
        </div>

        {/* Right: Application to Vietnam */}
        <div className="space-y-6">
            <h3 className="text-4xl font-black uppercase text-[#1A1A1A] mb-4 flex items-center gap-4">
                <Landmark size={48} />
                Thực tiễn Việt Nam
            </h3>
            <div className="space-y-4">
                {HUMAN_VIETNAM.vietnam_application.map((item, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div key={idx} className="border-2 border-[#1A1A1A] bg-white transition-all">
                            <button 
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="w-full flex justify-between items-center p-4 font-bold uppercase text-lg hover:bg-[#F0F0F0] text-left"
                            >
                                <span className={cn("transition-colors", isOpen ? "text-[#C41E3A]" : "text-[#1A1A1A]")}>
                                    {item.area}
                                </span>
                                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4 pt-0 border-t border-[#EEE] font-sans text-[#555] leading-relaxed">
                                            {item.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
}
