import React from 'react';

export default function SiteFooter() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setStatus('Unesite ispravnu email adresu.');
      return;
    }
    setStatus('Hvala! Prijava je zabeležena.');
    setEmail('');
  }

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="text-lg font-extrabold tracking-tight text-cyan-400">NEONPC</div>
            <p className="text-sm text-slate-400">
              Prodaja računara i IT opreme uz brzu isporuku i profesionalnu podršku.
            </p>
            <div className="text-sm space-y-1">
              <div><span className="text-slate-500">Telefon:</span> <span className="text-slate-200">+381 60 123 4567</span></div>
              <div><span className="text-slate-500">Email:</span> <span className="text-slate-200">info@neonpc.rs</span></div>
              <div><span className="text-slate-500">Adresa:</span> <span className="text-slate-200">Novi Sad, Srbija</span></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Linkovi</p>
              <a className="block text-sm text-slate-400 hover:text-white transition" href="#ponuda">Ponuda</a>
              <a className="block text-sm text-slate-400 hover:text-white transition" href="#kontakt">Kontakt</a>
              <a className="block text-sm text-slate-400 hover:text-white transition" href="#">Dostava i povraćaj</a>
              <a className="block text-sm text-slate-400 hover:text-white transition" href="#">Garancija</a>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Društvene mreže</p>
              <a className="block text-sm text-slate-400 hover:text-white transition" href="#">Facebook</a>
              <a className="block text-sm text-slate-400 hover:text-white transition" href="#">Instagram</a>
              <a className="block text-sm text-slate-400 hover:text-white transition" href="#">YouTube</a>
              <a className="block text-sm text-slate-400 hover:text-white transition" href="#">TikTok</a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Newsletter prijava</p>
            <p className="text-sm text-slate-400">Budite prvi koji saznaje za akcije i popuste.</p>
            <form onSubmit={submit} className="flex gap-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Vaš email"
                className="flex-1 h-10 rounded-2xl bg-white/5 border border-white/10 px-4 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50"
              />
              <button
                type="submit"
                className="h-10 px-4 rounded-2xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-500 transition"
              >
                Prijavi se
              </button>
            </form>
            {status && <p className="text-xs text-slate-400">{status}</p>}
          </div>
        </div>

        <div id="kontakt" className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} NeonPC. Svi prikazi su primeri.</p>
          <p className="text-xs text-slate-500">
            Potrebna pomoć? Pišite nam na <span className="text-slate-300">info@neonpc.rs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
