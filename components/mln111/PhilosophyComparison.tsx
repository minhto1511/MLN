"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FUNDAMENTAL_QUESTION, METHODOLOGIES } from "@/data/mln111_content";
import { cn } from "@/lib/utils";
import { Brain, Globe, Scale } from "lucide-react";

export function PhilosophyComparison() {
  return (
    <div className="space-y-16">
      <FundamentalQuestionSection />
      <MethodologiesSection />
    </div>
  );
}

function FundamentalQuestionSection() {
  const [activeAspect, setActiveAspect] = useState<string | null>("ontology");

  return (
    <div className="bg-white border-4 border-[#1A1A1A] p-6 lg:p-12 relative overflow-hidden">
      {/* Decorative Label */}
      <div className="absolute top-0 right-0 bg-[#1A1A1A] text-[#FFD700] px-6 py-2 font-bold uppercase z-10">
        Vấn đề cơ bản
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Left: Interactive Tree */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-2xl font-black uppercase text-[#C41E3A] border-b-4 border-[#C41E3A] pb-2 mb-6">
            Tư duy & Tồn tại
          </h3>
          <div className="space-y-2">
            {FUNDAMENTAL_QUESTION.aspects.map((aspect) => (
              <button
                key={aspect.id}
                onClick={() => setActiveAspect(aspect.id)}
                className={cn(
                  "w-full text-left p-4 border-2 transition-all font-bold uppercase flex items-center gap-3",
                  activeAspect === aspect.id
                    ? "bg-[#C41E3A] text-[#FFD700] border-[#1A1A1A] translate-x-2"
                    : "bg-[#F5F0E1] text-[#1A1A1A] border-[#CCC] hover:bg-[#E5E0D1]"
                )}
              >
                {aspect.id === "ontology" ? <Globe size={20} /> : <Brain size={20} />}
                {aspect.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Content Display */}
        <div className="md:col-span-8 bg-[#F5F0E1] p-6 border-2 border-[#1A1A1A] min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {activeAspect && (
              <motion.div
                key={activeAspect}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-lg font-serif italic text-[#555] border-l-4 border-[#C41E3A] pl-4">
                  &quot;{FUNDAMENTAL_QUESTION.aspects.find(a => a.id === activeAspect)?.question}&quot;
                </div>

                <div className="grid gap-4">
                  {FUNDAMENTAL_QUESTION.aspects
                    .find(a => a.id === activeAspect)
                    ?.schools.map((school, idx) => (
                      <div key={idx} className="group relative">
                        <div className="absolute inset-0 bg-[#C41E3A] translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-white border-2 border-[#1A1A1A] p-4 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform cursor-default">
                          <h4 className="font-black text-lg text-[#1A1A1A] uppercase mb-1 flex justify-between">
                            {school.name}
                            {school.representative && (
                                <span className="text-[10px] font-sans font-normal bg-[#EEE] px-2 py-1 rounded text-[#555]">
                                    {school.representative}
                                </span>
                            )}
                          </h4>
                          <p className="text-[#333] font-sans text-sm">{school.view}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function MethodologiesSection() {
    return (
        <div className="bg-[#1A1A1A] text-[#F5F0E1] border-4 border-[#C41E3A] p-6 lg:p-12">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 text-[#FFD700] border-b-2 border-[#FFD700] pb-1 mb-2">
                    <Scale size={24} />
                    <span className="font-bold uppercase tracking-widest">Phương pháp tư duy</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black uppercase text-white">Biện chứng <span className="text-[#888] mx-2">vs</span> Siêu hình</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b-4 border-[#555]">
                            <th className="p-4 text-left w-1/4 text-[#888] font-mono text-sm uppercase">Tiêu chí</th>
                            <th className="p-4 text-left w-1/3 text-[#C41E3A] font-black uppercase text-xl bg-[#222]">Siêu hình</th>
                            <th className="p-4 text-left w-1/3 text-[#FFD700] font-black uppercase text-xl bg-[#333] relative">
                                Biện chứng
                                <span className="absolute top-0 right-0 bg-[#C41E3A] text-white text-[10px] px-2 py-1">Marxist Choice</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {METHODOLOGIES.comparison.map((row, idx) => (
                            <tr key={idx} className="border-b border-[#333] hover:bg-[#222] transition-colors">
                                <td className="p-4 font-bold text-[#AAA]">{row.criteria}</td>
                                <td className="p-4 font-serif italic text-gray-400">{row.metaphysics}</td>
                                <td className="p-4 font-bold text-white border-l-2 border-[#C41E3A]">{row.dialectics}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
