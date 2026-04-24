'use client';
export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-[#1a3a8f] to-[#0d5c8f] py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Ready to Transform Your Workforce?
        </h2>
        <p className="text-blue-200 text-lg mb-9 leading-relaxed">
          Join 200+ enterprises who trust Accredian for world-class tech upskilling.
        </p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-[#0f1e6e] px-10 py-4 rounded-xl font-bold text-lg hover:-translate-y-0.5 transition-all duration-200 border-none cursor-pointer"
        >
          Get Started Today →
        </button>
      </div>
    </section>
  );
}
