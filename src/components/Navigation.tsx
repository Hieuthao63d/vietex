"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

import { categories } from "@/data/products";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { 
      name: "Products", 
      href: "/products",
      subLinks: categories.map(cat => ({
        name: cat.name,
        href: `/products/category/${cat.id}`
      }))
    },
    { name: "Sourcing", href: "/sourcing" },
    { name: "Logistics", href: "/logistics" },
    { name: "How we work", href: "/how-we-work" },
    { name: "FAQ", href: "/faq" },
    { 
      name: "CSR", 
      href: "#",
      subLinks: [
        { name: "CSR Policy", href: "/csr/policy" },
        { name: "Community Engagement", href: "/csr/community" }
      ]
    },
    { name: "Business Partner", href: "/business-partner" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 drop-shadow-sm">
      
      {/* 
        GREEN TOP BAR 
        Uses an inverted curve to perfectly hug the logo block without overlapping it.
      */}
      <div 
        className={`absolute top-0 right-0 w-full z-0 hidden md:flex transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0' : 'h-[44px] opacity-100'
        }`}
      >
        {/* Transparent spacer: Logo block is 304px. Curve is 44px. Spacer is 260px. */}
        <div className="w-[260px] shrink-0 h-full bg-transparent"></div>
        
        {/* Inverted curve filler (44x44 square with a circle cut out from bottom-left) */}
        <div 
           className="w-[44px] shrink-0 h-[44px]" 
           style={{ background: 'radial-gradient(circle at bottom left, transparent 44px, #142A1D 44.5px)' }}
        ></div>
        
        {/* Actual Green Bar */}
        <div className="flex-1 bg-[#142A1D] flex justify-end items-center px-8 h-full">
          <div className="flex items-center gap-8 text-white text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-golden" />
              <span>Address: 56C Alley 406 Au Co Street, Hong Ha Ward, Hanoi</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary-golden" />
              <span>+84 366 842 600</span>
            </div>
            <div className="flex items-center gap-4 border-l border-white/20 pl-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-primary-golden cursor-pointer transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-primary-golden cursor-pointer transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-primary-golden cursor-pointer transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
          </div>
        </div>
      </div>

      {/* 
        MAIN NAVBAR LAYER
        flex items-end pushes the nav links to the bottom, leaving the green bar exposed on the right.
      */}
      <div 
        className={`relative z-10 hidden md:flex w-full items-end transition-all duration-300 ${
          isScrolled ? 'h-[72px]' : 'h-[116px]'
        }`}
      >
        
        {/* Left Section - Logo Block */}
        <div 
          className={`w-[304px] shrink-0 bg-white/90 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-[2px_0_8px_rgba(0,0,0,0.03)] ${
            isScrolled ? 'h-[72px] rounded-tr-none' : 'h-[116px] rounded-tr-[44px]'
          }`}
        >
          <Link href="/">
            <div 
              className={`relative transition-all duration-300 ${
                isScrolled ? "h-14 w-44" : "h-24 w-64"
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
        <div className="h-[72px] flex-1 bg-white/90 backdrop-blur-md flex items-center px-2 xl:px-6 border-t border-white/50">
          <nav className="flex-1 flex items-center justify-start space-x-2 xl:space-x-5 2xl:space-x-7 pr-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group flex items-center h-[72px]">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-[12px] xl:text-[13px] 2xl:text-[14px] font-bold tracking-wide uppercase transition-colors hover:text-primary-golden ${
                    pathname.startsWith(link.href) && link.href !== "#" ? "text-primary-golden" : "text-gray-900"
                  }`}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform ml-0.5" />}
                </Link>
                
                {link.subLinks && (
                  <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl border-x border-b border-white/50 min-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="px-6 py-4 text-[13px] xl:text-[14px] font-bold uppercase tracking-wider text-gray-700 hover:text-primary-golden hover:bg-gray-50/50 transition-colors border-b border-gray-100/50 last:border-0 whitespace-normal"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <button className="shrink-0 bg-primary-golden hover:bg-yellow-600 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md transform hover:-translate-y-0.5 text-[12px] xl:text-[13px] uppercase tracking-wide whitespace-nowrap">
            Request Sample
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
        <button className="text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
            Request Sample
          </button>
        </div>
      )}
    </header>
  );
}
