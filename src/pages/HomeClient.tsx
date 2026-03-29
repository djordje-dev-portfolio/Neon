import React from 'react';
import HeroSection from '@/components/catalog/HeroSection';
import FiltersSidebar, { type FiltersState } from '@/components/catalog/FiltersSidebar';
import ProductGrid from '@/components/catalog/ProductGrid';
import AppHeader from '@/components/layout/AppHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import CartDrawer from '@/components/cart/CartDrawer';
import { CartProvider } from '@/components/cart/CartContext';
import { proizvodi, type Kategorija } from '@/data/products';
import type { Product } from '@/data/products';

type SortKey = 'preporuceno' | 'najniza' | 'najvisa';

const nameneOptions = [
  { value: 'sve', label: 'Sve namene' },
  { value: 'Gejming', label: 'Gejming' },
  { value: 'Kancelarija', label: 'Kancelarija' },
  { value: 'Radna stanica', label: 'Radna stanica' }
];

function HomeInner() {
  const priceMinPossible = React.useMemo(() => Math.min(...proizvodi.map((p) => p.cenaRsd)), []);
  const priceMaxPossible = React.useMemo(() => Math.max(...proizvodi.map((p) => p.cenaRsd)), []);

  const [search, setSearch] = React.useState('');
  const [activeQ, setActiveQ] = React.useState('');
  const [activeKat, setActiveKat] = React.useState('sve');
  const [sort, setSort] = React.useState<SortKey>('preporuceno');
  const [filters, setFilters] = React.useState<FiltersState>({
    minCena: priceMinPossible,
    maxCena: priceMaxPossible,
    proizvodjac: 'sve',
    namena: 'sve'
  });

  const brands = React.useMemo(() => {
    const set = new Set<string>();
    for (const p of proizvodi) set.add(p.proizvodjac);
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'sr'));
  }, []);

  const resetFilters = () => {
    setFilters({ minCena: priceMinPossible, maxCena: priceMaxPossible, proizvodjac: 'sve', namena: 'sve' });
  };

  const filteredProducts = React.useMemo(() => {
    const query = activeQ.trim().toLowerCase();
    const category = activeKat as Kategorija | 'sve';

    let list = proizvodi.filter((p: Product) => {
      if (query) {
        const hay = [p.naziv, p.proizvodjac, p.namena, ...p.kratkeSpecifikacije].join(' ').toLowerCase();
        if (!hay.includes(query)) return false;
      }
      if (category !== 'sve' && p.kategorija !== category) return false;
      if (filters.proizvodjac !== 'sve' && p.proizvodjac !== filters.proizvodjac) return false;
      if (filters.namena !== 'sve' && p.namena !== filters.namena) return false;
      if (p.cenaRsd < filters.minCena) return false;
      if (p.cenaRsd > filters.maxCena) return false;
      return true;
    });

    if (sort === 'najniza') list = [...list].sort((a, b) => a.cenaRsd - b.cenaRsd);
    if (sort === 'najvisa') list = [...list].sort((a, b) => b.cenaRsd - a.cenaRsd);
    return list;
  }, [activeQ, activeKat, filters, sort]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <AppHeader
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={() => setActiveQ(search)}
        activeKat={activeKat}
        onKatChange={setActiveKat}
      />
      <main className="flex-1">
        <HeroSection />

        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div id="filteri" />

          <div className="mt-4 lg:grid lg:grid-cols-[320px,1fr] gap-8">
            <div className="hidden lg:block">
              <FiltersSidebar
                filters={filters}
                brands={brands}
                namene={nameneOptions}
                minMoguce={priceMinPossible}
                maxMoguce={priceMaxPossible}
                onChange={setFilters}
                onReset={resetFilters}
              />
            </div>

            <div className="lg:hidden mb-4">
              <details className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-3">
                  <span className="font-extrabold">Filteri</span>
                  <span className="text-xs text-slate-400">Cena · Proizvođač · Namena</span>
                </summary>
                <div className="mt-4">
                  <FiltersSidebar
                    filters={filters}
                    brands={brands}
                    namene={nameneOptions}
                    minMoguce={priceMinPossible}
                    maxMoguce={priceMaxPossible}
                    onChange={setFilters}
                    onReset={resetFilters}
                  />
                </div>
              </details>
            </div>

            <div className="space-y-4">
              <div id="ponuda" className="pt-1" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-extrabold tracking-tight">Ponuda</h2>
                  <p className="text-sm text-slate-400 mt-1">Premium izbor gaming i pro IT opreme.</p>
                </div>
                <div className="flex items-center gap-3">
                  <label className="text-sm text-slate-300">
                    <span className="mr-2 text-slate-400">Sortiranje</span>
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value as SortKey)}
                      className="h-10 rounded-2xl bg-slate-950/60 border border-white/10 px-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400/50"
                    >
                      <option value="preporuceno">Preporučeno</option>
                      <option value="najniza">Najniža cena</option>
                      <option value="najvisa">Najviša cena</option>
                    </select>
                  </label>
                  <button
                    type="button"
                    className="h-10 px-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm font-semibold"
                    onClick={resetFilters}
                  >
                    Resetuj
                  </button>
                </div>
              </div>

              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  );
}

export default function HomeClient() {
  return (
    <CartProvider>
      <HomeInner />
    </CartProvider>
  );
}
