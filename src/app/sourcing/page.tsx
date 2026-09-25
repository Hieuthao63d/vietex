export default function SourcingPage() {
  const checkpoints = [
    {
      id: "1",
      title: "At origin",
      description: "Farm visits, yield assessment, and pesticide testing (where applicable) before harvest."
    },
    {
      id: "2",
      title: "Pre-processing",
      description: "Raw material inspection upon arrival at the sorting facility."
    },
    {
      id: "3",
      title: "Processing",
      description: "On-site supervision during grading, sorting, and packing."
    },
    {
      id: "4",
      title: "At loading",
      description: "Final verification of weight, packaging integrity, and container sealing before departure."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pb-32">
      <div className="mb-24 text-center max-w-4xl mx-auto">
        <h4 className="text-primary-golden font-bold tracking-[0.2em] uppercase text-sm mb-6">
          Quality Control
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-10 text-gray-900 leading-[1.1]">
          Why every shipment matters.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 max-w-5xl mx-auto">
        <div>
          <h3 className="text-sm font-bold mb-6 text-gray-400 uppercase tracking-[0.2em]">
            Compliance doesn't happen by accident
          </h3>
          <p className="text-gray-900 text-2xl md:text-3xl font-medium leading-relaxed">
            It requires a physical presence at the farm, at the processing facility, and at the port. That is the role we play for our overseas buyers.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold mb-6 text-gray-400 uppercase tracking-[0.2em]">
            No shortcuts, no exceptions
          </h3>
          <p className="text-gray-900 text-2xl md:text-3xl font-medium leading-relaxed">
            We decline more suppliers than we accept. If a product doesn't meet our internal standards, it doesn't get packed. Period.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h3 className="text-sm font-bold mb-12 text-gray-400 uppercase tracking-[0.2em]">Our 4 checkpoints</h3>
        
        <div className="space-y-0">
          {checkpoints.map((point, index) => (
            <div key={point.id} className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-10 ${index !== checkpoints.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <div className="md:col-span-1">
                <span className="text-primary-golden font-black text-2xl">0{point.id}</span>
              </div>
              <div className="md:col-span-4">
                <h4 className="font-bold text-2xl text-gray-900">
                  {point.title}
                </h4>
              </div>
              <div className="md:col-span-7">
                <p className="text-gray-600 text-xl leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
