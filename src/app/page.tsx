"use client";

import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Globe, Truck, Users } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import HomeAnimations from "@/components/animations/HomeAnimations";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <HomeAnimations>
      <div className="flex flex-col gap-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 md:px-6 pt-4">
        <HeroSlider />
        
        <div className="max-w-7xl mx-auto mt-8 flex flex-wrap gap-6 px-4 justify-center md:justify-start">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-700 tracking-wide">
            <CheckCircle2 size={20} className="text-green-600" /> {t("hero.badge1")}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-700 tracking-wide">
            <CheckCircle2 size={20} className="text-green-600" /> {t("hero.badge2")}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-700 tracking-wide">
            <CheckCircle2 size={20} className="text-green-600" /> {t("hero.badge3")}
          </div>
        </div>
      </section>

      {/* About Summary - Less Boxy */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-primary-golden font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary-golden"></span> {t("home.whoWeAre")}
            </h4>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
              {t("home.whoWeAreTitlePart1")}<span className="text-green-800">{t("home.whoWeAreTitleHighlight")}</span>{t("home.whoWeAreTitlePart2")}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t("home.whoWeAreDesc")}
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-primary-golden transition-colors border-b-2 border-gray-900 hover:border-primary-golden pb-1">
              {t("common.discoverStory")} <ArrowRight size={20} />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-2xl">
               <Image 
                 src="/images/who-we-are.png" 
                 alt="Who we are - Vietex" 
                 fill 
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 z-10">
                 <p className="text-white font-medium text-lg">{t("home.whoWeAreCaption")}</p>
               </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#F1FEC8] rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Services/Process Summary - Clean Layout without boxes */}
      <section className="bg-gray-50 py-24">
        <div className="px-6 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h4 className="text-primary-golden font-bold tracking-widest uppercase mb-4 text-sm">{t("home.expertiseBadge")}</h4>
            <h2 className="text-4xl font-black text-gray-900">{t("home.expertiseTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                <Globe className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t("home.service1Title")}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("home.service1Desc")}
              </p>
              <Link href="/sourcing" className="text-primary-golden font-bold hover:text-yellow-600 inline-flex items-center gap-1">
                {t("common.readMore")} <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="text-center group mt-0 md:mt-12">
              <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                <Truck className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t("home.service2Title")}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("home.service2Desc")}
              </p>
              <Link href="/logistics" className="text-primary-golden font-bold hover:text-yellow-600 inline-flex items-center gap-1">
                {t("common.readMore")} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="text-center group mt-0 md:mt-24">
              <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                <Users className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t("home.service3Title")}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("home.service3Desc")}
              </p>
              <Link href="/how-we-work" className="text-primary-golden font-bold hover:text-yellow-600 inline-flex items-center gap-1">
                {t("common.readMore")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Summary */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b pb-6">
          <div>
            <h4 className="text-primary-golden font-bold tracking-widest uppercase mb-4 text-sm">{t("home.catalogueBadge")}</h4>
            <h2 className="text-4xl font-black text-gray-900">{t("home.premiumExports")}</h2>
          </div>
          <Link href="/products" className="hidden md:inline-flex items-center gap-2 font-bold text-gray-900 hover:text-primary-golden transition-colors border-b-2 border-transparent hover:border-primary-golden pb-1">
            {t("common.viewAllProducts")} <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: t("home.prod1Name"), origin: t("home.prod1Origin"), image: "/images/products/pd1.png" },
            { name: t("home.prod2Name"), origin: t("home.prod2Origin"), image: "/images/products/pd2.png" },
            { name: t("home.prod3Name"), origin: t("home.prod3Origin"), image: "/images/products/pd3.png" }
          ].map((item, i) => (
            <Link href="/products" key={i} className="group block">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative mb-6">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 group-hover:text-primary-golden transition-colors">{item.name}</h3>
                  <p className="text-gray-500 flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> {t("common.origin")}: {item.origin}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary-golden group-hover:text-white group-hover:border-primary-golden transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link href="/products" className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-primary-golden transition-colors border-b-2 border-gray-900 pb-1">
            {t("common.viewAllProducts")} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
      </div>

      {/* Contact Section at the bottom of Home page (full width) */}
      <ContactSection />
    </HomeAnimations>
  );
}
