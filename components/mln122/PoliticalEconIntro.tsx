"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CHAPTER_1_INTRO } from "@/data/mln122_content";
import { BookOpen, Lightbulb, Compass, Wrench, ChevronRight } from "lucide-react";

const FUNC_ICONS = [BookOpen, Lightbulb, Compass, Wrench];

export function PoliticalEconIntro() {
  const [expandedHistory, setExpandedHistory] = useState<number | null>(0);
  const [expandedFunction, setExpandedFunction] = useState<number | null>(null);

  return (
    <div className="space-y-16">
      {/* Lịch sử hình thành - Timeline tương tác */}
      <div>
        <h3 className="text-3xl font-black uppercase text-[#1A1A1A] mb-8 border-l-8 border-[#C41E3A] pl-6">
          Sự hình thành Kinh tế Chính trị
        </h3>
        <p className="font-sans text-base text-[#1A1A1A]/80 mb-6">Bấm từng thời kỳ để xem chi tiết</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {CHAPTER_1_INTRO.history.map((item, idx) => (
            <motion.button
              key={idx}
              type="button"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              onClick={() => setExpandedHistory(expandedHistory === idx ? null : idx)}
              className={`flex items-center gap-2 px-4 py-3 border-4 font-black text-sm uppercase transition-all ${
                expandedHistory === idx
                  ? "bg-[#C41E3A] text-[#FFD700] border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] -translate-y-1"
                  : "bg-[#E8E0D0] text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#FFD700] hover:border-[#C41E3A]"
              }`}
            >
              {item.period}
              <ChevronRight size={16} className={expandedHistory === idx ? "rotate-90" : ""} />
            </motion.button>
          ))}
        </div>
        {expandedHistory !== null && (
          <div className="socialist-block bg-[#E8E0D0] p-8 border-8 border-[#C41E3A] text-[#1A1A1A] transition-opacity duration-300">
            <h4 className="text-2xl font-black uppercase text-[#C41E3A] mb-3">
              {CHAPTER_1_INTRO.history[expandedHistory].school}
            </h4>
            <p className="font-sans text-lg leading-relaxed">{CHAPTER_1_INTRO.history[expandedHistory].idea}</p>
          </div>
        )}
      </div>

      {/* Đối tượng nghiên cứu */}
      <div className="socialist-block bg-[#1A1A1A] text-[#F5F0E1] p-8 border-8 border-[#C41E3A]">
        <h3 className="font-black uppercase text-[#FFD700] text-2xl mb-4">Đối tượng nghiên cứu</h3>
        <p className="text-xl font-serif italic leading-relaxed">&quot;{CHAPTER_1_INTRO.subject}&quot;</p>
      </div>

      {/* Phương pháp nghiên cứu - Bấm để xem */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#1A1A1A] mb-6">Phương pháp nghiên cứu</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CHAPTER_1_INTRO.methods.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35, type: "spring", stiffness: 150 }}
              whileHover={{ y: -4, backgroundColor: "#FFD700" }}
              className="socialist-block bg-[#E8E0D0] p-4 text-center font-sans font-bold uppercase text-sm cursor-default border-4 border-[#1A1A1A] text-[#1A1A1A]"
            >
              {m}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4 chức năng - Accordion */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#1A1A1A] mb-8">4 Chức năng</h3>
        <div className="space-y-3">
          {CHAPTER_1_INTRO.functions.map((fn, idx) => {
            const Icon = FUNC_ICONS[idx];
            const open = expandedFunction === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="border-4 border-[#1A1A1A] overflow-hidden bg-[#E8E0D0]"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFunction(open ? null : idx)}
                  className="w-full flex gap-4 p-6 text-left hover:bg-[#FFD700]/30 transition-colors"
                >
                  <div className="bg-[#FFD700] border-2 border-[#1A1A1A] p-3 text-[#1A1A1A] shrink-0 h-fit">
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black uppercase text-[#C41E3A] text-lg">{fn.name}</h4>
                  </div>
                  <ChevronRight size={24} className={`text-[#1A1A1A] shrink-0 transition-transform ${open ? "rotate-90" : ""}`} />
                </button>
                {open && (
                  <div className="px-6 pb-6 pt-0 border-t-2 border-dashed border-[#1A1A1A]/30">
                    <p className="font-sans text-[#1A1A1A] pl-[52px]">{fn.desc}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

