import { Building2, Globe, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function BusinessPartnerPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pb-32">
      <div className="text-center mb-24">
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-4">
          Our Network
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 leading-tight max-w-4xl mx-auto">
          Trusted by Global Partners
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are proud to supply premium Vietnamese agricultural products to some of the world's most demanding importers, distributors, and retail chains across the EU, Middle East, and Asia.
        </p>
      </div>

      {/* Global Distributors Category */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
          <Globe className="text-primary-golden" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Global Importers & Distributors</h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative w-36 h-36 md:w-44 md:h-44 bg-white border border-gray-100 rounded-full shadow-md hover:shadow-xl transition-all grayscale hover:grayscale-0 cursor-pointer overflow-hidden flex items-center justify-center">
              <span className="text-gray-300 text-xs font-bold absolute">Logo {i}</span>
              <Image 
                src={`/images/logo-partner/partner-${i}.png`} 
                alt={`Partner ${i}`} 
                fill 
                className="object-cover relative z-10" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Retail & Supermarket Chains Category */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
          <ShoppingCart className="text-primary-golden" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Retail & Supermarket Chains</h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {[5, 6, 7, 8].map((i) => (
            <div key={i} className="relative w-36 h-36 md:w-44 md:h-44 bg-white border border-gray-100 rounded-full shadow-md hover:shadow-xl transition-all grayscale hover:grayscale-0 cursor-pointer overflow-hidden flex items-center justify-center">
              <span className="text-gray-300 text-xs font-bold absolute">Logo {i}</span>
              <Image 
                src={`/images/logo-partner/partner-${i}.png`} 
                alt={`Partner ${i}`} 
                fill 
                className="object-cover relative z-10" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Food Processing Category */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
          <Building2 className="text-primary-golden" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Food Processing Facilities</h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {[9, 10, 11, 12].map((i) => (
            <div key={i} className="relative w-36 h-36 md:w-44 md:h-44 bg-white border border-gray-100 rounded-full shadow-md hover:shadow-xl transition-all grayscale hover:grayscale-0 cursor-pointer overflow-hidden flex items-center justify-center">
              <span className="text-gray-300 text-xs font-bold absolute">Logo {i}</span>
              <Image 
                src={`/images/logo-partner/partner-${i}.png`} 
                alt={`Partner ${i}`} 
                fill 
                className="object-contain p-6 relative z-10" 
              />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
