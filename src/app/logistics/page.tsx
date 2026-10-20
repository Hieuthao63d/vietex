"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function LogisticsPage() {
  const { t } = useLanguage();
  const mainImg = "/images/logistics/main.jpg";

  const documents = [
    t("logistics.doc1"),
    t("logistics.doc2"),
    t("logistics.doc3"),
    t("logistics.doc4"),
    t("logistics.doc5"),
    t("logistics.doc6")
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
           <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-6">{t("logistics.badge")}</h4>
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter mb-8">
             {t("logistics.titleLine1")}<br/>{t("logistics.titleLine2")}
           </h1>
        </div>
        <div className="flex items-end pb-4">
           <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-tight">
             {t("logistics.subtitle")}
           </p>
        </div>
      </div>

      {/* Image spanning right edge */}
      <div className="w-full pl-6 md:pl-12 lg:pl-[10%] mb-24">
        <div className="relative w-full h-[40vh] md:h-[60vh] bg-gray-100 rounded-l-[2rem] overflow-hidden">
          <Image 
            src={mainImg} 
            alt="Logistics" 
            fill 
            className="object-cover" 
            unoptimized={process.env.NODE_ENV === 'development'}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
           <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-gray-900 mb-6">
             {t("logistics.incotermsTitleLine1")}<br/>{t("logistics.incotermsTitleLine2")}
           </h3>
           <p className="text-xl text-gray-600 leading-relaxed mb-12">
             {t("logistics.incotermsDesc")}
           </p>
        </div>
        <div className="lg:col-span-7">
           <div className="border-t border-gray-900">
             {documents.map((doc, i) => (
               <div key={i} className="py-6 border-b border-gray-200 flex items-center gap-5 group hover:pl-4 transition-all duration-300">
                 <div className="w-3 h-3 bg-primary-golden rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"></div>
                 <span className="text-gray-900 font-medium text-xl md:text-2xl tracking-tight">{doc}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
