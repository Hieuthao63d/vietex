export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-32">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
        
        {/* Left Content (Text) */}
        <div className="lg:col-span-7">
          <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-primary-golden"></span> Who we are
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 text-gray-900 leading-[1.1]">
            We make sourcing from Vietnam simple, safe and reliable.
          </h1>
          
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Vietex Global is a Hanoi-based agricultural and seafood export company. We are <strong>not a farm and not a factory</strong> — we are the dedicated partner that sits between carefully selected Vietnamese producers and buyers around the world.
            </p>
            <p>
              Sourcing directly overseas creates real friction: language barriers, inconsistent quality, unfamiliar paperwork and the risk of a shipment failing inspection on arrival. Vietex removes that friction. We vet suppliers, control quality before loading, prepare complete export documentation, and stay accountable for the consignment until it reaches you.
            </p>
            <p>
              Our existing customers in <strong>Poland (EU)</strong> and the <strong>United Arab Emirates (GCC)</strong> are proof that we already meet two of the world's most demanding sets of import standards.
            </p>
          </div>
        </div>

        {/* Right Content (Card) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-10 border border-gray-100">
            <h3 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-8">
              Company at a glance
            </h3>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Company</p>
                <p className="font-semibold text-gray-900">Vietex Global</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Headquarters</p>
                <p className="font-semibold text-gray-900">Hong Ha Ward, Hanoi, Vietnam</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Business model</p>
                <p className="font-semibold text-gray-900">Export trading — sourcing, QC & logistics</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Core products</p>
                <p className="font-semibold text-gray-900 leading-snug">Cinnamon • Coffee • Coconut • Mango • Canned Fish • Cashew</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Current markets</p>
                <p className="font-semibold text-gray-900">Poland (EU) • UAE (GCC)</p>
              </div>
              <div className="pt-2">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Growth market</p>
                <p className="font-semibold text-gray-900">Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <h4 className="text-gray-500 font-bold tracking-[0.2em] uppercase text-xs mb-8">
          Our role in your supply chain
        </h4>
        
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-6">
          
          <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <span className="block text-primary-golden font-bold text-sm mb-3">01</span>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Partner farms & factories</h3>
            <p className="text-gray-500 text-sm">Qualified producers in known sourcing regions.</p>
          </div>

          <div className="hidden lg:flex text-primary-golden opacity-50">→</div>

          <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <span className="block text-primary-golden font-bold text-sm mb-3">02</span>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Vietex quality control</h3>
            <p className="text-gray-500 text-sm">Inspection and grading before loading.</p>
          </div>

          <div className="hidden lg:flex text-primary-golden opacity-50">→</div>

          <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <span className="block text-primary-golden font-bold text-sm mb-3">03</span>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Export & documentation</h3>
            <p className="text-gray-500 text-sm">Full paperwork prepared and certified.</p>
          </div>

          <div className="hidden lg:flex text-primary-golden opacity-50">→</div>

          <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <span className="block text-primary-golden font-bold text-sm mb-3">04</span>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Your port</h3>
            <p className="text-gray-500 text-sm">Delivered and ready to clear customs.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
