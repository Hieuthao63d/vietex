"use client";

import { Mail, MapPin, Phone, User, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#142A1D] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side - Contact Info */}
        <div>
          <h4 className="text-primary-golden uppercase tracking-widest text-sm font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-primary-golden inline-block"></span>
            {t("contact.title")}
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {t("contact.heading")}
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-md">
            {t("contact.subtitle")}
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-6 border-b border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <User className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">{t("contact.managingDirector")}</p>
                <p className="font-bold text-lg">Nguyen The Nam</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">{t("contact.email")}</p>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-base md:text-lg">thaliaho2709@gmail.com</p>
                  <p className="font-bold text-base md:text-lg">xuanlinhbaiu@gmail.com</p>
                  <p className="font-bold text-base md:text-lg">info@vietexagritrading.com</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">{t("contact.phone")}</p>
                <p className="font-bold text-lg">+84 332 671 167</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">{t("nav.address")}</p>
                <p className="font-bold text-lg leading-snug">
                  N7 street, Ward, Thoi Hoa,<br/>
                  Ho Chi Minh 75900, Vietnam
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Globe className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">{t("contact.website")}</p>
                <p className="font-bold text-lg">vietex-global.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl self-start">
          <h3 className="text-2xl font-black mb-2">{t("common.inquireNow")}</h3>
          <p className="text-gray-300 text-sm mb-8">{t("contact.subtitle")}</p>

          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2 uppercase">{t("nav.products")}</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white">
                <option className="text-gray-900">{t("contact.opt1")}</option>
                <option className="text-gray-900">{t("contact.opt2")}</option>
                <option className="text-gray-900">{t("contact.opt3")}</option>
                <option className="text-gray-900">{t("contact.opt4")}</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2 uppercase">{t("contact.name")}</label>
                <input type="text" placeholder={t("contact.namePlaceholder")} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2 uppercase">{t("contact.company")}</label>
                <input type="text" placeholder={t("contact.companyPlaceholder")} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2 uppercase">{t("contact.email")}</label>
                <input type="email" placeholder={t("contact.emailPlaceholder")} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2 uppercase">{t("contact.phone")}</label>
                <input type="text" placeholder={t("contact.phonePlaceholder")} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2 uppercase">{t("contact.message")}</label>
              <textarea placeholder={t("contact.messagePlaceholder")} rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400 resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-primary-golden hover:bg-yellow-500 text-gray-900 font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              {t("contact.send")} <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
