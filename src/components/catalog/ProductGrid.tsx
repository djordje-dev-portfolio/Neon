import type { Product } from '@/data/products';
import ProductCard from '@/components/catalog/ProductCard';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="space-y-4" aria-label="Lista proizvoda">
      {products.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-slate-200 font-semibold">Nema rezultata za izabrane filtere.</p>
          <p className="text-sm text-slate-400 mt-2">Pokušajte da smanjite ograničenja ili resetujete filtere.</p>
        </div>
      ) : (
        <>
          <div className="text-sm text-slate-400">
            Prikazano: <span className="text-slate-200 font-semibold">{products.length}</span> proizvoda
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
