const FEATURES = [
  { icon: '🎓', bg: 'bg-blue-50', title: 'IIT & IIM Certifications', desc: 'Programs co-created and certified by premier institutions — IIT Delhi, IIM Kozhikode, and more.' },
  { icon: '📈', bg: 'bg-green-50', title: 'Real-Time Dashboards', desc: 'Track learner progress, completion rates, assessments, and ROI via a dedicated enterprise portal.' },
  { icon: '🛠️', bg: 'bg-amber-50', title: 'Hands-On Projects', desc: 'Learners apply skills on live industry projects — capstone projects with real-world datasets.' },
  { icon: '🤝', bg: 'bg-purple-50', title: 'Dedicated L&D Support', desc: 'A dedicated account manager and L&D specialist for each enterprise client.' },
  { icon: '📱', bg: 'bg-pink-50', title: 'Mobile Learning', desc: 'Learn on the go with our mobile app. Offline access, bite-sized modules, and push notifications.' },
  { icon: '🌐', bg: 'bg-teal-50', title: 'Flexible Delivery', desc: 'Live online, self-paced, or blended — programs structured around your team\'s availability.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="pill mb-4 block">Why Accredian</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1e6e] mb-4 tracking-tight">
            Built for Enterprise Scale
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
            Everything you need to upskill teams of 10 to 10,000.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="p-7 border border-gray-200 rounded-2xl hover:border-[#1a3a8f] hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-[#0f1e6e] mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
