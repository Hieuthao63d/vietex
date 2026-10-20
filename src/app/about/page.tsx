"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const facilityImg = "/images/about/facility.jpg";
  const directorImg = "/images/about/director.png";

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 pb-32">
      
      {/* 1. Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          {t("about.title")}
        </h1>
        <p className="text-primary-golden font-bold uppercase tracking-[0.2em] text-sm">
          {t("about.companyName")}
        </p>
      </div>

      {/* 2. Main Facility/Company Image Placeholder */}
      <div className="relative w-full h-[300px] md:h-[450px] bg-gray-100 rounded-2xl overflow-hidden mb-16 shadow-md border border-gray-100">
        <Image 
          src={facilityImg} 
          alt="Vietex Facility" 
          fill 
          className="object-cover" 
          unoptimized={process.env.NODE_ENV === 'development'}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 z-[-1]">
           <span className="mb-2">📷</span>
           <span className="text-sm font-medium">facility (png, jpg, webp)</span>
        </div>
      </div>

      {/* 3. Introduction & Table */}
      <div className="mb-20">
        <div className="text-gray-700 text-lg leading-relaxed space-y-6 mb-12 max-w-4xl">
          <p>{t("about.intro1")}</p>
          <p>{t("about.intro2")}</p>
        </div>

        {/* Company Info Table */}
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-100 py-6 px-4 hover:bg-gray-50 transition-colors">
             <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 md:mb-0">{t("about.labelCompanyName")}</div>
             <div className="md:col-span-3 font-medium text-gray-900">{t("about.valCompanyName")}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-100 py-6 px-4 hover:bg-gray-50 transition-colors">
             <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 md:mb-0">{t("about.labelHeadquarters")}</div>
             <div className="md:col-span-3 font-medium text-gray-900">{t("about.valHeadquarters")}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-100 py-6 px-4 hover:bg-gray-50 transition-colors">
             <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 md:mb-0">{t("about.labelBusinessModel")}</div>
             <div className="md:col-span-3 font-medium text-gray-900">{t("about.valBusinessModel")}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-100 py-6 px-4 hover:bg-gray-50 transition-colors">
             <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 md:mb-0">{t("about.labelCoreProducts")}</div>
             <div className="md:col-span-3 font-medium text-gray-900">{t("about.valCoreProducts")}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-100 py-6 px-4 hover:bg-gray-50 transition-colors">
             <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 md:mb-0">{t("about.labelExportMarkets")}</div>
             <div className="md:col-span-3 font-bold text-primary-golden">{t("about.valExportMarkets")}</div>
          </div>
        </div>
      </div>

      {/* 4. Message from Director */}
      <div className="mb-24">
        <h2 className="text-2xl md:text-3xl font-black mb-12 text-center text-gray-900">{t("about.directorHeading")}</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center bg-[#FDF9F1] p-8 md:p-12 rounded-3xl border border-[#E8DCC2] shadow-sm">
          {/* Director Image Placeholder */}
          <div className="w-full md:w-1/3 relative h-[350px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 shrink-0">
             <Image 
                src={directorImg} 
                alt="General Director" 
                fill 
                className="object-cover"
                unoptimized={process.env.NODE_ENV === 'development'}
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 z-[-1] p-4 text-center">
               <span className="mb-2 text-2xl">👤</span>
               <span className="text-sm font-medium">director (png, jpg, webp)</span>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t("about.directorTitle")}</h3>
            <p className="text-gray-700 leading-relaxed italic text-lg">
              {t("about.directorQuote")}
            </p>
            <div className="pt-6 border-t border-gray-200/60">
               <p className="font-bold text-gray-900 text-lg">{t("about.directorRole")}</p>
               <p className="text-primary-golden font-medium">{t("about.companyName")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Location / Map */}
      <div>
        <div className="flex items-center gap-3 mb-8">
           <MapPin className="text-primary-golden" size={28} />
           <h2 className="text-2xl md:text-3xl font-black text-gray-900">{t("about.locationHeading")}</h2>
        </div>
        
        <div className="w-full h-[450px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-md border border-gray-200">
           <iframe 
              src="https://maps.google.com/maps?q=Vietex+Agri+Trading+Co.,+Ltd,+N7+street,+Ward,+Th%E1%BB%9Bi+H%C3%B2a,+H%E1%BB%93+Ch%C3%AD+Minh+75900&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
      </div>

    </div>
  );
}
