"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HISTORICAL_MATERIALISM } from "@/data/mln111_content";
import { cn } from "@/lib/utils";
import { Users, Flag, Building2, MessageSquareQuote } from "lucide-react";

const ICONS = {
  class: Users,
  nation: Flag,
  state: Building2,
  social_consciousness: MessageSquareQuote,
};

export function SocialStructureTabs() {
  const [activeTab, setActiveTab] = useState(HISTORICAL_MATERIALISM.social_political_concepts[0].id);

  return (
    <div className="bg-[#E5E0D1] p-6 lg:p-12 border-4 border-[#1A1A1A]">
      <div className="grid md:grid-cols-12 gap-8 h-full min-h-[400px]">
        {/* Sidebar Tabs */}
        <div className="md:col-span-4 flex flex-col gap-2">
            <div className="bg-[#1A1A1A] text-white p-4 font-black uppercase text-lg mb-4">
                Cấu trúc Xã hội
            </div>
          {HISTORICAL_MATERIALISM.social_political_concepts.map((item) => {
            const Icon = ICONS[item.id as keyof typeof ICONS] || Users;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "p-4 text-left font-bold uppercase border-l-8 transition-all flex items-center gap-4 group",
                  activeTab === item.id
                    ? "bg-white border-[#C41E3A] text-[#C41E3A] shadow-md pl-6"
                    : "bg-[#D6D1C1] border-transparent text-[#555] hover:bg-[#CDC7B5] hover:border-[#888]"
                )}
              >
                <Icon size={24} className={cn(activeTab === item.id ? "text-[#C41E3A]" : "text-[#888] group-hover:text-[#555]")} />
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="md:col-span-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white border-2 border-[#1A1A1A] p-8 h-full shadow-[8px_8px_0_#C41E3A]"
            >
              <h3 className="text-3xl font-black uppercase text-[#1A1A1A] mb-6 decoration-[#FFD700] underline decoration-4 underline-offset-4">
                {HISTORICAL_MATERIALISM.social_political_concepts.find((i) => i.id === activeTab)?.title}
              </h3>
              
              <div className="prose prose-lg max-w-none font-sans text-[#333]">
                <p>
                    {HISTORICAL_MATERIALISM.social_political_concepts.find((i) => i.id === activeTab)?.content}
                </p>
              </div>

              {/* Decorative Stamp */}
              <div className="absolute top-4 right-4 opacity-10 rotate-[-15deg] pointer-events-none">
                <div className="border-4 border-black p-2 w-32 h-32 rounded-full flex items-center justify-center">
                    <span className="font-black uppercase text-center text-xs">Phê duyệt<br/>Học thuật</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
