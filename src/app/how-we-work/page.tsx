"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HowWeWorkPage() {
  const { t } = useLanguage();
  const mainImg = "/images/how-we-work/main.jpg";

  const services = [
    {
      id: "01",
      title: t("howWeWork.s1Title"),
      description: t("howWeWork.s1Desc")
    },
    {
      id: "02",
      title: t("howWeWork.s2Title"),
      description: t("howWeWork.s2Desc")
    },
    {
      id: "03",
      title: t("howWeWork.s3Title"),
      description: t("howWeWork.s3Desc")
    },
    {
      id: "04",
      title: t("howWeWork.s4Title"),
      description: t("howWeWork.s4Desc")
    },
    {
      id: "05",
      title: t("howWeWork.s5Title"),
      description: t("howWeWork.s5Desc")
    },
    {
      id: "06",
      title: t("howWeWork.s6Title"),
      description: t("howWeWork.s6Desc")
    }
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-[#142A1D] text-white pt-24 pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-6">
            {t("howWeWork.badge")}
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              {t("howWeWork.titleLine1")}<br/>{t("howWeWork.titleLine2")}
            </h1>
            <div className="flex items-end pb-4">
              <p className="text-2xl text-gray-400 font-medium leading-tight max-w-lg">
                {t("howWeWork.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 -mt-24 mb-24 relative z-10">
        <div className="relative w-full max-w-[100rem] mx-auto h-[40vh] md:h-[60vh] bg-gray-200 overflow-hidden rounded-[2rem] shadow-xl">
          <Image 
            src={mainImg} 
            alt="How we work" 
            fill 
            className="object-cover" 
            unoptimized={process.env.NODE_ENV === 'development'}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-20">
          {services.map((service) => (
            <div key={service.id} className="relative group mt-12 md:mt-16">
              <div className="absolute -top-16 md:-top-20 -left-6 text-[8rem] md:text-[10rem] font-black text-gray-100 z-[-1] leading-none select-none group-hover:text-primary-golden/10 transition-colors duration-500">
                {service.id}
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 text-xl leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
