import { CheckCircle2 } from "lucide-react";

export default function LogisticsPage() {
  const documents = [
    "Commercial Invoice & Packing List",
    "Bill of Lading (B/L)",
    "Certificate of Origin (Form A, B, E, EUR.1, etc.)",
    "Phytosanitary Certificate",
    "Fumigation Certificate",
    "Health Certificate / Certificate of Free Sale (if required)"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* Left Content */}
        <div>
          <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-primary-golden"></span> Export & Logistics
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-10 text-gray-900 leading-[1.1]">
            Short on distance. Long on details.
          </h1>
          <p className="text-2xl text-gray-600 mb-12 font-medium">
            Exporting from Vietnam requires exact paperwork. We handle it all.
          </p>
          
          <div className="space-y-6">
            {documents.map((doc, i) => (
              <div key={i} className="flex items-start gap-4 pb-6 border-b border-gray-200">
                <CheckCircle2 className="text-primary-golden mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-900 font-medium text-xl">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Clean typography instead of a box */}
        <div className="lg:pl-16 lg:border-l border-gray-200 lg:sticky lg:top-32">
          <h3 className="text-3xl md:text-5xl font-black leading-tight text-gray-900 mb-8">
            FOB, CIF or CFR?
          </h3>
          <div className="w-16 h-1 bg-primary-golden mb-8"></div>
          <p className="text-2xl text-gray-600 leading-relaxed">
            We work with major shipping lines to secure competitive freight rates to your destination port.
          </p>
        </div>
        
      </div>
    </div>
  );
}
