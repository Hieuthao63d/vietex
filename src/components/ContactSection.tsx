import { Mail, MapPin, Phone, User, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#142A1D] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side - Contact Info */}
        <div>
          <h4 className="text-primary-golden uppercase tracking-widest text-sm font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-primary-golden inline-block"></span>
            Contact & Next Steps
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Let us send you a sample.
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-md">
            Tell us your product, volume and destination — a member of our team will respond promptly with a quotation and a sample.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-6 border-b border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <User className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">Managing Director</p>
                <p className="font-bold text-lg">Nguyen The Nam</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">Email</p>
                <p className="font-bold text-lg">henry.nguyen@vietex-global.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">Tel / WhatsApp / Zalo</p>
                <p className="font-bold text-lg">+84 366 842 600</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">Address</p>
                <p className="font-bold text-lg leading-snug">
                  56C Alley 406 Au Co Street,<br/>
                  Hong Ha Ward, Hanoi, Vietnam
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Globe className="text-primary-golden" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">Website</p>
                <p className="font-bold text-lg">vietex-global.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl self-start">
          <h3 className="text-2xl font-black mb-2">Request a quotation & sample</h3>
          <p className="text-gray-300 text-sm mb-8">We typically reply within one business day.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2">PRODUCT OF INTEREST</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white">
                <option className="text-gray-900">Cinnamon & Star Anise</option>
                <option className="text-gray-900">Cashew Nuts</option>
                <option className="text-gray-900">Coffee Beans</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2">NAME</label>
                <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2">COMPANY</label>
                <input type="text" placeholder="Company name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2">EMAIL</label>
                <input type="email" placeholder="you@company.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2">DESTINATION MARKET</label>
                <input type="text" placeholder="e.g. Poland, UAE, Australia" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2">TARGET VOLUME</label>
              <input type="text" placeholder="e.g. 1 x 20ft trial container" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 tracking-wider mb-2">MESSAGE</label>
              <textarea placeholder="Tell us your target specification, packaging and timeline." rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary-golden transition-colors text-sm text-white placeholder-gray-400 resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-primary-golden hover:bg-yellow-500 text-gray-900 font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              Send enquiry <span>→</span>
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              This opens a pre-filled email in your mail app — nothing is sent until you press send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
