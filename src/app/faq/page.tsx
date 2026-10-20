"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
    { question: t("faq.q7"), answer: t("faq.a7") },
    { question: t("faq.q8"), answer: t("faq.a8") },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 pb-32">
      <div className="text-center mb-16">
        <div className="w-16 h-16 bg-[#FDF9F1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#E8DCC2]">
          <MessageCircleQuestion className="text-primary-golden" size={32} />
        </div>
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-4">
          {t("faq.badge")}
        </h4>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          {t("faq.title")}
        </h1>
        <p className="text-xl text-gray-600">
          {t("faq.subtitle")}
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-md border-primary-golden/30' : 'bg-gray-50/50 hover:bg-gray-50'}`}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg md:text-xl pr-8 ${isOpen ? 'text-primary-golden' : 'text-gray-900'}`}>
                  {index + 1}. {faq.question}
                </span>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${isOpen ? 'bg-primary-golden text-white' : 'bg-white border border-gray-200 text-gray-400'}`}>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-8 text-gray-600 leading-relaxed text-lg pt-2 border-t border-gray-50 mx-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
