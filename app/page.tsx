
"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MatterDefinitionViewer } from "@/components/mln111/MatterDefinitionViewer";
import { RelationshipSplitScreen } from "@/components/mln111/RelationshipSplitScreen";
import { UniversalConnectionGraph } from "@/components/mln111/UniversalConnectionGraph";
import { CategoriesHexagonGrid } from "@/components/mln111/CategoriesHexagonGrid";
import { TheThreeLawsTabs } from "@/components/mln111/TheThreeLawsTabs";
import { CognitionProcessSteps } from "@/components/mln111/CognitionProcessSteps";
import { BaseSuperstructureStack } from "@/components/mln111/BaseSuperstructureStack";
import { SocioEconomicTimeline } from "@/components/mln111/SocioEconomicTimeline";
import { ConflictSlider } from "@/components/mln111/ConflictSlider";
import { PhilosophyComparison } from "@/components/mln111/PhilosophyComparison";
import { SocialStructureTabs } from "@/components/mln111/SocialStructureTabs";
import { HumanVietnamAccordion } from "@/components/mln111/HumanVietnamAccordion";
import { SocialistCard } from "@/components/SocialistCard";
import { Star, Hammer, BookOpen, Users, Brain, Flag } from "lucide-react";

export default function MuseumPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#F5F0E1] text-[#1A1A1A] min-h-screen">
      {/* Revolutionary Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 bg-[#C41E3A] origin-left z-50 border-b-2 border-black"
        style={{ scaleX }}
      />

      {/* Hero Section: Collective Unity */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#1A1A1A] text-[#F5F0E1] border-b-8 border-[#C41E3A]">
        {/* Background Texture */}
        <div className="absolute inset-0 revolutionary-bg-dark opacity-50" />
        
        <div className="z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Manifesto Text */}
            <div className="space-y-6 text-left">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block px-4 py-2 bg-[#C41E3A] text-[#FFD700] font-bold uppercase tracking-widest border-2 border-[#FFD700] rotate-2"
                >
                    <Star className="inline-block mr-2 pb-1" size={20} fill="currentColor" />
                    Vô sản toàn thế giới
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black uppercase leading-none"
                >
                    Triết học <br/>
                    <span className="text-[#C41E3A] text-stroke-white">Mác-Lênin</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl font-sans max-w-lg border-l-4 border-[#FFD700] pl-6 italic"
                >
                &quot;Cải tạo thế giới - Phục vụ con người - Giải phóng lao động&quot;
                </motion.p>
            </div>

            {/* Right: Hero Image (The Generated Asset) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className="relative border-8 border-[#F5F0E1] shadow-[16px_16px_0_#C41E3A] bg-[#C41E3A]"
            >
                {/* Fallback image if local file issue, but we copied it */}
                <div className="relative aspect-[4/3] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <Image 
                        src="/hero-socialist.png" 
                        alt="Unity of Workers, Farmers, and Intellectuals" 
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute bottom-0 left-0 bg-[#FFD700] text-[#C41E3A] px-4 py-1 font-bold uppercase text-xs">
                    Hình tượng khối đoàn kết Công - Nông - Trí
                </div>
            </motion.div>
        </div>
      </section>

      {/* Main Content: Functional Layout */}
      <div className="container mx-auto px-4 py-24 space-y-32">
        
        {/* Space 0: Intro */}
        <SectionLayout 
            id="01" 
            title="Khái luận Triết học" 
            subtitle="Vấn đề cơ bản & Phương pháp luận"
            icon={<Brain size={32} />}
        >
            <PhilosophyComparison />
        </SectionLayout>

        {/* Space 1: Materialism */}
        <SectionLayout 
            id="02" 
            title="Chủ nghĩa Duy vật" 
            subtitle="Nền tảng của thế giới quan khoa học"
            icon={<Hammer size={32} />}
        >
            <div className="grid gap-12">
                <MatterDefinitionViewer />
                <RelationshipSplitScreen />
            </div>
        </SectionLayout>

        {/* Space 2: Dialectics */}
        <SectionLayout 
            id="03" 
            title="Phép Biện chứng" 
            subtitle="Khoa học về mối liên hệ phổ biến và sự phát triển"
            icon={<Users size={32} />}
            variant="inverse" // Dark section
        >
             <div className="space-y-12">
                <UniversalConnectionGraph />
                
                {/* Collective Grid - Not individual cards */}
                <div className="bg-[#1A1A1A] p-8 border-4 border-[#C41E3A]">
                    <h3 className="text-[#FFD700] mb-8 text-center text-3xl">Hệ thống Phạm trù</h3>
                    <CategoriesHexagonGrid />
                </div>
                
                <SocialistCard variant="gold" title="Quy luật vận động" className="border-black">
                     <TheThreeLawsTabs />
                </SocialistCard>
                
                <div className="mt-12">
                    <ConflictSlider />
                </div>
             </div>
        </SectionLayout>

        {/* Space 3: Epistemology */}
        <SectionLayout 
            id="04" 
            title="Lý luận nhận thức" 
            subtitle="Từ trực quan sinh động đến tư duy trừu tượng"
            icon={<BookOpen size={32} />}
        >
            <CognitionProcessSteps />
        </SectionLayout>

        {/* Space 4: Hist-Mat */}
        <SectionLayout 
            id="05" 
            title="CNDV Lịch sử" 
            subtitle="Quy luật vận động của xã hội loài người"
            icon={<Star size={32} />}
        >
            <div className="space-y-16">
                <SocialStructureTabs />
                <BaseSuperstructureStack />
                <SocioEconomicTimeline />
            </div>
        </SectionLayout>

        {/* Space 6: Human & Vietnam */}
        <SectionLayout 
            id="06" 
            title="Con người & Thực tiễn" 
            subtitle="Vận dụng vào sự nghiệp Đổi mới"
            icon={<Flag size={32} />}
            variant="inverse"
        >
            <HumanVietnamAccordion />
        </SectionLayout>

      </div>

      {/* Footer: Propaganda Style */}
      <footer className="bg-[#C41E3A] text-[#FFD700] py-16 border-t-8 border-[#1A1A1A]">
          <div className="container mx-auto px-4 text-center space-y-6">
              <div className="flex justify-center gap-4 text-[#1A1A1A]">
                  <Star size={48} fill="currentColor" />
                  <Star size={48} fill="currentColor" />
                  <Star size={48} fill="currentColor" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase">
                  Học tập - Lao động - Sáng tạo
              </h2>
              <p className="font-sans text-[#F5F0E1] text-lg max-w-2xl mx-auto">
                  Công trình thanh niên chào mừng kỷ niệm. <br/>
                  © 2026 Digital Archive of Dialectical Materialism.
              </p>
          </div>
      </footer>
    </div>
  );
}

function SectionLayout({ 
    id, title, subtitle, icon, children, variant = 'default' 
}: { 
    id: string, title: string, subtitle: string, icon: React.ReactNode, children: React.ReactNode, variant?: 'default' | 'inverse' 
}) {
    const isInverse = variant === 'inverse';
    
    return (
        <section className={cn(
            "relative p-8 md:p-12 border-4",
            isInverse ? "bg-[#2A2A2A] border-[#FFD700] text-[#F5F0E1]" : "bg-white border-[#1A1A1A]"
        )}>
            {/* Header Plate */}
            <div className={cn(
                "absolute -top-8 left-8 md:left-12 flex items-center gap-4 px-6 py-4 border-4 shadow-[8px_8px_0_rgba(0,0,0,0.2)]",
                isInverse ? "bg-[#C41E3A] border-[#FFD700] text-[#FFD700]" : "bg-[#1A1A1A] border-[#C41E3A] text-[#F5F0E1]"
            )}>
                <span className="text-4xl font-black opacity-50">{id}</span>
                <div className="h-8 w-px bg-current opacity-50" />
                <div className="flex items-center gap-3">
                    {icon}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold uppercase leading-none">{title}</h2>
                        <p className="text-xs font-sans opacity-80 uppercase tracking-widest">{subtitle}</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-12">
                {children}
            </div>
        </section>
    );
}
