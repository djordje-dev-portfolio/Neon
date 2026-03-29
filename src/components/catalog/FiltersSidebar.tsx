import React from 'react';

export type FiltersState = {
  minCena: number;
  maxCena: number;
  proizvodjac: string;
  namena: string;
};

type Props = {
  filters: FiltersState;
  brands: string[];
  namene: Array<{ value: string; label: string }>;
  minMoguce: number;
  maxMoguce: number;
  onChange: (next: FiltersState) => void;
  onReset: () => void;
};

export default function FiltersSidebar({ filters, brands, namene, minMoguce, maxMoguce, onChange, onReset }: Props) {
  const clampPrice = (value: number, fallback: number) => {
    if (Number.isNaN(value) || !Number.isFinite(value)) return fallback;
    return Math.max(minMoguce, Math.min(maxMoguce, value));
  };

  return (
    <aside className="lg:sticky lg:top-24 self-start">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 lg:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-extrabold tracking-tight">Napredna filtracija</h3>
            <p className="text-xs text-slate-400 mt-1">Suzi izbor po ceni, proizvođaču i nameni.</p>
          </div>
          <button
            type="button"
            className="rounded-xl px-3 py-2 text-xs font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition text-slate-100"
            onClick={onReset}
          >
            Resetuj
          </button>
        </div>

        <div className="mt-5 space-y-5">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Cena (RSD)</p>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs text-slate-400">Min</span>
                <input
                  type="number"
                  value={filters.minCena}
                  min={minMoguce}
                  max={filters.maxCena}
                  step={1000}
                  onChange={(e) => {
                    const nextMin = clampPrice(Number(e.target.value), minMoguce);
                    onChange({ ...filters, minCena: Math.min(nextMin, filters.maxCena) });
                  }}
                  className="mt-1 w-full h-10 rounded-2xl bg-slate-950/60 border border-white/10 px-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400/50"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-400">Max</span>
                <input
                  type="number"
                  value={filters.maxCena}
                  min={filters.minCena}
                  max={maxMoguce}
                  step={1000}
                  onChange={(e) => {
                    const nextMax = clampPrice(Number(e.target.value), maxMoguce);
                    onChange({ ...filters, maxCena: Math.max(nextMax, filters.minCena) });
                  }}
                  className="mt-1 w-full h-10 rounded-2xl bg-slate-950/60 border border-white/10 px-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400/50"
                />
              </label>
            </div>
            <div className="text-xs text-slate-400">
              Opseg: {minMoguce.toLocaleString('sr-RS')} - {maxMoguce.toLocaleString('sr-RS')}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Proizvođač</p>
            <select
              value={filters.proizvodjac}
              onChange={(e) => onChange({ ...filters, proizvodjac: e.target.value })}
              className="w-full h-10 rounded-2xl bg-slate-950/60 border border-white/10 px-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400/50"
            >
              <option value="sve">Svi proizvođači</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Namena</p>
            <select
              value={filters.namena}
              onChange={(e) => onChange({ ...filters, namena: e.target.value })}
              className="w-full h-10 rounded-2xl bg-slate-950/60 border border-white/10 px-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400/50"
            >
              {namene.map((n) => (
                <option key={n.value} value={n.value}>{n.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
