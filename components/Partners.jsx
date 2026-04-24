const PARTNERS = [
  'Google','Microsoft','Amazon','Infosys','TCS','Wipro','HCL','Deloitte','Accenture','HDFC Bank',
];

export default function Partners() {
  return (
    <section id="partners" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-8">
          Trusted by leading enterprises worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="bg-slate-100 border border-slate-200 rounded-xl px-6 py-3.5 text-sm font-bold text-gray-600 tracking-wide hover:border-[#1a3a8f] hover:text-[#1a3a8f] transition-all duration-200 cursor-default"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
