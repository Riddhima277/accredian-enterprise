'use client';

const HIGHLIGHTS = [
  { icon: '🎓', title: 'IIT-Delhi Certified Programs', sub: 'Co-developed with IIT & IIM faculty' },
  { icon: '📊', title: 'Real-Time Analytics Dashboard', sub: 'Track learner progress & ROI' },
  { icon: '🤝', title: 'Dedicated L&D Partner', sub: 'End-to-end program management' },
];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="bg-gradient-to-br from-[#0f1e6e] via-[#1a3a8f] to-[#0d5c8f] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <span className="pill mb-5 block">Trusted by 200+ Enterprises</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Upskill Your Teams.{' '}
            <span className="text-blue-400">Future-Proof</span>{' '}
            Your Business.
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-9 max-w-lg">
            Partner with Accredian to deliver world-class AI, Data Science, and tech learning
            programs tailored for enterprise workforce development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-blue-400 text-[#0f1e6e] px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-300 transition-all duration-200 hover:-translate-y-0.5 border-none cursor-pointer"
            >
              Get Started Free →
            </button>
            <button
              onClick={() => scrollTo('programs')}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-base hover:border-white transition-all duration-200 bg-transparent cursor-pointer"
            >
              View Programs
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 animate-fade-up animate-delay-200">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              className="bg-white/8 border border-white/15 rounded-2xl px-6 py-5 backdrop-blur-sm hover:bg-white/12 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{h.icon}</span>
                <div>
                  <div className="text-white font-bold text-base">{h.title}</div>
                  <div className="text-blue-300 text-sm mt-0.5">{h.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
