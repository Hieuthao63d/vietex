"use client";

import React from "react";

const countryMap: Record<string, { code: string; label: string }> = {
  en: { code: "gb", label: "United Kingdom" },
  vi: { code: "vn", label: "Vietnam" },
  ko: { code: "kr", label: "South Korea" },
  th: { code: "th", label: "Thailand" },
  ms: { code: "my", label: "Malaysia" },
  id: { code: "id", label: "Indonesia" },
};

export default function FlagIcon({ 
  code, 
  className = "w-5 h-3.5" 
}: { 
  code: string; 
  className?: string;
}) {
  const info = countryMap[code.toLowerCase()] || { code: "gb", label: "Global" };
  const flagUrl = `https://flagcdn.com/w40/${info.code}.png`;

  return (
    <span className={`inline-flex items-center justify-center shrink-0 overflow-hidden rounded-[3px] border border-black/10 shadow-sm bg-gray-100 ${className}`}>
      <img
        src={flagUrl}
        alt={info.label}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </span>
  );
}
