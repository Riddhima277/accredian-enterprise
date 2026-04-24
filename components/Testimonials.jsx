const TESTIMONIALS = [
  {
    stars: 5,
    quote: 'Accredian helped us build a data science capability from scratch in 6 months. The quality of instructors and curriculum is world-class.',
    initials: 'AK',
    name: 'Arjun Kumar',
    role: 'VP Engineering, Infosys',
    avatarBg: 'bg-blue-100',
    avatarText: 'text-blue-800',
  },
  {
    stars: 5,
    quote: 'The ROI we have seen post-training has been incredible. Our teams are now shipping ML features 3x faster. Truly transformational.',
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'Head of L&D, TCS',
    avatarBg: 'bg-green-100',
    avatarText: 'text-green-800',
    featured: true,
  },
  {
    stars: 5,
    quote: 'Flexible scheduling, amazing mentors, and hands-on capstone projects. Our employees finished the program more motivated than ever.',
    initials: 'RM',
    name: 'Rahul Mehta',
    role: 'CTO, HDFC Securities',
    avatarBg: 'bg-pink-100',
    avatarText: 'text-pink-800',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="pill mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1e6e] tracking-tight">
            What Leaders Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`bg-white border rounded-2xl p-7 card-hover ${
                t.featured ? 'border-[#1a3a8f] border-2' : 'border-gray-200'
              }`}
            >
              <div className="text-yellow-400 text-lg mb-4">{'★'.repeat(t.stars)}</div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center font-bold ${t.avatarText} text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
