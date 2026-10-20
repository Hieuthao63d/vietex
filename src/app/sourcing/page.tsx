"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function SourcingPage() {
  const { t } = useLanguage();
  const mainImg = "/images/sourcing/main.jpg";

  const checkpoints = [
    {
      id: "1",
      title: t("sourcing.cp1Title"),
      description: t("sourcing.cp1Desc")
    },
    {
      id: "2",
      title: t("sourcing.cp2Title"),
      description: t("sourcing.cp2Desc")
    },
    {
      id: "3",
      title: t("sourcing.cp3Title"),
      description: t("sourcing.cp3Desc")
    },
    {
      id: "4",
      title: t("sourcing.cp4Title"),
      description: t("sourcing.cp4Desc")
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-6">
          {t("sourcing.badge")}
        </h4>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter mb-12">
          {t("sourcing.titleLine1")}<br/>{t("sourcing.titleLine2")}<br/>{t("sourcing.titleLine3")}
        </h1>
      </div>

      {/* Main Image - Full Width or very wide, no borders */}
      <div className="w-full px-4 md:px-8 mb-32">
        <div className="relative w-full max-w-[120rem] mx-auto h-[40vh] md:h-[60vh] bg-gray-100 overflow-hidden rounded-[2rem]">
          <Image 
            src={mainImg} 
            alt="Sourcing & Quality Control" 
            fill 
            className="object-cover" 
            unoptimized={process.env.NODE_ENV === 'development'}
          />
        </div>
      </div>

      {/* Philosophy Section - Full width dark block */}
      <div className="w-full bg-[#142A1D] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-xs font-bold mb-6 text-primary-golden uppercase tracking-[0.3em]">
              {t("sourcing.phil1Title")}
            </h3>
            <p className="text-2xl md:text-4xl font-medium leading-[1.3] tracking-tight text-white/90">
              {t("sourcing.phil1Desc")}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold mb-6 text-primary-golden uppercase tracking-[0.3em]">
              {t("sourcing.phil2Title")}
            </h3>
            <p className="text-2xl md:text-4xl font-medium leading-[1.3] tracking-tight text-white/90">
              {t("sourcing.phil2Desc")}
            </p>
          </div>
        </div>
      </div>

      {/* Checkpoints - Minimalist lines */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h3 className="text-xs font-bold mb-12 text-gray-400 uppercase tracking-[0.2em]">{t("sourcing.checkpointsHeading")}</h3>
        <div className="space-y-0 border-t border-gray-900">
          {checkpoints.map((point) => (
            <div key={point.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-b border-gray-900 group cursor-default">
              <div className="md:col-span-2 flex items-center">
                <span className="text-gray-200 font-black text-5xl md:text-6xl group-hover:text-primary-golden transition-colors duration-500">0{point.id}</span>
              </div>
              <div className="md:col-span-4 flex items-center">
                <h4 className="font-bold text-2xl md:text-3xl text-gray-900 tracking-tight">
                  {point.title}
                </h4>
              </div>
              <div className="md:col-span-6 flex items-center">
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
