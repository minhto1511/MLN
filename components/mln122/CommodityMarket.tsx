"use client";

import React, { useState } from "react";
import { CHAPTER_2_COMMODITY } from "@/data/mln122_content";
import { Coins, ShoppingCart, Building2, Landmark } from "lucide-react";

const PARTICIPANT_ICONS = [Building2, ShoppingCart, Coins, Landmark];

export function CommodityMarket() {
  const [activeAttr, setActiveAttr] = useState(0);
  const [laborHours, setLaborHours] = useState(6);
  const [supplyLevel, setSupplyLevel] = useState(50);
  const [demandLevel, setDemandLevel] = useState(50);

  const valueIndex = laborHours * 10;
  const marketPressure = demandLevel - supplyLevel;
  const marketPrice = Math.max(20, valueIndex + marketPressure);

  return (
    <div className="space-y-16">
      {/* 2 Thuộc tính hàng hóa */}
      <div className="grid lg:grid-cols-2 gap-8">
        {CHAPTER_2_COMMODITY.commodityAttributes.map((attr, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveAttr(idx)}
            className={`cursor-pointer socialist-block p-8 transition-all duration-200 ${
              activeAttr === idx
                ? 'bg-[#C41E3A] text-[#F5F0E1] border-[#1A1A1A] shadow-[12px_12px_0_#FFD700] -translate-y-2'
                : 'bg-[#E8E0D0] text-[#1A1A1A]'
            }`}
          >
            <h3 className={`text-2xl font-black uppercase mb-4 ${activeAttr === idx ? 'text-[#FFD700]' : 'text-[#C41E3A]'}`}>
              {attr.name}
            </h3>
            <p className={`text-lg font-sans leading-relaxed font-semibold ${activeAttr === idx ? 'text-[#F5F0E1]' : 'text-[#1A1A1A]'}`}>{attr.desc}</p>
          </div>
        ))}
      </div>

      {/* Lượng giá trị */}
      <div className="socialist-block bg-[#1A1A1A] text-[#F5F0E1] p-8 border-8 border-[#FFD700]">
        <h3 className="font-black uppercase text-[#FFD700] text-xl mb-4">Lượng giá trị hàng hóa</h3>
        <p className="text-xl font-serif italic leading-relaxed">{CHAPTER_2_COMMODITY.valueQuantity}</p>
      </div>

      <div className="socialist-block bg-[#E8E0D0] p-8 border-8 border-[#1A1A1A] text-[#1A1A1A]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <h3 className="text-2xl font-black uppercase text-[#1A1A1A] mb-2">
              Mô phỏng Giá trị - Giá cả
            </h3>
            <p className="font-sans text-base leading-relaxed max-w-2xl">
              Thử kéo các thanh để xem giá trị do lao động quyết định và giá cả thị trường
              biến động quanh giá trị dưới tác động của cung - cầu.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="bg-[#1A1A1A] text-[#FFD700] px-4 py-3 border-4 border-[#FFD700]">
              <p className="text-[11px] uppercase font-black tracking-[0.16em]">Giá trị</p>
              <p className="text-2xl font-black">{valueIndex}</p>
            </div>
            <div className="bg-[#C41E3A] text-[#F5F0E1] px-4 py-3 border-4 border-[#1A1A1A]">
              <p className="text-[11px] uppercase font-black tracking-[0.16em]">Giá cả</p>
              <p className="text-2xl font-black">{marketPrice}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mb-8">
          <label className="block">
            <span className="block mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#1A1A1A]">
              Thời gian lao động xã hội cần thiết: {laborHours} giờ
            </span>
            <input
              type="range"
              min={1}
              max={12}
              value={laborHours}
              onChange={(e) => setLaborHours(Number(e.target.value))}
              className="w-full accent-[#C41E3A]"
            />
          </label>
          <label className="block">
            <span className="block mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#1A1A1A]">
              Mức cung: {supplyLevel}
            </span>
            <input
              type="range"
              min={0}
              max={100}
              value={supplyLevel}
              onChange={(e) => setSupplyLevel(Number(e.target.value))}
              className="w-full accent-[#1A1A1A]"
            />
          </label>
          <label className="block">
            <span className="block mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#1A1A1A]">
              Mức cầu: {demandLevel}
            </span>
            <input
              type="range"
              min={0}
              max={100}
              value={demandLevel}
              onChange={(e) => setDemandLevel(Number(e.target.value))}
              className="w-full accent-[#FFD700]"
            />
          </label>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.18em] text-[#1A1A1A]">
            <span>Giá trị do lao động quyết định</span>
            <span>Giá cả chịu tác động cung - cầu</span>
          </div>
          <div className="relative h-8 border-4 border-[#1A1A1A] bg-[#F5F0E1] overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#1A1A1A]"
              style={{ width: `${Math.min(valueIndex, 100)}%` }}
            />
            <div
              className="absolute top-0 h-full bg-[#C41E3A]/80"
              style={{ width: `${Math.min(marketPrice, 100)}%` }}
            />
          </div>
          <p className="font-sans text-sm leading-relaxed text-[#1A1A1A]">
            {marketPressure > 10 &&
              "Cầu đang lớn hơn cung rõ rệt, nên giá cả thị trường có xu hướng vượt lên trên giá trị."}
            {marketPressure < -10 &&
              "Cung đang vượt cầu, nên giá cả thị trường có xu hướng giảm xuống dưới giá trị."}
            {Math.abs(marketPressure) <= 10 &&
              "Cung và cầu đang khá cân bằng, nên giá cả thị trường dao động gần giá trị."}
          </p>
        </div>
      </div>

      {/* Tiền tệ */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#FFD700] mb-4 border-l-8 border-[#FFD700] pl-6">Tiền tệ</h3>
        <p className="font-sans text-lg mb-6 font-semibold text-[#F5F0E1]">{CHAPTER_2_COMMODITY.money.definition}</p>
        <div className="flex flex-wrap gap-3">
          {CHAPTER_2_COMMODITY.money.functions.map((fn, idx) => (
            <div key={idx} className="bg-[#FFD700] text-[#1A1A1A] border-4 border-[#1A1A1A] px-5 py-3 font-black uppercase text-sm shadow-[4px_4px_0_#C41E3A]">
              {idx + 1}. {fn}
            </div>
          ))}
        </div>
      </div>

      {/* Các chủ thể thị trường */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#F5F0E1] mb-8">Vai trò các chủ thể</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHAPTER_2_COMMODITY.marketParticipants.map((p, idx) => {
            const Icon = PARTICIPANT_ICONS[idx];
            return (
              <div key={idx} className="socialist-block text-center p-6 hover:-translate-y-2 transition-transform bg-[#E8E0D0] text-[#1A1A1A]">
                <div className="bg-[#FFD700] border-2 border-[#1A1A1A] p-3 inline-block mb-4 text-[#1A1A1A]">
                  <Icon size={32} />
                </div>
                <h4 className="font-black uppercase text-[#C41E3A] mb-2">{p.role}</h4>
                <p className="font-sans text-sm text-[#1A1A1A]">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quy luật kinh tế */}
      <div>
        <h3 className="text-2xl font-black uppercase text-[#F5F0E1] mb-6">
          Quy luật kinh tế cơ bản
        </h3>
        <div className="space-y-4">
          {CHAPTER_2_COMMODITY.economicLaws.map((law, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start pb-4 border-b-4 border-[#F5F0E1]/20"
            >
              <div className="bg-[#C41E3A] text-[#FFD700] font-black text-xl px-3 py-1 border-2 border-[#FFD700] shrink-0">
                {idx + 1}
              </div>
              <p className="font-sans text-lg font-semibold text-[#F5F0E1]">{law}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

