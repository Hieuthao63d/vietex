import { HeartHandshake, Leaf, ShieldCheck } from "lucide-react";

export default function CsrPolicyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pb-32">
      <div className="mb-16">
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-4">
          CSR & Sustainability
        </h4>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          Corporate Social Responsibility Policy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          At Vietex, we believe that true business success goes hand-in-hand with environmental stewardship and social equity. This is a placeholder for our comprehensive CSR policy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="bg-[#FDF9F1] p-8 rounded-3xl border border-[#E8DCC2] shadow-sm hover:shadow-md transition-shadow">
          <Leaf className="text-primary-golden mb-6" size={40} />
          <h3 className="text-xl font-bold mb-4 text-gray-900">Environmental Stewardship</h3>
          <p className="text-gray-600 leading-relaxed">
            Details about sustainable sourcing, reducing carbon footprint, eco-friendly packaging initiatives, and responsible waste management.
          </p>
        </div>
        <div className="bg-[#FDF9F1] p-8 rounded-3xl border border-[#E8DCC2] shadow-sm hover:shadow-md transition-shadow">
          <HeartHandshake className="text-primary-golden mb-6" size={40} />
          <h3 className="text-xl font-bold mb-4 text-gray-900">Fair Trade Practices</h3>
          <p className="text-gray-600 leading-relaxed">
            Commitment to fair compensation for farmers, safe working conditions, and ethical labor practices across our entire agricultural supply chain.
          </p>
        </div>
        <div className="bg-[#FDF9F1] p-8 rounded-3xl border border-[#E8DCC2] shadow-sm hover:shadow-md transition-shadow">
          <ShieldCheck className="text-primary-golden mb-6" size={40} />
          <h3 className="text-xl font-bold mb-4 text-gray-900">Governance & Ethics</h3>
          <p className="text-gray-600 leading-relaxed">
            Maintaining total transparency, strict anti-corruption policies, and rigid compliance with international trade laws and quality standards.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Policy Document Downloads</h3>
          <p className="text-gray-600 max-w-2xl">
            This section will contain downloadable PDF documents outlining our official CSR guidelines, audit reports, and annual sustainability goals.
          </p>
        </div>
        <button className="bg-white border-2 border-primary-golden text-primary-golden font-bold py-3 px-8 rounded-full hover:bg-primary-golden hover:text-white transition-colors shrink-0">
          Download 2026 CSR Report (Demo)
        </button>
      </div>
    </div>
  );
}
