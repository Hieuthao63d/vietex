"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

import { categories } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, t, getLocalizedCategoryName } = useLanguage();
  const isLongLocale = ["vi", "th", "id", "ms"].includes(locale);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "/about" },
    { 
      name: t("nav.products"), 
      href: "/products",
      subLinks: categories.map(cat => ({
        name: getLocalizedCategoryName(cat) || cat.name,
        href: `/products/category/${cat.id}`
      }))
    },
    { name: t("nav.sourcing"), href: "/sourcing" },
    { name: t("nav.logistics"), href: "/logistics" },
    { name: t("nav.howWeWork"), href: "/how-we-work" },
    { name: t("nav.faq"), href: "/faq" },
    { 
      name: t("nav.csr"), 
      href: "#",
      subLinks: [
        { name: t("nav.csrPolicy"), href: "/csr/policy" },
        { name: t("nav.communityEngagement"), href: "/csr/community" }
      ]
    },
    { name: t("nav.businessPartner"), href: "/business-partner" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 drop-shadow-sm">
      
      {/* 
        GREEN TOP BAR 
        Uses an inverted curve to perfectly hug the logo block without overlapping it.
      */}
      <div 
        className={`absolute top-0 right-0 w-full z-30 hidden md:flex transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 pointer-events-none' : 'h-[44px] opacity-100'
        }`}
      >
        {/* Transparent spacer matching Logo block width minus 44px curve */}
        <div className="w-[176px] xl:w-[206px] 2xl:w-[260px] shrink-0 h-full bg-transparent pointer-events-none"></div>
        
        {/* Inverted curve filler (44x44 square with a circle cut out from bottom-left) */}
        <div 
           className="w-[44px] shrink-0 h-[44px] pointer-events-none" 
           style={{ background: 'radial-gradient(circle at bottom left, transparent 44px, #142A1D 44.5px)' }}
        ></div>
        
        {/* Actual Green Bar */}
        <div className="flex-1 bg-[#142A1D] flex justify-end items-center px-4 xl:px-8 h-full pointer-events-auto">
          <div className="flex items-center gap-4 xl:gap-6 text-white text-xs xl:text-sm whitespace-nowrap">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-primary-golden shrink-0" />
              <span className="truncate max-w-[360px] xl:max-w-none">{t("nav.address")}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Phone size={15} className="text-primary-golden shrink-0" />
              <span>+84 332 671 167</span>
            </div>
            <div className="hidden lg:flex items-center gap-4 border-l border-white/20 pl-5 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-primary-golden cursor-pointer transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-primary-golden cursor-pointer transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-primary-golden cursor-pointer transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
            <div className="border-l border-white/20 pl-4 shrink-0">
              <LanguageSwitcher variant="topbar" />
            </div>
          </div>
        </div>
      </div>

      {/* 
        MAIN NAVBAR LAYER
        flex items-end pushes the nav links to the bottom, leaving the green bar exposed on the right.
      */}
      <div 
        className={`relative z-20 hidden md:flex w-full items-end pointer-events-none transition-all duration-300 ${
          isScrolled ? 'h-[72px]' : 'h-[116px]'
        }`}
      >
        
        {/* Left Section - Logo Block */}
        <div 
          className={`w-[220px] xl:w-[250px] 2xl:w-[304px] shrink-0 bg-white/90 backdrop-blur-md flex items-center justify-center pointer-events-auto transition-all duration-300 shadow-[2px_0_8px_rgba(0,0,0,0.03)] ${
            isScrolled ? 'h-[72px] rounded-tr-none' : 'h-[116px] rounded-tr-[44px]'
          }`}
        >
          <Link href="/">
            <div 
              className={`relative transition-all duration-300 ${
                isScrolled ? "h-12 w-36 xl:h-14 xl:w-44" : "h-16 w-44 xl:h-20 xl:w-52 2xl:h-24 2xl:w-64"
              }`}
            >
              <Image
                src="/logo2.jpg"
                alt="Vietex Logo"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Right Section - Nav Links Block */}
        <div className="h-[72px] flex-1 bg-white/90 backdrop-blur-md flex items-center justify-between px-3 xl:px-6 border-t border-white/50 pointer-events-auto min-w-0">
          <nav 
            className={`flex-1 flex items-center justify-start ${
              isLongLocale 
                ? "gap-2 lg:gap-2.5 xl:gap-4 2xl:gap-5" 
                : "gap-2.5 lg:gap-3.5 xl:gap-5 2xl:gap-7"
            } pr-2 min-w-0`}
          >
            {navLinks.map((link) => (
              <div key={link.name} className="relative group flex items-center h-[72px] shrink-0">
                <Link
                  href={link.href}
                  className={`flex items-center gap-0.5 whitespace-nowrap ${
                    isLongLocale 
                      ? "text-[11px] lg:text-[11.5px] xl:text-[12px] 2xl:text-[13px] tracking-normal" 
                      : "text-[11.5px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] tracking-wide"
                  } font-bold uppercase transition-colors hover:text-primary-golden ${
                    pathname.startsWith(link.href) && link.href !== "#" ? "text-primary-golden" : "text-gray-900"
                  }`}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={13} className="group-hover:rotate-180 transition-transform ml-0.5 shrink-0" />}
                </Link>
                
                {link.subLinks && (
                  <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl border-x border-b border-white/50 min-w-[260px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="px-6 py-3.5 text-[12.5px] xl:text-[13.5px] font-bold uppercase tracking-wider text-gray-700 hover:text-primary-golden hover:bg-gray-50/50 transition-colors border-b border-gray-100/50 last:border-0 whitespace-nowrap"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <button className="shrink-0 bg-primary-golden hover:bg-yellow-600 text-white px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full font-bold transition-all shadow-md transform hover:-translate-y-0.5 text-[11px] xl:text-[12.5px] uppercase tracking-wide whitespace-nowrap">
            {t("nav.requestSample")}
          </button>
        </div>

      </div>

      {/* Mobile Layout */}
      <div className={`md:hidden relative z-10 flex items-center justify-between px-4 transition-all duration-300 bg-white/90 backdrop-blur-md ${isScrolled ? 'h-[72px] shadow-md' : 'h-[72px]'}`}>
        <Link href="/">
          <div className="relative h-14 w-40">
            <Image src="/logo2.jpg" alt="Vietex Logo" fill className="object-contain object-center" priority />
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageSwitcher variant="compact" />
          <button className="text-gray-900 p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-10 bg-white/95 backdrop-blur-md absolute top-full left-0 w-full flex flex-col py-4 px-6 gap-2 border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <Link
                href={link.href}
                onClick={link.subLinks ? (e) => e.preventDefault() : () => setMobileMenuOpen(false)}
                className={`py-3 text-sm font-bold uppercase flex items-center justify-between ${
                  pathname.startsWith(link.href) && link.href !== "#" ? "text-primary-golden" : "text-gray-900"
                }`}
              >
                {link.name}
                {link.subLinks && <ChevronDown size={16} />}
              </Link>
              {link.subLinks && (
                <div className="flex flex-col pl-4 border-l-2 border-gray-100 ml-2 mb-2">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 text-xs font-bold uppercase text-gray-600 hover:text-primary-golden"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="bg-primary-golden text-white px-6 py-3 rounded-full font-bold mt-4 w-full uppercase text-sm">
            {t("nav.requestSample")}
          </button>
        </div>
      )}
    </header>
  );
}
