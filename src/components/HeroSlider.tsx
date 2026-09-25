"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Your dedicated partner for Vietnamese exports.",
    subtitle: "We connect vetted farms and processing facilities across Vietnam with importers, distributors and food businesses worldwide.",
    image: "/images/slider/sl1.png",
    color: "golden",
  },
  {
    id: 2,
    title: "Traceable to sourcing region",
    subtitle: "Consignment - Origin: Vietnam",
    image: "/images/slider/sl2.png",
    color: "green",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] md:h-[600px] overflow-hidden rounded-3xl mx-auto max-w-7xl mt-4 bg-gray-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Placeholder for actual image background if it fails to load */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image}), linear-gradient(135deg, #e2e8f0, #cbd5e1)` }}
          />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className={`max-w-2xl p-8 rounded-3xl ${slides[currentSlide].color === 'golden' ? 'glass-golden' : 'glass-green'}`}>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-[#111827]"
              >
                {slides[currentSlide].title.split("Vietnamese exports.").map((part, i, arr) => 
                  i < arr.length - 1 ? 
                  <span key={i}>{part}<span className="text-primary-golden">Vietnamese exports.</span></span> : 
                  <span key={i}>{part}</span>
                )}
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-gray-800 mb-8 font-medium"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/products" className="bg-primary-golden hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl">
                  Explore products →
                </Link>
                <Link href="/about" className="glass-light px-8 py-3 rounded-full font-bold transition-all hover:bg-white/40 text-gray-900">
                  How we work
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 right-8 flex gap-3">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full glass-light flex items-center justify-center hover:bg-white/40 transition-colors text-gray-800"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full glass-light flex items-center justify-center hover:bg-white/40 transition-colors text-gray-800"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
