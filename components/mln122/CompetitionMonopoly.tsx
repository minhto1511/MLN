"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHAPTER_4_MONOPOLY } from "@/data/mln122_content";
import { Building, Shield, TrendingDown, TrendingUp, ChevronRight } from "lucide-react";

const FORMATION_STEPS = [
  {
    num: "01",
    title: "Tự do cạnh tranh",
    trigger: "Vô số DN nhỏ → cạnh tranh giảm giá → lợi nhuận thu hẹp",
    detail: "CNTB thế kỷ XIX: hàng nghìn doanh nghiệp nhỏ trên thị trường. Cạnh tranh về giá, chất lượng và công nghệ diễn ra khốc liệt. Nhiều DN thua lỗ và phá sản.",
    color: "#F5F0E1",
    textColor: "#1A1A1A",
  },
  {
    num: "02",
    title: "Tích tụ Tư bản",
    trigger: "Kẻ thắng tích lũy giá trị thặng dư → DN mạnh ngày càng lớn hơn",
    detail: "Nhà tư bản thắng cuộc tích lũy lợi nhuận thành tư bản phụ thêm, mở rộng quy mô SX. Năng suất tăng giúp họ cạnh tranh mạnh hơn, bỏ xa đối thủ.",
    color: "#FFD700",
    textColor: "#1A1A1A",
  },
  {
    num: "03",
    title: "Tập trung Tư bản",
    trigger: "DN lớn thôn tính DN nhỏ → số lượng DN giảm mạnh",
    detail: "Qua sáp nhập, mua lại, phá sản cưỡng bức... tư bản tập trung vào tay ít người. Mỗi DN còn lại kiểm soát một phần lớn thị trường.",
    color: "#C41E3A",
    textColor: "#F5F0E1",
  },
  {
    num: "04",
    title: "Hình thành Độc quyền",
    trigger: "Vài tổ chức khổng lồ chi phối thị trường → giá độc quyền",
    detail: "Cartel, Syndicate, Trust, Conglomerate ra đời. Giá cả do tổ chức độc quyền quy định, không còn tự do cạnh tranh. CNTB tự do cạnh tranh → CNTB độc quyền.",
    color: "#1A1A1A",
    textColor: "#F5F0E1",
  },
];

export function CompetitionMonopoly() {
  const [activeTab, setActiveTab] = useState<"forms" | "features" | "role">("forms");
  const [comparePair, setComparePair] = useState<[number, number] | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const toggleCompare = (idx: number) => {
    if (!comparePair) {
      setComparePair([idx, idx]);
      return;
    }
    const [a, b] = comparePair;
    if (a === idx || b === idx) {
      setComparePair(null);
      return;
    }
    setComparePair([a, idx]);
  };

  return (
    <div className="space-y-16">
      {/* Quá trình hình thành — Interactive Stepper */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#F5F0E1] mb-4 border-l-8 border-[#FFD700] pl-6">Quá trình hình thành Độc quyền</h3>
        <p className="font-sans text-sm text-[#F5F0E1]/60 mb-8 pl-6">Bấm từng bước để theo dõi quá trình</p>

        {/* Progress Line + Step Buttons */}
        <div className="relative mb-8">
          {/* Track */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-[#F5F0E1]/20 mx-8" />
          <motion.div
            className="absolute top-8 left-0 h-1 bg-[#FFD700] mx-8 origin-left"
            animate={{ scaleX: activeStep / (FORMATION_STEPS.length - 1) }}
            transition={{ duration: 0.4 }}
            style={{ right: 0 }}
          />

          {/* Steps */}
          <div className="flex justify-between relative z-10">
            {FORMATION_STEPS.map((step, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center gap-3 focus:outline-none group"
              >
                <motion.div
                  animate={{
                    backgroundColor: idx <= activeStep ? step.color : "#2A2A2A",
                    borderColor: idx === activeStep ? "#FFD700" : idx < activeStep ? step.color : "#555",
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border-4 font-black text-lg md:text-xl shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
                  style={{ color: idx <= activeStep ? step.textColor : "#AAA" }}
                >
                  {step.num}
                </motion.div>
                <span className={`font-black uppercase text-[10px] md:text-xs text-center max-w-[80px] leading-tight transition-colors ${idx === activeStep ? "text-[#FFD700]" : "text-[#F5F0E1]/50"}`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="border-4 border-[#FFD700] overflow-hidden"
          >
            <div
              className="p-6 md:p-8"
              style={{
                backgroundColor: FORMATION_STEPS[activeStep].color,
                color: FORMATION_STEPS[activeStep].textColor,
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="font-black uppercase text-xs tracking-[0.3em] opacity-60 block mb-1">Bước {FORMATION_STEPS[activeStep].num}</span>
                  <h4 className="text-2xl md:text-3xl font-black uppercase leading-tight">{FORMATION_STEPS[activeStep].title}</h4>
                </div>
                {activeStep < FORMATION_STEPS.length - 1 && (
                  <button
                    onClick={() => setActiveStep(s => s + 1)}
                    className="shrink-0 flex items-center gap-1 px-4 py-2 border-2 font-black uppercase text-xs transition-all hover:-translate-y-1"
                    style={{ borderColor: FORMATION_STEPS[activeStep].textColor }}
                  >
                    Tiếp <ChevronRight size={14} />
                  </button>
                )}
              </div>
              <p
                className="font-mono text-sm mb-4 px-4 py-2 border-l-4 opacity-80"
                style={{ borderColor: FORMATION_STEPS[activeStep].textColor }}
              >
                {FORMATION_STEPS[activeStep].trigger}
              </p>
              <p className="font-sans text-base leading-relaxed">{FORMATION_STEPS[activeStep].detail}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tab buttons */}
      <div className="flex flex-wrap gap-4">
        {[
          { key: 'forms' as const, label: 'Các hình thức ĐQ' },
          { key: 'features' as const, label: '5 đặc điểm (Lênin)' },
          { key: 'role' as const, label: 'Vai trò lịch sử CNTB' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 font-black uppercase border-4 transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-[#C41E3A] text-[#F5F0E1] border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] -translate-y-1'
                : 'bg-[#E8E0D0] text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#FFD700]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'forms' && (
          <>
            <p className="text-sm font-sans text-[#F5F0E1]/80 mb-4">Bấm 2 hình thức để so sánh trực tiếp</p>
            <div className="grid md:grid-cols-2 gap-6">
              {CHAPTER_4_MONOPOLY.monopolyForms.map((form, idx) => {
                const isSelected = comparePair && (comparePair[0] === idx || comparePair[1] === idx);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleCompare(idx)}
                    className={`socialist-block p-6 text-left hover:-translate-y-1 transition-all bg-[#E8E0D0] text-[#1A1A1A] ${
                      isSelected ? "ring-4 ring-[#FFD700] ring-offset-2 ring-offset-[#1A1A1A]" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Building size={24} className="text-[#C41E3A]" />
                        <h4 className="font-black uppercase text-lg text-[#C41E3A]">{form.name}</h4>
                      </div>
                      {isSelected && <span className="text-xs font-black text-[#C41E3A]">Đang so sánh</span>}
                    </div>
                    <p className="font-sans text-[#1A1A1A]">{form.desc}</p>
                  </button>
                );
              })}
            </div>
            {comparePair && comparePair[0] !== comparePair[1] && (
              <div className="mt-8 grid md:grid-cols-2 gap-6 p-6 bg-[#1A1A1A] border-4 border-[#FFD700] text-[#F5F0E1]">
                <div>
                  <h4 className="font-black uppercase text-[#FFD700] mb-2">{CHAPTER_4_MONOPOLY.monopolyForms[comparePair[0]].name}</h4>
                  <p className="font-sans text-sm">{CHAPTER_4_MONOPOLY.monopolyForms[comparePair[0]].desc}</p>
                </div>
                <div>
                  <h4 className="font-black uppercase text-[#FFD700] mb-2">{CHAPTER_4_MONOPOLY.monopolyForms[comparePair[1]].name}</h4>
                  <p className="font-sans text-sm">{CHAPTER_4_MONOPOLY.monopolyForms[comparePair[1]].desc}</p>
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === 'features' && (
          <div className="space-y-4">
            {CHAPTER_4_MONOPOLY.leninFeatures.map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start socialist-block-inverse p-6">
                <div className="bg-[#FFD700] text-[#1A1A1A] font-black text-xl px-3 py-1 border-2 border-[#FFD700] shrink-0">{idx + 1}</div>
                <p className="font-sans text-lg text-[#F5F0E1] font-semibold leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'role' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="socialist-block bg-[#E8E0D0] p-8 border-8 border-[#1A1A1A] text-[#1A1A1A]">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={28} className="text-[#C41E3A]" />
                <h4 className="font-black uppercase text-xl text-[#C41E3A]">Vai trò tích cực</h4>
              </div>
              {CHAPTER_4_MONOPOLY.historicalRole.positive.map((p, i) => (
                <div key={i} className="flex gap-2 items-start mb-3">
                  <div className="w-3 h-3 bg-[#C41E3A] mt-1.5 shrink-0" />
                  <p className="font-sans font-semibold text-[#1A1A1A]">{p}</p>
                </div>
              ))}
            </div>
            <div className="socialist-block bg-[#1A1A1A] text-[#F5F0E1] p-8 border-8 border-[#C41E3A]">
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown size={28} className="text-[#FFD700]" />
                <h4 className="font-black uppercase text-xl text-[#FFD700]">Giới hạn lịch sử</h4>
              </div>
              {CHAPTER_4_MONOPOLY.historicalRole.limitations.map((l, i) => (
                <div key={i} className="flex gap-2 items-start mb-3">
                  <div className="w-3 h-3 bg-[#FFD700] mt-1.5 shrink-0" />
                  <p className="font-sans font-semibold">{l}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Độc quyền nhà nước */}
      <div className="socialist-block bg-[#FFD700] text-[#1A1A1A] p-8 border-8 border-[#1A1A1A] shadow-[8px_8px_0_#C41E3A]">
        <div className="flex items-center gap-4 mb-4">
          <Shield size={32} className="text-[#C41E3A]" />
          <h3 className="font-black uppercase text-2xl">Độc quyền Nhà nước</h3>
        </div>
        <p className="font-sans text-lg font-semibold mb-4">
          {CHAPTER_4_MONOPOLY.stateMonopoly.definition}
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          {CHAPTER_4_MONOPOLY.stateMonopoly.causes.map((c, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] text-[#FFD700] px-4 py-2 font-black text-sm uppercase border-2 border-[#C41E3A]"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

