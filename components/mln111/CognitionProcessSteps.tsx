
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COGNITION_PROCESS } from "@/data/mln111_content";
import { cn } from "@/lib/utils";
import { ChevronRight, Brain, Eye, Hammer } from "lucide-react";
import { SocialistCard } from "@/components/SocialistCard";

export function CognitionProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [Eye, Brain, Hammer];

  return (
    <div className="flex flex-col items-center justify-center">

      {/* Progress Line */}
      <div className="relative w-full max-w-4xl mb-16">
        <div className="absolute top-1/2 left-0 w-full h-2 bg-[#1A1A1A] -translate-y-1/2" />
        <div 
            className="absolute top-1/2 left-0 h-2 bg-[#C41E3A] -translate-y-1/2 transition-all duration-500" 
            style={{ width: `${(activeStep / (COGNITION_PROCESS.length - 1)) * 100}%` }}
        />
        
        <div className="flex justify-between relative z-10">
          {COGNITION_PROCESS.map((stage, idx) => {
            const Icon = icons[idx];
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "flex flex-col items-center gap-4 group focus:outline-none",
                  activeStep === idx ? "opacity-100" : "opacity-60 hover:opacity-100"
                )}
              >
                <div className={cn(
                    "w-16 h-16 flex items-center justify-center border-4 transition-all duration-300 shadow-[4px_4px_0_rgba(0,0,0,1)]",
                    activeStep >= idx ? "bg-[#C41E3A] border-[#1A1A1A] text-[#FFD700]" : "bg-[#F5F0E1] border-[#1A1A1A] text-[#1A1A1A]"
                )}>
                    <Icon size={24} />
                </div>
                <div className="text-center">
                    <div className={cn("font-bold uppercase tracking-widest bg-[#1A1A1A] text-[#F5F0E1] px-2 py-1 text-xs", activeStep === idx ? "bg-[#C41E3A] text-[#FFD700]" : "")}>
                        {stage.stage}
                    </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Content Card */}
      <div className="w-full max-w-5xl min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
             <SocialistCard variant="default" className="w-full relative overflow-hidden bg-[#F5F0E1] border-4 border-[#1A1A1A] shadow-[8px_8px_0_#C41E3A]">
                 <div className="absolute top-0 right-0 p-8 opacity-5 text-[#C41E3A]">
                     {React.createElement(icons[activeStep], { size: 200 })}
                 </div>

                 <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C41E3A] mb-2 border-b-2 border-[#C41E3A] inline-block pb-1">{COGNITION_PROCESS[activeStep].subtitle}</h3>
                 <h2 className="text-4xl md:text-5xl font-black uppercase text-[#1A1A1A] mb-8">{COGNITION_PROCESS[activeStep].stage}</h2>
                 
                 {COGNITION_PROCESS[activeStep].desc && (
                    <p className="text-xl text-[#4A3C31] leading-relaxed mb-8 font-serif">{COGNITION_PROCESS[activeStep].desc}</p>
                 )}

                 {COGNITION_PROCESS[activeStep].steps && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {(COGNITION_PROCESS[activeStep].steps as { id: string; name: string, desc: string }[]).map((step, sIdx) => (
                            <div key={sIdx} className="bg-[#1A1A1A] p-6 border-b-4 border-[#FFD700] text-[#F5F0E1]">
                                 <h4 className="font-bold text-[#FFD700] mb-2 uppercase">{step.name}</h4>
                                 <p className="text-sm opacity-90">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                 )}
             </SocialistCard>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mt-12 flex gap-4">
          <button 
             disabled={activeStep === 0}
             onClick={() => setActiveStep(p => p - 1)}
             className="px-8 py-3 bg-[#1A1A1A] text-[#F5F0E1] font-bold uppercase border-2 border-transparent hover:border-[#C41E3A] disabled:opacity-30 disabled:hover:border-transparent transition-all"
          >
              Quay lại
          </button>
          <button 
             disabled={activeStep === COGNITION_PROCESS.length - 1}
             onClick={() => setActiveStep(p => p + 1)}
             className="px-8 py-3 bg-[#C41E3A] text-[#FFD700] font-bold uppercase hover:bg-[#A01830] disabled:opacity-30 transition-all shadow-[4px_4px_0_#1A1A1A] hover:translate-y-[2px] hover:shadow-none flex items-center gap-2"
          >
              Tiếp theo <ChevronRight size={16} />
          </button>
      </div>
    </div>
  );
}
