"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0D1C12] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Logo & Info */}
          <div>
            <Link href="/" className="inline-block mb-6 relative h-20 w-56 -ml-2">
              <Image src="/logo2.jpg" alt="Vietex Logo" fill className="object-contain object-left" />
            </Link>
            <p className="text-primary-golden font-serif italic text-xl mb-6">
              {t("footer.motto")}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mb-6">
              {t("footer.tagline")}
            </p>
            <div className="pt-2">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-6">{t("footer.quickLinks")}</h4>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">{t("nav.about")}</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">{t("nav.products")}</Link></li>
                <li><Link href="/sourcing" className="hover:text-white transition-colors">{t("nav.sourcing")}</Link></li>
                <li><Link href="/logistics" className="hover:text-white transition-colors">{t("nav.logistics")}</Link></li>
              </ul>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><Link href="/how-we-work" className="hover:text-white transition-colors">{t("nav.howWeWork")}</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">{t("nav.faq")}</Link></li>
                <li><Link href="/csr/policy" className="hover:text-white transition-colors">{t("nav.csrPolicy")}</Link></li>
                <li><Link href="/csr/community" className="hover:text-white transition-colors">{t("nav.communityEngagement")}</Link></li>
                <li><Link href="/business-partner" className="hover:text-white transition-colors">{t("nav.businessPartner")}</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Get in touch */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-6">{t("footer.getInTouch")}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="mailto:thaliaho2709@gmail.com" className="hover:text-white transition-colors">thaliaho2709@gmail.com</a></li>
              <li><a href="mailto:xuanlinhbaiu@gmail.com" className="hover:text-white transition-colors">xuanlinhbaiu@gmail.com</a></li>
              <li><a href="mailto:info@vietexagritrading.com" className="hover:text-white transition-colors">info@vietexagritrading.com</a></li>
              <li>+84 332 671 167</li>
              <li className="leading-relaxed max-w-[250px]">
                N7 street, Ward, Thoi Hoa,<br />
                Ho Chi Minh 75900, Vietnam
              </li>
              <li><Link href="https://vietex-global.com" className="hover:text-white transition-colors">vietex-global.com</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {t("footer.rights")}</p>
          <p className="flex gap-2 items-center">
            Malaysia (MY) <span className="text-primary-golden">•</span> South Korea (KR) <span className="text-primary-golden">•</span> Indonesia (ID) <span className="text-primary-golden">•</span> Thailand (TH)
          </p>
        </div>
      </div>
    </footer>
  );
}
