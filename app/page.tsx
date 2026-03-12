"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { PoliticalEconIntro } from "@/components/mln122/PoliticalEconIntro";
import { CommodityMarket } from "@/components/mln122/CommodityMarket";
import { SurplusValue } from "@/components/mln122/SurplusValue";
import { CompetitionMonopoly } from "@/components/mln122/CompetitionMonopoly";
import { SocialistMarketEcon } from "@/components/mln122/SocialistMarketEcon";
import { IndustrializationIntegration } from "@/components/mln122/IndustrializationIntegration";

const CHAPTERS = [
  { id: "chapter-1", num: "01", title: "Đối tượng, PP nghiên cứu & Chức năng" },
  { id: "chapter-2", num: "02", title: "Hàng hóa, Thị trường & Các chủ thể" },
  { id: "chapter-3", num: "03", title: "Giá trị Thặng dư trong KTTT" },
  { id: "chapter-4", num: "04", title: "Cạnh tranh & Độc quyền" },
  { id: "chapter-5", num: "05", title: "KTTT định hướng XHCN ở Việt Nam" },
  { id: "chapter-6", num: "06", title: "CNH-HĐH & Hội nhập KTQT" },
];

function SectionLayout({
  id,
  number,
  title,
  inverse = false,
  children,
}: {
  id: string;
  number: string;
  title: string;
  inverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 overflow-hidden ${
        inverse ? "revolutionary-bg-dark text-[#F5F0E1]" : "revolutionary-bg bg-[#F5F0E1] text-[#1A1A1A]"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-16">
        <div
          className={`inline-block px-6 py-3 border-4 transform -rotate-2 ${
            inverse
              ? "bg-[#FFD700] text-[#1A1A1A] border-[#1A1A1A] shadow-[6px_6px_0_#C41E3A]"
              : "bg-[#C41E3A] text-[#F5F0E1] border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A]"
          }`}
        >
          <span className="font-black uppercase text-sm tracking-[0.3em]">
            Chương {number}
          </span>
        </div>
        <h2
          className={`text-3xl md:text-4xl font-black uppercase mt-4 border-b-4 pb-4 ${
            inverse ? "border-[#FFD700]" : "border-[#C41E3A]"
          }`}
        >
          {title}
        </h2>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">{children}</div>
    </section>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F5F0E1] min-h-screen text-[#1A1A1A] overflow-x-hidden">
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-2 bg-[#C41E3A] z-[100] transition-none"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1A1A1A] revolutionary-bg-dark">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C41E3A] transform skew-x-[-12deg] origin-top-right opacity-90 hidden md:block" />

        <div className="z-10 text-center px-4 max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-[#FFD700] text-[#1A1A1A] border-4 border-[#1A1A1A] font-black uppercase tracking-[0.4em] text-sm shadow-[6px_6px_0_#C41E3A]">
            <Star size={16} className="fill-current" />
            HỌC PHẦN MLN 122
            <Star size={16} className="fill-current" />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase text-[#F5F0E1] mb-6 leading-none tracking-tight">
            Kinh tế <br />
            <span className="text-[#C41E3A]">Chính trị</span>{" "}
            <span className="text-[#FFD700]">Mác-Lênin</span>
          </h1>

          <p className="text-xl md:text-2xl font-sans text-[#F5F0E1]/80 max-w-2xl mx-auto font-semibold leading-relaxed">
            Tài liệu số hóa giáo trình Kinh tế Chính trị Mác-Lênin dành cho bậc đại học.
          </p>

          <div className="mt-16 flex flex-col items-center gap-2 text-[#F5F0E1]/50">
            <span className="font-black uppercase text-xs tracking-[0.4em]">CUỘN ĐỂ KHÁM PHÁ</span>
            <div className="w-0.5 h-16 bg-gradient-to-b from-[#FFD700] to-transparent" />
          </div>
        </div>

        <div className="absolute bottom-8 left-8 hidden md:block transform rotate-[-6deg]">
          <div className="bg-[#C41E3A] text-[#FFD700] border-4 border-[#FFD700] px-6 py-4 font-black uppercase tracking-[0.2em] text-lg shadow-[8px_8px_0_#1A1A1A]">
            ★ VÔ SẢN TOÀN THẾ GIỚI, ĐOÀN KẾT LẠI! ★
          </div>
        </div>
      </section>

      {/* 6 Chapters */}
      <SectionLayout id="chapter-1" number="01" title={CHAPTERS[0].title}>
        <PoliticalEconIntro />
      </SectionLayout>

      <SectionLayout id="chapter-2" number="02" title={CHAPTERS[1].title} inverse>
        <CommodityMarket />
      </SectionLayout>

      <SectionLayout id="chapter-3" number="03" title={CHAPTERS[2].title}>
        <SurplusValue />
      </SectionLayout>

      <SectionLayout id="chapter-4" number="04" title={CHAPTERS[3].title} inverse>
        <CompetitionMonopoly />
      </SectionLayout>

      <SectionLayout id="chapter-5" number="05" title={CHAPTERS[4].title}>
        <SocialistMarketEcon />
      </SectionLayout>

      <SectionLayout id="chapter-6" number="06" title={CHAPTERS[5].title} inverse>
        <IndustrializationIntegration />
      </SectionLayout>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-24 relative overflow-hidden revolutionary-bg-dark border-t-8 border-[#C41E3A]">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex gap-6 mb-12 text-[#C41E3A]">
            <Star size={32} className="fill-current" />
            <Star size={32} className="fill-current text-[#FFD700]" />
            <Star size={32} className="fill-current" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#F5F0E1] mb-8 tracking-wide">
            Kinh tế Chính trị Mác-Lênin
          </h2>
          <div className="text-[#FFD700]/50 font-black text-sm uppercase tracking-[0.3em]">
            © 2026 TẤT CẢ CÁC QUYỀN ĐƯỢC BẢO LƯU.
          </div>
        </div>
      </footer>
    </div>
  );
}

