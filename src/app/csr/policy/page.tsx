"use client";

import { HeartHandshake, Leaf, ShieldCheck, Download } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function CsrPolicyPage() {
  const { t } = useLanguage();
  const mainImg = "/images/csr/main.jpg";

  return (
    <div className="w-full">
      {/* Full width hero image with text overlay */}
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-[#142A1D] flex flex-col justify-end p-6 md:p-16 overflow-hidden">
        <Image 
          src={mainImg} 
          alt="Corporate Social Responsibility" 
          fill 
          className="object-cover opacity-50 mix-blend-overlay" 
          unoptimized={process.env.NODE_ENV === 'development'}
        />
        <div className="relative z-10 max-w-5xl text-white">
           <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-4">{t("csrPolicy.badge")}</h4>
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-8">
             {t("csrPolicy.titleLine1")}<br/>{t("csrPolicy.titleLine2")}
           </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <p className="text-2xl md:text-3xl text-gray-900 max-w-5xl leading-tight mb-32 font-medium tracking-tight">
          {t("csrPolicy.intro")}
        </p>

        {/* Rows instead of cards */}
        <div className="space-y-24 md:space-y-32 border-t border-gray-900 pt-24">
           {/* Row 1 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div>
                 <Leaf className="text-primary-golden mb-8" size={60} strokeWidth={1.5} />
                 <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tighter leading-tight">{t("csrPolicy.p1TitleLine1")}<br/>{t("csrPolicy.p1TitleLine2")}</h3>
              </div>
              <div>
                 <p className="text-xl text-gray-600 leading-relaxed font-medium mt-2">
                   {t("csrPolicy.p1Desc")}
                 </p>
              </div>
           </div>
           
           {/* Row 2 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div>
                 <HeartHandshake className="text-primary-golden mb-8" size={60} strokeWidth={1.5} />
                 <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tighter leading-tight">{t("csrPolicy.p2TitleLine1")}<br/>{t("csrPolicy.p2TitleLine2")}</h3>
              </div>
              <div>
                 <p className="text-xl text-gray-600 leading-relaxed font-medium mt-2">
                   {t("csrPolicy.p2Desc")}
                 </p>
              </div>
           </div>
           
           {/* Row 3 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div>
                 <ShieldCheck className="text-primary-golden mb-8" size={60} strokeWidth={1.5} />
                 <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tighter leading-tight">{t("csrPolicy.p3TitleLine1")}<br/>{t("csrPolicy.p3TitleLine2")}</h3>
              </div>
              <div>
                 <p className="text-xl text-gray-600 leading-relaxed font-medium mt-2">
                   {t("csrPolicy.p3Desc")}
                 </p>
              </div>
           </div>
        </div>
      </div>

      <div className="w-full bg-[#142A1D] py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="text-4xl font-black mb-6 text-white tracking-tight">{t("csrPolicy.downloadTitle")}</h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              {t("csrPolicy.downloadDesc")}
            </p>
          </div>
          <button className="bg-primary-golden text-white font-bold py-5 px-8 text-lg rounded-full hover:bg-yellow-600 transition-colors shrink-0 flex items-center gap-3 hover:-translate-y-1 transform duration-300">
            <Download size={24} /> {t("csrPolicy.downloadBtn")}
          </button>
        </div>
      </div>
    </div>
  );
}
