
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SocialistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "inverse" | "red" | "gold";
  title?: string;
}

export function SocialistCard({ 
  children, 
  className, 
  variant = "default",
  title,
  ...props 
}: SocialistCardProps) {
  
  const variants = {
    default: "bg-[#F5F0E1] text-[#1A1A1A] border-[#1A1A1A] shadow-[6px_6px_0_#C41E3A]",
    inverse: "bg-[#1A1A1A] text-[#F5F0E1] border-[#C41E3A] shadow-[6px_6px_0_#4A3C31]",
    red: "bg-[#C41E3A] text-[#FFD700] border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A]",
    gold: "bg-[#FFD700] text-[#C41E3A] border-[#C41E3A] shadow-[6px_6px_0_#1A1A1A]",
  };

  return (
    <div 
      className={cn(
        "border-4 p-6 relative transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        variants[variant],
        className
      )} 
      {...props}
    >
      {title && (
        <div className={cn(
          "absolute -top-5 left-4 px-3 py-1 font-bold uppercase text-sm border-4 tracking-wider",
          variant === 'inverse' ? "bg-[#C41E3A] text-[#FFD700] border-[#1A1A1A]" : 
          variant === 'red' ? "bg-[#FFD700] text-[#C41E3A] border-[#1A1A1A]" :
          "bg-[#1A1A1A] text-[#F5F0E1] border-[#C41E3A]"
        )}>
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
