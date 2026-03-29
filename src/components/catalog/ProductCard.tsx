import React from 'react';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '@/data/products';
import { formatRsd } from '@/lib/currency';
import { useCart } from '@/components/cart/CartContext';
import { ProductImage } from '@/components/catalog/ProductImage';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, openCart } = useCart();

  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyan-400/30 transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
      <div className="relative h-44 sm:h-48 bg-slate-900">
        <ProductImage imageId={product.imageSrc} className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      <div className="p-4 sm:p-5 space-y-3">
        <div className="min-h-[44px]">
          <h3 className="font-extrabold tracking-tight leading-tight text-white text-base">{product.naziv}</h3>
          <p className="text-xs text-slate-400 mt-1">{product.proizvodjac} · {product.namena}</p>
        </div>

        <ul className="space-y-1">
          {product.kratkeSpecifikacije.slice(0, 4).map((s) => (
            <li key={s} className="text-xs text-slate-300 flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
              <span className="leading-4">{s}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-3 pt-2">
          <div>
            <p className="text-xs text-slate-400">Cena</p>
            <p className="text-lg font-extrabold">{formatRsd(product.cenaRsd)}</p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 text-white font-bold px-4 py-2.5 hover:bg-violet-500 transition shadow-[0_0_30px_rgba(124,58,237,0.22)]"
            onClick={() => {
              addToCart(product.id, 1);
              openCart();
            }}
          >
            <ShoppingCart className="h-4 w-4" />
            Dodaj u korpu
          </button>
        </div>
      </div>
    </article>
  );
}
