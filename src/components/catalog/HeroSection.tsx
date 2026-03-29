export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
              <span className="text-sm text-slate-200 font-semibold">NeonPC ponuda za ozbiljne gejmere i profesionalce</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Snaga koja se vidi.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500">
                IT oprema spremna za akciju.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl">
              Konfiguracije, laptopovi, komponente i periferija u tamnoj gejmerskoj estetici. Fokus na brzinu, hlađenje i pouzdanost.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#ponuda"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 text-black font-bold px-6 py-3 hover:brightness-110 transition shadow-[0_0_60px_rgba(34,211,238,0.20)]"
              >
                Pogledaj ponudu
              </a>
              <a
                href="#filteri"
                className="inline-flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-100 font-semibold px-6 py-3 hover:bg-white/10 transition"
              >
                Suzi izbor
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { k: 'Brza kupovina', v: 'Dodaj u korpu za sekund.' },
                { k: 'Gejmerski tamni dizajn', v: 'Čist interfejs, neon akcenti.' },
                { k: 'Premium izbor', v: '6-8 vrhunskih konfiguracija.' }
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-bold text-white">{x.k}</p>
                  <p className="text-xs text-slate-400 mt-1">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-[28px] border border-white/10 bg-slate-900 overflow-hidden shadow-[0_0_80px_rgba(124,58,237,0.15)]">
              <svg viewBox="0 0 600 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="heroGlow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="600" height="480" fill="#0d1117" />
                <rect width="600" height="480" fill="url(#heroGlow)" />
                {[60,120,180,240,300,360,420,480,540].map(x=><line key={x} x1={x} y1="0" x2={x} y2="480" stroke="#22d3ee" strokeOpacity="0.04" strokeWidth="1"/>)}
                {[60,120,180,240,300,360,420].map(y=><line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#7c3aed" strokeOpacity="0.04" strokeWidth="1"/>)}
                <rect x="100" y="60" width="400" height="280" rx="12" fill="#1e293b" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.3" />
                <rect x="115" y="75" width="370" height="180" rx="6" fill="#0f172a" />
                <rect x="130" y="90" width="100" height="150" rx="4" fill="#1e293b" opacity="0.8" />
                <rect x="140" y="100" width="80" height="12" rx="2" fill="#22d3ee" fillOpacity="0.3" />
                <rect x="140" y="118" width="60" height="8" rx="2" fill="#22d3ee" fillOpacity="0.15" />
                <rect x="140" y="130" width="70" height="8" rx="2" fill="#7c3aed" fillOpacity="0.2" />
                <rect x="140" y="142" width="50" height="8" rx="2" fill="#22d3ee" fillOpacity="0.1" />
                <rect x="245" y="90" width="120" height="70" rx="4" fill="#22d3ee" fillOpacity="0.08" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.3" />
                <text x="305" y="130" fill="#22d3ee" fontSize="12" textAnchor="middle" fontFamily="monospace" fillOpacity="0.7">RTX 4090</text>
                <rect x="380" y="90" width="90" height="40" rx="3" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4" />
                <rect x="245" y="170" width="225" height="55" rx="3" fill="#0f172a" opacity="0.8" />
                <rect x="115" y="265" width="370" height="16" rx="3" fill="#0f172a" />
                <rect x="120" y="268" width="60" height="10" rx="2" fill="#22d3ee" fillOpacity="0.2" />
                <rect x="190" y="268" width="90" height="10" rx="2" fill="#7c3aed" fillOpacity="0.15" />
                <rect x="180" y="350" width="240" height="16" rx="8" fill="#1e293b" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.3" />
                <text x="300" y="430" fill="#22d3ee" fontSize="14" textAnchor="middle" fontFamily="monospace" fillOpacity="0.4">NEONPC</text>
                <circle cx="50" cy="50" r="5" fill="#22d3ee" fillOpacity="0.6" />
                <circle cx="550" cy="430" r="4" fill="#7c3aed" fillOpacity="0.6" />
                <circle cx="550" cy="50" r="3" fill="#ec4899" fillOpacity="0.5" />
              </svg>
            </div>
            <div className="absolute -bottom-5 left-5 right-5 md:left-auto md:right-5 md:w-[280px] rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-4">
              <p className="text-sm font-semibold text-white">Preporučeno za danas</p>
              <p className="text-xs text-slate-400 mt-1">Najtraženije konfiguracije sa RTX performansama.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
