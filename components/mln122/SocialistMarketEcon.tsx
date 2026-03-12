"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHAPTER_5_SOCIALIST_MARKET } from "@/data/mln122_content";
import { Star, Users, Scale, X } from "lucide-react";

const FEATURE_CONTEXT = [
  {
    keyword: "Hiện đại & Hội nhập",
    significance:
      "Kinh tế Việt Nam vận hành theo cơ chế thị trường — có cung, có cầu, có cạnh tranh. Hội nhập WTO, CPTPP, RCEP đưa Việt Nam vào chuỗi giá trị toàn cầu, đồng thời đặt nền tảng cho phát triển bền vững.",
    bg: "#C41E3A",
    text: "#F5F0E1",
    accent: "#FFD700",
  },
  {
    keyword: "Đa sở hữu",
    significance:
      "Kinh tế nhà nước, tập thể, tư nhân, FDI cùng tồn tại. Kinh tế nhà nước 'giữ vai trò chủ đạo' — không có nghĩa là độc quyền, mà là dẫn dắt, làm hạt nhân để định hướng phát triển.",
    bg: "#1A1A1A",
    text: "#F5F0E1",
    accent: "#FFD700",
  },
  {
    keyword: "Phân phối hài hòa",
    significance:
      "Ai làm nhiều hưởng nhiều (theo lao động). Ai đầu tư vốn cũng được hưởng lợi tức (theo vốn). Hai nguyên tắc song song — điểm khác biệt căn bản với mô hình CNXH thô sơ.",
    bg: "#FFD700",
    text: "#1A1A1A",
    accent: "#C41E3A",
  },
  {
    keyword: "Nhà nước điều tiết",
    significance:
      "Nhà nước can thiệp qua thuế, lãi suất, kế hoạch chiến lược — không quyết định giá cả hay sản lượng cụ thể. Đây là điểm phân biệt với kinh tế kế hoạch hóa tập trung.",
    bg: "#4A3C31",
    text: "#F5F0E1",
    accent: "#FFD700",
  },
  {
    keyword: "Định hướng XHCN",
    significance:
      "Mục tiêu xuyên suốt: 'dân giàu, nước mạnh, dân chủ, công bằng, văn minh'. Đây chính là 'định hướng XHCN' — yếu tố phân biệt với kinh tế thị trường thuần túy chạy theo lợi nhuận.",
    bg: "#C41E3A",
    text: "#F5F0E1",
    accent: "#1A1A1A",
  },
];

export function SocialistMarketEcon() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedFeature !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedFeature]);

  return (
    <div className="space-y-16">
      {/* Tính tất yếu */}
      <div className="socialist-block bg-[#1A1A1A] text-[#F5F0E1] p-8 border-l-8 border-l-[#C41E3A]">
        <h3 className="font-black uppercase text-[#FFD700] text-xl mb-4">Tính tất yếu khách quan</h3>
        <p className="font-serif text-xl italic leading-relaxed">{CHAPTER_5_SOCIALIST_MARKET.necessity}</p>
      </div>

      {/* 5 đặc trưng — layoutId Card Grid */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#1A1A1A] mb-3 border-l-8 border-[#C41E3A] pl-6">
          5 Đặc trưng KTTT ĐHXHCN
        </h3>
        <p className="font-sans text-sm text-[#1A1A1A]/60 mb-8 pl-6">
          Bấm từng thẻ để xem phân tích sâu
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHAPTER_5_SOCIALIST_MARKET.features.map((feature, idx) => {
            const ctx = FEATURE_CONTEXT[idx];
            return (
              <motion.div
                key={idx}
                layoutId={`feature-card-${idx}`}
                onClick={() => setSelectedFeature(idx)}
                whileHover={{ y: -6, boxShadow: "10px 10px 0 #C41E3A" }}
                transition={{ layout: { duration: 0.4, type: "spring", bounce: 0.2 } }}
                className="cursor-pointer border-4 border-[#1A1A1A] p-6 bg-[#F5F0E1] shadow-[6px_6px_0_#C41E3A] relative overflow-hidden"
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-12 h-12"
                  style={{ background: `linear-gradient(135deg, transparent 50%, ${ctx.bg} 50%)` }}
                />

                <div
                  className="inline-flex items-center gap-2 font-black px-3 py-2 border-2 border-[#1A1A1A] mb-4 text-sm uppercase"
                  style={{ backgroundColor: ctx.bg, color: ctx.text }}
                >
                  <Star size={14} className="fill-current" /> {idx + 1}
                </div>
                <p className="font-sans text-sm font-semibold text-[#1A1A1A] leading-relaxed line-clamp-3 mb-4">
                  {feature}
                </p>
                <div className="flex items-center gap-2 text-[#C41E3A]">
                  <span className="font-black text-xs uppercase tracking-widest">{ctx.keyword}</span>
                  <span className="text-xs">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedFeature !== null && (() => {
            const ctx = FEATURE_CONTEXT[selectedFeature];
            return (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedFeature(null)}
                  className="fixed inset-0 z-50"
                  style={{ backgroundColor: "rgba(26,26,26,0.85)", backdropFilter: "blur(4px)" }}
                />

                {/* Morphing Card */}
                <motion.div
                  layoutId={`feature-card-${selectedFeature}`}
                  transition={{ layout: { duration: 0.45, type: "spring", bounce: 0.15 } }}
                  className="fixed z-50 border-4 border-[#FFD700] overflow-hidden flex flex-col"
                  style={{
                    inset: "clamp(16px, 5vw, 80px)",
                    backgroundColor: ctx.bg,
                    color: ctx.text,
                  }}
                >
                  {/* Header */}
                  <div
                    className="flex items-start justify-between p-6 md:p-8 border-b-4"
                    style={{ borderColor: ctx.accent }}
                  >
                    <div>
                      <div
                        className="inline-flex items-center gap-2 font-black px-3 py-1 border-2 text-xs uppercase mb-3"
                        style={{ borderColor: ctx.text, color: ctx.text, opacity: 0.6 }}
                      >
                        <Star size={12} className="fill-current" /> Đặc trưng {selectedFeature + 1}
                      </div>
                      <h2
                        className="text-3xl md:text-5xl font-black uppercase leading-none"
                        style={{ color: ctx.accent }}
                      >
                        {ctx.keyword}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="p-2 border-2 transition-opacity hover:opacity-70 shrink-0 ml-4"
                      style={{ borderColor: ctx.text, color: ctx.text }}
                    >
                      <X size={28} strokeWidth={3} />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                    <div className="border-l-4 pl-6" style={{ borderColor: ctx.accent }}>
                      <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
                        &ldquo;{CHAPTER_5_SOCIALIST_MARKET.features[selectedFeature]}&rdquo;
                      </p>
                    </div>
                    <div
                      className="p-6 border-4"
                      style={{ borderColor: ctx.accent, backgroundColor: ctx.accent, color: ctx.bg }}
                    >
                      <h4 className="font-black uppercase text-sm mb-3 tracking-widest">Phân tích</h4>
                      <p className="font-sans text-base leading-relaxed font-semibold">
                        {ctx.significance}
                      </p>
                    </div>
                  </div>

                  {/* Footer Nav */}
                  <div
                    className="flex items-center justify-between p-4 border-t-4"
                    style={{ borderColor: ctx.accent }}
                  >
                    <button
                      onClick={() => setSelectedFeature(p => p !== null && p > 0 ? p - 1 : p)}
                      disabled={selectedFeature === 0}
                      className="px-5 py-2 font-black uppercase text-xs border-2 disabled:opacity-30 transition-opacity"
                      style={{ borderColor: ctx.text, color: ctx.text }}
                    >
                      ← Trước
                    </button>
                    <span className="font-black text-sm opacity-50">
                      {selectedFeature + 1} / {CHAPTER_5_SOCIALIST_MARKET.features.length}
                    </span>
                    <button
                      onClick={() => setSelectedFeature(p => p !== null && p < FEATURE_CONTEXT.length - 1 ? p + 1 : p)}
                      disabled={selectedFeature === FEATURE_CONTEXT.length - 1}
                      className="px-5 py-2 font-black uppercase text-xs border-2 disabled:opacity-30 transition-opacity"
                      style={{ borderColor: ctx.text, color: ctx.text }}
                    >
                      Tiếp →
                    </button>
                  </div>
                </motion.div>
              </>
            );
          })()}
        </AnimatePresence>
      </div>

      {/* Hoàn thiện thể chế */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#1A1A1A] mb-6">Hoàn thiện thể chế</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {CHAPTER_5_SOCIALIST_MARKET.institutionImprovement.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="socialist-block bg-[#F5F0E1] p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="bg-[#1A1A1A] text-[#FFD700] inline-block font-black px-3 py-1 text-xs mb-3 uppercase">
                {`Nhiệm vụ ${idx + 1}`}
              </div>
              <p className="font-sans font-semibold text-[#1A1A1A]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quan hệ lợi ích kinh tế */}
      <div className="socialist-block bg-[#F5F0E1] p-8 border-8 border-[#C41E3A]">
        <div className="flex items-center gap-4 mb-6">
          <Scale size={32} className="text-[#C41E3A]" />
          <h3 className="font-black uppercase text-2xl text-[#1A1A1A]">
            Quan hệ lợi ích kinh tế
          </h3>
        </div>
        <p className="font-sans text-lg mb-6 font-semibold border-b-4 border-[#1A1A1A] pb-4">
          {CHAPTER_5_SOCIALIST_MARKET.economicInterests.definition}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-black uppercase text-sm text-[#C41E3A] mb-3">Các loại lợi ích</h4>
            {CHAPTER_5_SOCIALIST_MARKET.economicInterests.types.map((t, i) => (
              <div key={i} className="flex gap-3 items-center mb-3">
                <Users size={16} className="text-[#C41E3A] shrink-0" />
                <p className="font-sans font-semibold text-sm">{t}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1A1A1A] text-[#F5F0E1] p-6 border-4 border-[#C41E3A]">
            <h4 className="font-black uppercase text-sm text-[#FFD700] mb-3">Vai trò Nhà nước</h4>
            <p className="font-sans text-sm leading-relaxed">
              {CHAPTER_5_SOCIALIST_MARKET.economicInterests.stateRole}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
