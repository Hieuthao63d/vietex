"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is Vietex Global?",
      answer: "Vietex Global is a Vietnam-based B2B agricultural products exporter. We connect international importers, distributors, wholesalers, retailers, and foodservice buyers with quality Vietnamese products, particularly canned fruits and processed agricultural goods."
    },
    {
      question: "What products does Vietex Global export?",
      answer: "Our product portfolio includes canned pineapple, canned lychee, canned longan, canned coconut, canned lime, and other Vietnamese agricultural products. Product availability may vary depending on the harvest season, processing schedule, and buyer requirements."
    },
    {
      question: "Does Vietex Global provide OEM and private-label services?",
      answer: "Yes. Vietex Global supports OEM and private-label orders for international buyers. Depending on the product and order quantity, we can discuss customized labels, packaging formats, product specifications, carton designs, and other branding requirements."
    },
    {
      question: "Are Halal-certified products available?",
      answer: "Halal-certified options may be available depending on the selected product and manufacturing facility. Buyers should provide their target market and certification requirements so our team can verify the appropriate factory and documentation before preparing a quotation."
    },
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer: "The minimum order quantity depends on the product, packaging format, label requirements, and destination market. Please share your expected order volume with us, and our team will recommend a suitable MOQ and purchasing option."
    },
    {
      question: "Can I request product samples before placing an order?",
      answer: "Yes, buyers can contact Vietex Global to request product samples for quality evaluation. Sample availability, sample costs, and international courier fees will be confirmed based on the product and delivery destination."
    },
    {
      question: "What packaging options are available?",
      answer: "Packaging options vary by product and may include different can sizes, carton specifications, retail packaging, and foodservice formats. OEM buyers may also request customized labels and packaging, subject to technical feasibility and minimum order requirements."
    },
    {
      question: "How can I request a quotation from Vietex Global?",
      answer: "You can submit a Request for Quotation through our website. Please provide your company name, country, product of interest, expected quantity, packaging requirements, certification needs, OEM or private-label requirements, destination port, and preferred delivery timeline. Our team will review your request and contact you with the relevant product specifications, pricing, and estimated lead time."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 pb-32">
      <div className="text-center mb-16">
        <div className="w-16 h-16 bg-[#FDF9F1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#E8DCC2]">
          <MessageCircleQuestion className="text-primary-golden" size={32} />
        </div>
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-4">
          Support & Information
        </h4>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about our products, services, and export processes.
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
