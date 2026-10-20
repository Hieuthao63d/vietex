"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, LANGUAGES, Locale } from "@/context/LanguageContext";
import { ChevronDown, Sparkles } from "lucide-react";
import FlagIcon from "@/components/FlagIcon";

interface LanguageSwitcherProps {
  variant?: "topbar" | "compact" | "footer";
}

export default function LanguageSwitcher({ variant = "topbar" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Liquid Glass Pill Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`group relative flex items-center gap-2.5 rounded-full font-bold transition-all duration-300 cursor-pointer select-none overflow-hidden ${
          variant === "topbar"
            ? "px-3.5 py-1.5 text-xs text-white bg-gradient-to-b from-white/25 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.7),0_8px_20px_rgba(0,0,0,0.25)] hover:from-white/35 hover:via-white/20 hover:to-white/10 hover:border-white/50 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_10px_25px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95"
            : variant === "footer"
            ? "px-4 py-2 text-xs text-gray-200 bg-gradient-to-b from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_6px_20px_rgba(0,0,0,0.3)] hover:bg-white/20 hover:scale-105 active:scale-95"
            : "px-3 py-1.5 text-xs text-gray-800 bg-gradient-to-b from-white/90 via-white/70 to-white/50 backdrop-blur-xl border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_14px_rgba(0,0,0,0.08)] hover:scale-105 active:scale-95"
        }`}
        aria-expanded={isOpen}
      >
        {/* Specular Glare Highlight (Liquid Reflection Line) */}
        <span className="absolute inset-x-2 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none rounded-full" />
        
        {/* Flag Icon */}
        <FlagIcon code={currentLang.code} className="w-5 h-3.5 shadow-sm transform group-hover:scale-110 transition-transform duration-300" />
        
        {/* Language Code Text */}
        <span className="tracking-widest uppercase font-black text-[11px] drop-shadow-sm">
          {currentLang.code}
        </span>

        {/* Chevron Icon with fluid rotation */}
        <ChevronDown 
          size={13} 
          className={`opacity-80 group-hover:opacity-100 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {/* Liquid Glass Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2.5 w-56 rounded-2xl bg-white/85 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.9)] p-2 z-[999] animate-in fade-in zoom-in-95 duration-200">
          {/* Top liquid shine inside dropdown */}
          <span className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none rounded-full" />

          {/* Header */}
          <div className="px-3 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-200/60 flex items-center justify-between mb-1">
            <span>Select Language</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
          </div>

          {/* Language Options */}
          <div className="space-y-1">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLocale(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white/95 shadow-sm border border-white/80 text-primary-golden font-black scale-[1.02]"
                      : "text-gray-700 hover:bg-white/60 hover:backdrop-blur-md hover:translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FlagIcon code={lang.code} className="w-5 h-3.5 shadow-sm" />
                    <div>
                      <span className="block font-bold text-gray-900 leading-tight">{lang.nativeName}</span>
                      <span className="block text-[10px] text-gray-400 uppercase font-medium">{lang.name}</span>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-primary-golden shadow-[0_0_8px_rgba(234,179,8,0.8)]"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
