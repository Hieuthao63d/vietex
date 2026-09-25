export default function HowWeWorkPage() {
  const services = [
    {
      id: "01",
      title: "Spot purchasing",
      description: "For immediate requirements and filling gaps in your supply chain."
    },
    {
      id: "02",
      title: "Forward contracts",
      description: "Secure pricing and volume for upcoming seasons."
    },
    {
      id: "03",
      title: "Consolidated shipments",
      description: "Mix different products in a single container for trial runs."
    },
    {
      id: "04",
      title: "Private label",
      description: "Custom packaging and labeling to your exact specifications."
    },
    {
      id: "05",
      title: "Regular consignments",
      description: "Set-and-forget regular shipments for consistent supply."
    },
    {
      id: "06",
      title: "Market intelligence",
      description: "Receive on-the-ground updates on crop yields and price trends."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pb-32">
      <div className="mb-24">
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-primary-golden"></span> Services
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
            A system built for scale. Flexible for your needs.
          </h1>
          <div className="flex items-end pb-4">
            <p className="text-2xl text-gray-600 font-medium leading-relaxed">
              We adapt to your procurement strategy.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
        {services.map((service) => (
          <div key={service.id} className="relative group">
            {/* Minimalist approach: just a large number, title, and text. No box. */}
            <div className="text-primary-golden font-black text-5xl mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
              {service.id}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-gray-900 pb-4 inline-block">{service.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
