const STATS = [
  { value: '200+', label: 'Enterprise Clients' },
  { value: '50K+', label: 'Professionals Trained' },
  { value: '95%', label: 'Satisfaction Rate' },
  { value: '30+', label: 'Expert Instructors' },
];

export default function Stats() {
  return (
    <section className="bg-gray-50 py-16 px-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-7 text-center card-hover"
          >
            <div className="text-4xl font-extrabold text-[#1a3a8f] tracking-tight">{s.value}</div>
            <div className="text-sm text-gray-500 mt-2 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
