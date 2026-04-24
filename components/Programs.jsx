'use client';

const PROGRAMS = [
  {
    icon: '🤖',
    tag: 'Most Popular',
    tagColor: 'bg-blue-100 text-blue-800',
    title: 'AI & Machine Learning',
    desc: 'End-to-end ML curriculum from fundamentals to advanced deep learning and LLMs.',
    badges: [{ text: '6–12 months', color: 'bg-blue-50 text-blue-700' }, { text: 'IIT Certified', color: 'bg-green-50 text-green-700' }],
    iconBg: 'bg-blue-50',
    featured: false,
  },
  {
    icon: '📊',
    tag: 'Flagship',
    tagColor: 'bg-[#1a3a8f] text-white',
    title: 'Data Science & Analytics',
    desc: 'Transform your team into data-driven decision makers with our comprehensive DS program.',
    badges: [{ text: '4–9 months', color: 'bg-blue-50 text-blue-700' }, { text: 'IIM Certified', color: 'bg-amber-50 text-amber-800' }],
    iconBg: 'bg-amber-50',
    featured: true,
  },
  {
    icon: '☁️',
    tag: null,
    title: 'Cloud & DevOps',
    desc: 'AWS, Azure, GCP and modern DevOps practices for enterprise-scale deployments.',
    badges: [{ text: '3–6 months', color: 'bg-blue-50 text-blue-700' }, { text: 'AWS Partner', color: 'bg-green-50 text-green-700' }],
    iconBg: 'bg-green-50',
    featured: false,
  },
  {
    icon: '💡',
    tag: null,
    title: 'Product Management',
    desc: 'Build next-gen PMs with frameworks, tools, and real-world case studies.',
    badges: [{ text: '4–8 months', color: 'bg-blue-50 text-blue-700' }, { text: 'IIM Certified', color: 'bg-pink-50 text-pink-800' }],
    iconBg: 'bg-pink-50',
    featured: false,
  },
  {
    icon: '🔒',
    tag: null,
    title: 'Cybersecurity',
    desc: 'Protect your enterprise with cutting-edge security training and certifications.',
    badges: [{ text: '3–5 months', color: 'bg-blue-50 text-blue-700' }, { text: 'EC-Council', color: 'bg-purple-50 text-purple-800' }],
    iconBg: 'bg-purple-50',
    featured: false,
  },
  {
    icon: '⚡',
    tag: null,
    title: 'Custom L&D Programs',
    desc: "Bespoke learning journeys designed around your company's specific tech stack and goals.",
    badges: [{ text: 'Custom duration', color: 'bg-orange-50 text-orange-800' }, { text: 'Tailored', color: 'bg-green-50 text-green-700' }],
    iconBg: 'bg-orange-50',
    featured: false,
  },
];

export default function Programs() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="programs" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="pill mb-4 block">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1e6e] mb-4 tracking-tight">
            World-Class Learning Programs
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
            Certified programs designed for enterprise needs, co-developed with top IIT & IIM faculties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROGRAMS.map((prog, i) => (
            <div
              key={i}
              className={`program-card ${prog.featured ? 'border-[#1a3a8f] border-2 shadow-xl shadow-[#1a3a8f]/10' : ''}`}
            >
              {prog.tag && (
                <span className={`inline-block ${prog.tagColor} text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                  {prog.tag}
                </span>
              )}
              <div className={`w-12 h-12 ${prog.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {prog.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0f1e6e] mb-2">{prog.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{prog.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {prog.badges.map((b, j) => (
                  <span key={j} className={`${b.color} rounded-full px-3 py-1 text-xs font-semibold`}>
                    {b.text}
                  </span>
                ))}
              </div>
              <button
                onClick={scrollToContact}
                className="text-[#1a3a8f] font-bold text-sm bg-transparent border-none cursor-pointer hover:underline p-0"
              >
                {prog.title === 'Custom L&D Programs' ? 'Talk to Us →' : 'Explore Program →'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
