import { Users, BookOpen, Heart } from "lucide-react";

export default function CommunityEngagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pb-32">
      <div className="mb-16">
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-4">
          CSR & Sustainability
        </h4>
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
          Community Engagement
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          We are deeply rooted in the local communities where we operate. This section highlights our initiatives to empower farmers and support rural development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="h-[450px] bg-gray-200 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
           {/* Placeholder Image */}
           <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gradient-to-br from-[#FDF9F1] to-[#E8DCC2]">
             <span className="font-medium text-lg">Community Project Image</span>
           </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Empowering Local Farmers</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            This space is reserved for a story or case study about how Vietex provides agricultural training, modern equipment, or financial support to farming cooperatives in Vietnam.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                <Users className="text-primary-golden" size={24} />
              </div>
              <span className="font-medium">Over 500+ farming families supported</span>
            </li>
            <li className="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                <BookOpen className="text-primary-golden" size={24} />
              </div>
              <span className="font-medium">Annual training workshops on sustainable agriculture</span>
            </li>
            <li className="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                <Heart className="text-primary-golden" size={24} />
              </div>
              <span className="font-medium">Investment in local infrastructure and schools</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#142A1D] text-white rounded-[2rem] p-12 text-center relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-golden/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-golden/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <h3 className="text-3xl font-bold mb-6 relative z-10">Join our efforts</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed text-lg">
          We partner with NGOs and global buyers to amplify our impact. Contact us to learn how your procurement can directly benefit these communities.
        </p>
        <button className="bg-primary-golden hover:bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full transition-colors relative z-10 shadow-xl">
          Partner With Us
        </button>
      </div>
    </div>
  );
}
