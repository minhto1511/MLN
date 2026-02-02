
"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Settings, AlertTriangle } from "lucide-react";

export function ConflictSlider() {
  const [pressure, setPressure] = useState(30); // 0 to 100
  const isCracking = pressure > 85;

  // Custom Vertical Slider Logic
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    updatePressureFromEvent(e);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 1) { // Left Button Pressed
      updatePressureFromEvent(e);
    }
  };

  const updatePressureFromEvent = (e: React.PointerEvent) => {
      if (!sliderRef.current) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const clientY = e.clientY;
      
      // Calculate position relative to bottom (0% at bottom, 100% at top)
      // Bottom Y = rect.top + rect.height
      // Top Y = rect.top
      // Distance from bottom = (rect.top + rect.height) - clientY
      
      const height = rect.height;
      const distanceFromBottom = rect.bottom - clientY;
      
      const percentage = (distanceFromBottom / height) * 100;
      const clamped = Math.min(100, Math.max(0, percentage));
      
      setPressure(clamped);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-[#F5F0E1] border-4 border-[#1A1A1A] shadow-[8px_8px_0_#C41E3A] relative overflow-hidden">
      <div className="absolute top-0 left-0 bg-[#C41E3A] text-[#FFD700] px-4 py-1 font-bold uppercase text-sm border-r-4 border-b-4 border-[#1A1A1A] z-20">
        Mâu thuẫn biện chứng
      </div>

      <div className="mt-12 mb-8 text-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase text-[#1A1A1A]">
            QHSX <span className="text-[#C41E3A]">vs</span> LLSX
        </h2>
        <p className="text-[#4A3C31] font-mono text-sm md:text-base max-w-2xl mx-auto">
            Điều chỉnh áp lực phát triển của Lực lượng sản xuất (LLSX) để xem tác động lên Quan hệ sản xuất (QHSX).
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 h-[500px] relative">
        {/* Left: Lực lượng sản xuất (Dynamic, Growing) */}
        <div className="flex-1 bg-[#1A1A1A] border-4 border-[#C41E3A] relative overflow-hidden flex flex-col justify-end p-4">
            <div className="absolute top-0 right-0 p-2 text-[#F5F0E1] font-mono text-xs uppercase">Lực lượng sản xuất</div>
            
            {/* Visualizing Growth */}
            <motion.div 
               className="bg-[#C41E3A]/20 absolute bottom-0 left-0 right-0 border-t-4 border-[#C41E3A]"
               animate={{ height: `${pressure}%` }}
               transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/diag-stripes-light.png')]" />
                {Array.from({ length: Math.floor(pressure / 10) }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-[#C41E3A] opacity-50"
                        style={{ 
                            left: `${(i * 30) % 100}%`, 
                            bottom: `${(i * 20) % 100}%` 
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10 - i, repeat: Infinity, ease: "linear" }}
                    >
                        <Settings size={24 + i * 4} />
                    </motion.div>
                ))}
            </motion.div>
            
            <div className="relative z-10">
                 <h3 className="text-3xl font-bold text-[#C41E3A] uppercase">Phát triển</h3>
                 <p className="text-xs text-[#F5F0E1] font-mono">Công cụ, Con người, Kỹ năng...</p>
                 <div className="mt-2 text-2xl font-black text-[#FFD700]">{Math.round(pressure)}%</div>
            </div>
        </div>

        {/* Interaction Zone (Middle) - DRAGGABLE */}
        <div className="md:w-24 flex flex-col items-center relative z-30 group h-full justify-center">
            {/* Helper Text */}
            <div className="absolute -right-32 md:right-full md:mr-4 top-1/2 -translate-y-1/2 text-[#1A1A1A] font-bold text-xs uppercase tracking-widest opacity-50 md:rotate-[-90deg] whitespace-nowrap pointer-events-none select-none">
                Kéo để tăng áp lực
            </div>

            {/* Custom Slider Area - Larger Hitbox */}
            <div 
                ref={sliderRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                className="h-full w-16 flex justify-center cursor-pointer touch-none relative py-4"
                style={{ touchAction: 'none' }} // Prevent scrolling while dragging
            >
                {/* Track */}
                <div className="h-full w-4 bg-[#1A1A1A] rounded-full relative overflow-hidden pointer-events-none">
                     <div 
                        className="absolute bottom-0 left-0 right-0 bg-[#C41E3A] w-full transition-[height] duration-75 ease-out"
                        style={{ height: `${pressure}%` }}
                     />
                </div>

                {/* Visual Thumb - Follows Pressure State */}
                <div
                    className="absolute w-12 h-12 -ml-0 pointer-events-none flex items-center justify-center z-50 transition-[bottom] duration-75 ease-out"
                    style={{ 
                        bottom: `calc(${pressure}% - 24px)`, // Center thumb on current %
                    }}
                > 
                    <div className="w-12 h-12 bg-[#FFD700] border-4 border-[#C41E3A] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
                        <div className="w-4 h-4 bg-[#C41E3A] rounded-full" />
                    </div>
                </div>
            </div>

        </div>

        {/* Right: Quan hệ sản xuất (Rigid, Cracking) */}
        <div className="flex-1 relative perspective-1000">
            <motion.div 
                className={cn(
                    "h-full border-4 p-8 flex flex-col items-center justify-center text-center transition-colors duration-300",
                    isCracking ? "bg-[#C41E3A]/20 border-[#C41E3A]" : "bg-[#F5F0E1] border-[#1A1A1A]"
                )}
                animate={isCracking ? { 
                    skewX: [0, -5, 5, -2, 2, 0],
                    scale: [1, 1.02, 0.98, 1],
                    rotate: [0, -1, 1, 0]
                } : { skewX: 0, scale: 1, rotate: 0 }}
                transition={isCracking ? { repeat: Infinity, duration: 0.5 } : {}}
            >
                 <div className="absolute top-0 left-0 p-2 text-[#4A3C31] font-mono text-xs uppercase">Quan hệ sản xuất</div>

                 {isCracking ? (
                     <div className="space-y-4">
                         <AlertTriangle size={64} className="text-[#C41E3A] mx-auto animate-pulse" />
                         <h3 className="text-3xl font-bold text-[#C41E3A] uppercase">PHÁ VỠ!</h3>
                         <p className="text-[#4A3C31] font-mono">QHSX cũ trở thành xiềng xích kìm hãm LLSX.</p>
                     </div>
                 ) : (
                     <div className="space-y-4 opacity-50">
                         <div className="w-24 h-24 border-4 border-[#1A1A1A] mx-auto" />
                         <h3 className="text-2xl font-bold text-[#1A1A1A] uppercase">Ổn định</h3>
                         <p className="text-xs text-[#4A3C31] font-mono">Phù hợp với LLSX.</p>
                     </div>
                 )}

                 {/* Cracks Visuals */}
                 {isCracking && (
                     <>
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-[#1A1A1A] rotate-12" />
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-[#1A1A1A] -rotate-12" />
                     </>
                 )}
            </motion.div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-[#1A1A1A] text-[#FFD700] font-mono text-xs md:text-sm border-l-4 border-[#C41E3A]">
         <span className="font-bold">CƠ CHẾ:</span> Khi Lực lượng sản xuất phát triển đến trình độ nhất định, Quan hệ sản xuất cũ sẽ trở nên chật hẹp, kìm hãm sự phát triển đó → Dẫn đến mâu thuẫn gay gắt (Cách mạng xã hội) → QHSX mới ra đời tối ưu hơn.
      </div>
    </div>
  );
}
