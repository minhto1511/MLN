"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHAPTER_3_SURPLUS } from "@/data/mln122_content";
import { ArrowRight, TrendingUp, Wallet, ArrowRightCircle } from "lucide-react";

const CIRCUITS = {
  simple: {
    label: "H – T – H",
    sublabel: "Lưu thông hàng hóa giản đơn",
    nodes: [
      {
        id: "H_start", label: "H", sub: "Hàng hóa",
        bg: "#F5F0E1", text: "#1A1A1A",
        desc: "Hàng hóa được mang đi bán. Mục đích ban đầu không phải là tiền, mà là để đổi lấy hàng hóa khác mình cần.",
      },
      {
        id: "T_mid", label: "T", sub: "Tiền tệ",
        bg: "#FFD700", text: "#1A1A1A",
        desc: "Tiền chỉ là phương tiện trung gian — tạm thời nắm giữ để chuyển sang hàng hóa khác. Không phải mục đích cuối cùng.",
      },
      {
        id: "H_end", label: "H'", sub: "Hàng hóa khác",
        bg: "#4A3C31", text: "#F5F0E1",
        desc: "Hàng hóa cuối cùng thỏa mãn nhu cầu của người tiêu dùng. Mục đích đạt được: giá trị sử dụng.",
      },
    ],
    purpose: "Mục đích: Giá trị sử dụng",
    purposeColor: "#4A3C31",
  },
  capital: {
    label: "T – H – T'",
    sublabel: "Công thức chung của tư bản",
    nodes: [
      {
        id: "T_start", label: "T", sub: "Tiền (vốn)",
        bg: "#FFD700", text: "#1A1A1A",
        desc: "Nhà tư bản ứng tiền ra để mua sức lao động và tư liệu sản xuất. Đây là điểm khởi đầu của chu trình tư bản.",
      },
      {
        id: "H_mid", label: "H", sub: "SLĐ + TLSX",
        bg: "#1A1A1A", text: "#F5F0E1",
        desc: "Tiền mua hàng hóa đặc biệt: sức lao động (v) và tư liệu sản xuất (c). Trong quá trình sản xuất, công nhân tạo ra giá trị thặng dư.",
      },
      {
        id: "T_prime", label: "T'", sub: "T + m",
        bg: "#C41E3A", text: "#F5F0E1",
        desc: "T' = T + ΔT. ΔT là giá trị thặng dư (m) do lao động sống tạo ra, vượt quá giá trị sức lao động. Mục đích: giá trị, không phải tiêu dùng.",
      },
    ],
    purpose: "Mục đích: Giá trị (T' > T)",
    purposeColor: "#C41E3A",
  },
} as const;

export function SurplusValue() {
  const [activeForm, setActiveForm] = useState(0);
  const [workingDay, setWorkingDay] = useState(8);
  const [necessaryHours, setNecessaryHours] = useState(4);
  const [activeCircuit, setActiveCircuit] = useState<"simple" | "capital">("capital");
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const surplusHours = Math.max(0, workingDay - necessaryHours);
  const surplusRate = necessaryHours > 0 ? Math.round((surplusHours / necessaryHours) * 100) : 0;

  return (
    <div className="space-y-16">
      {/* Công thức chung của tư bản — Interactive Circuit Diagram */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-4 border-l-8 border-[#FFD700] pl-6">Công thức chung của Tư bản</h3>
        <p className="font-sans text-sm text-[#1A1A1A]/60 mb-8 pl-6">Bấm nút để đổi mạch lưu thông. Bấm từng nút để xem ý nghĩa.</p>

        {/* Circuit Switcher */}
        <div className="flex gap-4 mb-8">
          {(["simple", "capital"] as const).map((key) => (
            <button
              key={key}
              onClick={() => { setActiveCircuit(key); setSelectedNode(null); }}
              className={`px-5 py-3 font-black uppercase text-sm border-4 transition-all ${
                activeCircuit === key
                  ? "bg-[#1A1A1A] text-[#FFD700] border-[#FFD700] shadow-[4px_4px_0_#C41E3A] -translate-y-1"
                  : "bg-[#F5F0E1] text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#FFD700]"
              }`}
            >
              {CIRCUITS[key].label}
              <span className="block text-[10px] font-bold tracking-widest mt-0.5 opacity-70">{CIRCUITS[key].sublabel}</span>
            </button>
          ))}
        </div>

        {/* Animated Flow Diagram */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCircuit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {/* Nodes + Arrows */}
            <div className="flex items-stretch gap-0">
              {CIRCUITS[activeCircuit].nodes.map((node, idx) => (
                <React.Fragment key={node.id}>
                  <motion.button
                    type="button"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.12 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                    className="flex flex-col items-center justify-center p-6 md:p-8 min-w-[100px] border-4 border-[#1A1A1A] shadow-[6px_6px_0_#C41E3A] cursor-pointer focus:outline-none transition-shadow hover:shadow-[8px_8px_0_#FFD700] flex-1"
                    style={{ backgroundColor: node.bg, color: node.text }}
                  >
                    <span className="text-4xl md:text-6xl font-black leading-none">{node.label}</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest mt-2 opacity-70 text-center">{node.sub}</span>
                    {selectedNode === node.id && (
                      <span className="text-[10px] mt-2 font-black uppercase border px-2 py-0.5" style={{ borderColor: node.text, opacity: 0.5 }}>Đang chọn</span>
                    )}
                  </motion.button>

                  {idx < 2 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: idx * 0.12 + 0.2, duration: 0.4 }}
                      className="flex items-center justify-center px-1 md:px-2 origin-left"
                    >
                      <ArrowRightCircle size={28} className="text-[#C41E3A] shrink-0" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Purpose Tag */}
            <div
              className="mt-4 inline-block px-5 py-2 font-black uppercase text-sm border-4 border-[#1A1A1A] text-[#F5F0E1]"
              style={{ backgroundColor: CIRCUITS[activeCircuit].purposeColor }}
            >
              {CIRCUITS[activeCircuit].purpose}
            </div>

            {/* Node Detail Panel */}
            <AnimatePresence>
              {selectedNode && (() => {
                const node = CIRCUITS[activeCircuit].nodes.find(n => n.id === selectedNode);
                if (!node) return null;
                return (
                  <motion.div
                    key={selectedNode}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-6 overflow-hidden"
                  >
                    <div
                      className="p-6 border-4 border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A]"
                      style={{ backgroundColor: node.bg, color: node.text }}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-3xl font-black border-2 px-3 py-1" style={{ borderColor: node.text }}>{node.label}</span>
                        <span className="font-black uppercase text-sm opacity-70">{node.sub}</span>
                      </div>
                      <p className="font-sans text-base leading-relaxed">{node.desc}</p>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        <div className="socialist-block bg-[#1A1A1A] text-[#F5F0E1] p-6 mt-8 border-l-8 border-l-[#FFD700]">
          <p className="font-serif text-lg italic leading-relaxed">{CHAPTER_3_SURPLUS.capitalFormula.explanation}</p>
        </div>
      </div>

      {/* Tư bản bất biến & khả biến */}
      <div className="grid md:grid-cols-2 gap-8">
        {CHAPTER_3_SURPLUS.capitalParts.map((part, idx) => (
          <div key={idx} className={`socialist-block p-8 border-8 ${idx === 0 ? 'bg-[#F5F0E1] border-[#1A1A1A]' : 'bg-[#FFD700] border-[#C41E3A] shadow-[8px_8px_0_#1A1A1A]'}`}>
            <h4 className="font-black uppercase text-2xl mb-4 text-[#1A1A1A]">{part.name}</h4>
            <p className="font-sans text-lg text-[#1A1A1A] leading-relaxed">{part.desc}</p>
          </div>
        ))}
      </div>

      <div className="socialist-block bg-[#E8E0D0] p-8 border-8 border-[#1A1A1A] text-[#1A1A1A]">
        <h3 className="text-2xl font-black uppercase text-[#1A1A1A] mb-3">
          Mô phỏng Ngày lao động
        </h3>
        <p className="font-sans text-base leading-relaxed mb-8 max-w-3xl">
          Kéo hai thanh để thấy rõ quan hệ giữa thời gian lao động cần thiết và thời gian
          lao động thặng dư. Khi ngày lao động kéo dài hoặc thời gian cần thiết giảm xuống,
          tỷ suất giá trị thặng dư sẽ tăng.
        </p>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          <div className="space-y-6">
            <label className="block">
              <span className="block mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#1A1A1A]">
                Tổng ngày lao động: {workingDay} giờ
              </span>
              <input
                type="range"
                min={4}
                max={14}
                value={workingDay}
                onChange={(e) => {
                  const nextWorkingDay = Number(e.target.value);
                  setWorkingDay(nextWorkingDay);
                  setNecessaryHours((prev) => Math.min(prev, nextWorkingDay - 1));
                }}
                className="w-full accent-[#C41E3A]"
              />
            </label>

            <label className="block">
              <span className="block mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#1A1A1A]">
                Lao động cần thiết: {necessaryHours} giờ
              </span>
              <input
                type="range"
                min={1}
                max={Math.max(1, workingDay - 1)}
                value={necessaryHours}
                onChange={(e) => setNecessaryHours(Number(e.target.value))}
                className="w-full accent-[#1A1A1A]"
              />
            </label>

            <div className="border-4 border-[#1A1A1A] overflow-hidden">
              <div className="flex h-16 text-sm font-black uppercase">
                <div
                  className="flex items-center justify-center bg-[#FFD700] text-[#1A1A1A]"
                  style={{ width: `${(necessaryHours / workingDay) * 100}%` }}
                >
                  Cần thiết
                </div>
                <div
                  className="flex items-center justify-center bg-[#C41E3A] text-[#F5F0E1]"
                  style={{ width: `${(surplusHours / workingDay) * 100}%` }}
                >
                  Thặng dư
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="bg-[#1A1A1A] text-[#FFD700] border-4 border-[#FFD700] p-4">
              <p className="text-[11px] uppercase font-black tracking-[0.18em]">Giờ thặng dư</p>
              <p className="text-3xl font-black">{surplusHours}</p>
            </div>
            <div className="bg-[#C41E3A] text-[#F5F0E1] border-4 border-[#1A1A1A] p-4">
              <p className="text-[11px] uppercase font-black tracking-[0.18em]">Tỷ suất m'</p>
              <p className="text-3xl font-black">{surplusRate}%</p>
            </div>
            <p className="font-sans text-sm leading-relaxed text-[#1A1A1A]">
              {surplusHours > necessaryHours
                ? "Phần lao động thặng dư đã vượt phần cần thiết, phản ánh mức bóc lột cao hơn."
                : "Phần lao động thặng dư còn thấp hơn hoặc ngang phần cần thiết."}
            </p>
          </div>
        </div>
      </div>

      {/* PP sản xuất GTTD */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-8 border-l-8 border-[#C41E3A] pl-6">Phương pháp sản xuất Giá trị Thặng dư</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {CHAPTER_3_SURPLUS.surplusMethods.map((method, idx) => (
            <div key={idx} className="socialist-block-inverse p-8">
              <div className="flex items-center gap-3 mb-4">
                <ArrowRight size={24} className="text-[#FFD700]" />
                <h4 className="font-black uppercase text-xl text-[#FFD700]">{method.name}</h4>
              </div>
              <p className="font-sans text-lg text-[#F5F0E1] leading-relaxed">{method.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tích lũy tư bản */}
      <div className="socialist-block bg-[#F5F0E1] p-8 border-8 border-[#C41E3A]">
        <div className="flex items-center gap-4 mb-6">
          <TrendingUp size={36} className="text-[#C41E3A]" />
          <h3 className="font-black uppercase text-2xl text-[#1A1A1A]">Tích lũy Tư bản</h3>
        </div>
        <p className="font-sans text-lg mb-6 font-semibold">{CHAPTER_3_SURPLUS.accumulation.definition}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-black uppercase text-sm text-[#C41E3A] mb-3">Nhân tố ảnh hưởng</h4>
            {CHAPTER_3_SURPLUS.accumulation.factors.map((f, i) => (
              <div key={i} className="flex gap-2 items-center mb-2">
                <div className="w-2 h-2 bg-[#C41E3A]" />
                <p className="font-sans text-sm font-semibold">{f}</p>
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-black uppercase text-sm text-[#C41E3A] mb-3">Hệ quả</h4>
            {CHAPTER_3_SURPLUS.accumulation.consequences.map((c, i) => (
              <div key={i} className="flex gap-2 items-center mb-2">
                <div className="w-2 h-2 bg-[#1A1A1A]" />
                <p className="font-sans text-sm font-semibold">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Các hình thức biểu hiện GTTD */}
      <div>
        <h3 className="text-2xl font-black uppercase mb-8">Hình thức biểu hiện của GTTD</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {CHAPTER_3_SURPLUS.surplusForms.map((form, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveForm(idx)}
              className={`socialist-block p-6 cursor-pointer transition-all duration-200 ${
                activeForm === idx
                  ? "bg-[#C41E3A] text-[#F5F0E1] shadow-[8px_8px_0_#1A1A1A] -translate-y-2"
                  : "bg-[#F5F0E1]"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Wallet
                  size={20}
                  className={activeForm === idx ? "text-[#FFD700]" : "text-[#C41E3A]"}
                />
                <h4
                  className={`font-black uppercase text-lg ${
                    activeForm === idx ? "text-[#FFD700]" : "text-[#1A1A1A]"
                  }`}
                >
                  {form.name}
                </h4>
              </div>
              <p className="font-sans text-sm leading-relaxed">{form.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

