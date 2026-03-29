import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { kategorije } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';

type Props = {
  search: string;
  onSearchChange: (v: string) => void;
  onSearchSubmit: () => void;
  activeKat: string;
  onKatChange: (kat: string) => void;
};

export default function AppHeader({ search, onSearchChange, onSearchSubmit, activeKat, onKatChange }: Props) {
  const { cartCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 min-w-[160px]">
            <div className="w-10 h-10 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-violet-600/10 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.12)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="14" rx="2" stroke="#22d3ee" strokeWidth="1.5" />
                <rect x="5" y="7" width="6" height="8" rx="1" fill="#22d3ee" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="1" />
                <rect x="13" y="7" width="6" height="4" rx="1" fill="#7c3aed" fillOpacity="0.3" stroke="#7c3aed" strokeWidth="1" />
                <circle cx="12" cy="21" r="1" fill="#22d3ee" />
                <line x1="8" y1="20" x2="16" y2="20" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.5" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-white">NEONPC</div>
              <div className="text-[11px] text-slate-400">Gejming i Pro IT</div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') onSearchSubmit(); }}
                type="search"
                placeholder="Pretraži računare, brendove i komponente..."
                className="w-full h-10 rounded-2xl bg-white/5 border border-white/10 pl-9 pr-28 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50"
                aria-label="Pretraga"
              />
              <button
                type="button"
                onClick={onSearchSubmit}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-3 rounded-xl bg-cyan-400 text-black text-sm font-bold hover:brightness-110 transition"
              >
                Pretraži
              </button>
            </div>
          </div>

          <button
            type="button"
            className="relative rounded-2xl h-10 w-10 flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition"
            onClick={openCart}
            aria-label="Otvori korpu"
          >
            <ShoppingCart className="h-5 w-5 text-slate-100" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 rounded-full bg-violet-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <nav className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => onKatChange('sve')}
            className={`whitespace-nowrap rounded-xl px-3 py-2 text-sm border transition ${
              activeKat === 'sve'
                ? 'bg-white/10 border-white/20 text-white'
                : 'bg-transparent border-white/10 text-slate-300 hover:bg-white/5'
            }`}
          >
            Sve
          </button>
          {kategorije.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => onKatChange(k.id)}
              className={`whitespace-nowrap rounded-xl px-3 py-2 text-sm border transition ${
                activeKat === k.id
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-transparent border-white/10 text-slate-300 hover:bg-white/5'
              }`}
            >
              {k.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
