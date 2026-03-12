"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CHAPTER_6_INDUSTRIALIZATION } from "@/data/mln122_content";
import { Factory, Globe2, ThumbsUp, ThumbsDown } from "lucide-react";

const REV_DETAIL = [
  { tech: "Máy hơi nước, cơ khí hóa", labor: "Thủ công → công xưởng; công nhân CN ra đời", vietnam: "Bài học về nền tảng công nghiệp và cơ sở vật chất ban đầu" },
  { tech: "Điện khí hóa, động cơ điện, dây chuyền SX", labor: "Sản xuất hàng loạt; kỷ luật công nghiệp cao", vietnam: "Nhu cầu tổ chức quy mô lớn, hạ tầng năng lượng & logistics" },
  { tech: "Tự động hóa, điện tử, máy tính, Internet", labor: "Dịch chuyển sang lao động tri thức; giảm lao động cơ bắp", vietnam: "Tầm quan trọng CNTT, giáo dục và hội nhập công nghệ" },
  { tech: "AI, IoT, Big Data, Blockchain, in 3D", labor: "Đòi hỏi kỹ năng số, sáng tạo và thích ứng liên tục", vietnam: "Ưu tiên chuyển đổi số, nhân lực chất lượng cao" },
];

export function IndustrializationIntegration() {
  const [showImpact, setShowImpact] = useState<"positive" | "negative">("positive");
  const [selectedRevolution, setSelectedRevolution] = useState(0);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <div className="space-y-16">
      {/* 4 cuộc CMCN */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#F5F0E1] mb-8 border-l-8 border-[#C41E3A] pl-6">Các cuộc Cách mạng Công nghiệp</h3>
        <p className="font-sans text-sm text-[#F5F0E1]/60 mb-4 pl-1">Bấm để lật thẻ xem chi tiết. Bấm thẻ đã lật để chọn.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHAPTER_6_INDUSTRIALIZATION.industrialRevolutions.map((rev, idx) => {
            const detail = REV_DETAIL[idx];
            const isFlipped = flippedCard === idx;
            const isSelected = selectedRevolution === idx;
            return (
              <div
                key={idx}
                className="relative h-52 cursor-pointer"
                style={{ perspective: "900px" }}
                onClick={() => {
                  if (isFlipped) {
                    setSelectedRevolution(idx);
                  } else {
                    setFlippedCard(idx);
                  }
                }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.55, type: "spring", stiffness: 90, damping: 18 }}
                  className="w-full h-full relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 border-4 p-5 flex flex-col justify-between"
                    style={{
                      backfaceVisibility: "hidden",
                      borderColor: isSelected ? "#FFD700" : "#F5F0E1",
                      backgroundColor: isSelected ? "#C41E3A" : "#2A2A2A",
                      boxShadow: isSelected ? "6px 6px 0 #FFD700" : "6px 6px 0 #000",
                    }}
                  >
                    <div
                      className="font-black uppercase text-xs px-2 py-1 inline-block border-2 self-start"
                      style={{
                        backgroundColor: isSelected ? "#FFD700" : "#1A1A1A",
                        color: isSelected ? "#1A1A1A" : "#FFD700",
                        borderColor: isSelected ? "#1A1A1A" : "#FFD700",
                      }}
                    >
                      {rev.era}
                    </div>
                    <p className="font-sans text-sm font-semibold leading-relaxed text-[#F5F0E1]">{rev.desc}</p>
                    <p className="font-black text-[10px] uppercase tracking-widest text-[#F5F0E1]/40">
                      Bấm để xem chi tiết →
                    </p>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 border-4 border-[#FFD700] bg-[#FFD700] p-5 flex flex-col gap-2 overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="bg-[#1A1A1A] text-[#FFD700] font-black text-[10px] uppercase px-2 py-1 self-start border-2 border-[#1A1A1A]">
                      Công nghệ lõi
                    </div>
                    <p className="font-sans text-xs font-semibold text-[#1A1A1A] leading-snug">{detail.tech}</p>
                    <div className="bg-[#C41E3A] text-[#FFD700] font-black text-[10px] uppercase px-2 py-1 self-start border-2 border-[#1A1A1A] mt-1">
                      Lao động
                    </div>
                    <p className="font-sans text-xs font-semibold text-[#1A1A1A] leading-snug">{detail.labor}</p>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setSelectedRevolution(idx); setFlippedCard(null); }}
                      className="mt-auto bg-[#1A1A1A] text-[#FFD700] font-black text-[10px] uppercase px-3 py-1.5 border-2 border-[#1A1A1A] self-start hover:bg-[#C41E3A] transition-colors"
                    >
                      Chọn để xem đầy đủ ↓
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 socialist-block bg-[#E8E0D0] border-8 border-[#1A1A1A] p-6 md:p-8 text-[#1A1A1A]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
            <h4 className="text-xl md:text-2xl font-black uppercase text-[#1A1A1A]">
              Trọng tâm đang chọn: {CHAPTER_6_INDUSTRIALIZATION.industrialRevolutions[selectedRevolution].era}
            </h4>
            <div className="text-xs font-black uppercase tracking-[0.18em] text-[#C41E3A] shrink-0">
              Bấm từng cuộc cách mạng để đổi góc nhìn
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border-4 border-[#1A1A1A] bg-[#1A1A1A] text-[#FFD700] p-4">
              <p className="text-[11px] uppercase font-black tracking-[0.18em] mb-2">Công nghệ lõi</p>
              <p className="font-sans font-semibold">
                {[
                  "Máy hơi nước và cơ khí hóa",
                  "Điện, động cơ và dây chuyền",
                  "Điện tử, máy tính và Internet",
                  "AI, dữ liệu lớn, IoT và hệ thống số",
                ][selectedRevolution]}
              </p>
            </div>
            <div className="border-4 border-[#1A1A1A] bg-[#FFD700] text-[#1A1A1A] p-4">
              <p className="text-[11px] uppercase font-black tracking-[0.18em] mb-2">Tác động tới lao động</p>
              <p className="font-sans font-semibold">
                {[
                  "Từ thủ công sang công xưởng cơ giới.",
                  "Mở rộng sản xuất hàng loạt và kỷ luật công nghiệp.",
                  "Tăng tự động hóa, dịch chuyển sang lao động tri thức.",
                  "Đòi hỏi kỹ năng số, thích ứng nhanh và sáng tạo liên tục.",
                ][selectedRevolution]}
              </p>
            </div>
            <div className="border-4 border-[#1A1A1A] bg-[#C41E3A] text-[#F5F0E1] p-4">
              <p className="text-[11px] uppercase font-black tracking-[0.18em] mb-2">Hàm ý với Việt Nam</p>
              <p className="font-sans font-semibold">
                {[
                  "Bài học về nền tảng công nghiệp ban đầu và cơ sở vật chất.",
                  "Nhu cầu tổ chức sản xuất quy mô lớn, hạ tầng năng lượng và logistics.",
                  "Tầm quan trọng của CNTT, giáo dục và hội nhập công nghệ.",
                  "Ưu tiên chuyển đổi số, nhân lực chất lượng cao và năng lực đổi mới.",
                ][selectedRevolution]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CNH-HĐH ở Việt Nam */}
      <div className="socialist-block bg-[#1A1A1A] text-[#F5F0E1] p-8 border-8 border-[#C41E3A]">
        <div className="flex items-center gap-4 mb-6">
          <Factory size={36} className="text-[#FFD700]" />
          <h3 className="font-black uppercase text-2xl text-[#FFD700]">CNH-HĐH ở Việt Nam</h3>
        </div>
        <p className="font-serif text-lg italic mb-8 border-b-2 border-[#F5F0E1]/30 pb-6">{CHAPTER_6_INDUSTRIALIZATION.vietnamIndustrialization.definition}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-black uppercase text-sm text-[#FFD700] mb-4">Tính tất yếu</h4>
            {CHAPTER_6_INDUSTRIALIZATION.vietnamIndustrialization.necessity.map((n, i) => (
              <div key={i} className="flex gap-3 items-start mb-3">
                <div className="w-2 h-2 bg-[#C41E3A] mt-2 shrink-0" />
                <p className="font-sans text-sm font-semibold">{n}</p>
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-black uppercase text-sm text-[#FFD700] mb-4">Nội dung</h4>
            {CHAPTER_6_INDUSTRIALIZATION.vietnamIndustrialization.content.map((c, i) => (
              <div key={i} className="flex gap-3 items-start mb-3">
                <div className="w-2 h-2 bg-[#FFD700] mt-2 shrink-0" />
                <p className="font-sans text-sm font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hội nhập KTQT */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <Globe2 size={32} className="text-[#FFD700]" />
          <h3 className="text-2xl font-black uppercase text-[#F5F0E1]">Hội nhập Kinh tế Quốc tế</h3>
        </div>
            <div className="socialist-block bg-[#E8E0D0] p-6 mb-8 border-l-8 border-l-[#C41E3A] text-[#1A1A1A]">
          <p className="font-sans text-lg font-semibold">{CHAPTER_6_INDUSTRIALIZATION.internationalIntegration.definition}</p>
        </div>

        {/* Tác động */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setShowImpact('positive')}
            className={`flex items-center gap-2 px-6 py-3 font-black uppercase border-4 transition-all ${showImpact === 'positive' ? 'bg-[#FFD700] text-[#1A1A1A] border-[#1A1A1A] shadow-[4px_4px_0_#C41E3A] -translate-y-1' : 'bg-[#E8E0D0] text-[#1A1A1A] border-[#1A1A1A]'}`}
          >
            <ThumbsUp size={18} /> Tích cực
          </button>
          <button
            onClick={() => setShowImpact('negative')}
            className={`flex items-center gap-2 px-6 py-3 font-black uppercase border-4 transition-all ${showImpact === 'negative' ? 'bg-[#C41E3A] text-[#F5F0E1] border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] -translate-y-1' : 'bg-[#E8E0D0] text-[#1A1A1A] border-[#1A1A1A]'}`}
          >
            <ThumbsDown size={18} /> Tiêu cực
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {(showImpact === 'positive'
            ? CHAPTER_6_INDUSTRIALIZATION.internationalIntegration.impacts.positive
            : CHAPTER_6_INDUSTRIALIZATION.internationalIntegration.impacts.negative
          ).map((impact, idx) => (
            <div key={idx} className={`socialist-block p-5 ${showImpact === 'positive' ? 'bg-[#E8E0D0] text-[#1A1A1A]' : 'bg-[#1A1A1A] text-[#F5F0E1] border-[#C41E3A]'}`}>
              <p className="font-sans font-semibold">{impact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phương hướng */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#F5F0E1] mb-6">Phương hướng</h3>
        <div className="space-y-3">
          {CHAPTER_6_INDUSTRIALIZATION.internationalIntegration.directions.map(
            (dir, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-center socialist-block bg-[#FFD700] p-4 border-[#1A1A1A] shadow-[4px_4px_0_#C41E3A] hover:shadow-[6px_6px_0_#C41E3A] transition-shadow"
              >
                <div className="bg-[#C41E3A] text-[#FFD700] font-black text-lg px-3 py-1 border-2 border-[#1A1A1A] shrink-0">
                  {idx + 1}
                </div>
                <p className="font-sans font-bold text-[#1A1A1A]">{dir}</p>
              </div>
            )
          )}
        </div>
      </div>

    </div>
  );
}

