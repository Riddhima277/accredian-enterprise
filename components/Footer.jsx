const PROGRAMS_LINKS = ['AI & ML','Data Science','Cloud & DevOps','Product Management','Cybersecurity'];
const COMPANY_LINKS = ['About Us','Careers','Partners','Blog','Press'];

export default function Footer() {
  return (
    <footer className="bg-[#0f1e6e] text-slate-400 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-400 rounded-lg flex items-center justify-center font-bold text-[#0f1e6e]">A</div>
              <span className="text-white text-lg font-bold">Accredian Enterprise</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-5">
              Empowering enterprises with world-class tech education, certified by IIT & IIM.
            </p>
            <div className="flex gap-2.5">
              {['in','tw','yt'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/15 transition-all text-xs font-bold no-underline">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <div className="text-white font-bold text-xs tracking-widest uppercase mb-5">Programs</div>
            <div className="flex flex-col gap-2.5">
              {PROGRAMS_LINKS.map((p) => (
                <a key={p} href="#programs" className="text-slate-500 hover:text-slate-300 text-sm no-underline transition-colors">{p}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-white font-bold text-xs tracking-widest uppercase mb-5">Company</div>
            <div className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((c) => (
                <a key={c} href="#" className="text-slate-500 hover:text-slate-300 text-sm no-underline transition-colors">{c}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-bold text-xs tracking-widest uppercase mb-5">Contact</div>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:enterprise@accredian.com" className="text-slate-500 hover:text-slate-300 text-sm no-underline">enterprise@accredian.com</a>
              <a href="tel:+911800123456" className="text-slate-500 hover:text-slate-300 text-sm no-underline">+91 1800-123-456</a>
              <span className="text-slate-500 text-sm">Mon–Sat 9 AM – 6 PM IST</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-slate-600 text-sm">© 2024 Accredian. All rights reserved.</span>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service','Cookie Policy'].map((l) => (
              <a key={l} href="#" className="text-slate-600 hover:text-slate-400 text-sm no-underline transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
