import React from 'react';
import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';
import { formatRsd } from '@/lib/currency';
import { ProductImage } from '@/components/catalog/ProductImage';

function stopPropagation(e: React.MouseEvent) {
  e.stopPropagation();
}

export default function CartDrawer() {
  const { items, cartCount, totalRsd, isCartOpen, closeCart, setItemKolicina, removeFromCart, clearCart, getProduct } = useCart();

  React.useEffect(() => {
    if (!isCartOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      onClick={closeCart}
      role="dialog"
      aria-modal="true"
      aria-label="Korpa"
    >
      <div
        className="absolute right-0 top-0 h-full w-full max-w-[480px] bg-slate-950 border-l border-white/10 shadow-[0_0_60px_rgba(124,58,237,0.18)] flex flex-col"
        onClick={stopPropagation}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingCart className="h-5 w-5 text-cyan-400" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 rounded-full bg-violet-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </div>
            <h2 className="text-lg font-semibold tracking-tight">Vaša korpa</h2>
          </div>
          <button
            type="button"
            className="rounded-md p-2 text-slate-300 hover:bg-white/5 transition"
            onClick={closeCart}
            aria-label="Zatvori korpu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-start gap-4">
              <p className="text-slate-200">Vaša korpa je prazna. Spremite sledeću konfiguraciju.</p>
              <button
                type="button"
                onClick={closeCart}
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10 transition"
              >
                Pogledaj ponudu
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((it) => {
                const p = getProduct(it.productId);
                if (!p) return null;
                return (
                  <div key={it.productId} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/10 bg-slate-900 flex-shrink-0">
                      <ProductImage imageId={p.imageSrc} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-semibold text-sm leading-tight truncate">{p.naziv}</p>
                          <p className="text-xs text-slate-400 mt-1">{formatRsd(p.cenaRsd)} / kom.</p>
                        </div>
                        <button
                          type="button"
                          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
                          onClick={() => removeFromCart(it.productId)}
                          aria-label="Ukloni iz korpe"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-2 py-1">
                          <button
                            type="button"
                            className="p-1 rounded-lg text-slate-200 hover:bg-white/10 transition disabled:opacity-40"
                            onClick={() => setItemKolicina(it.productId, it.kolicina - 1)}
                            disabled={it.kolicina <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{it.kolicina}</span>
                          <button
                            type="button"
                            className="p-1 rounded-lg text-slate-200 hover:bg-white/10 transition"
                            onClick={() => setItemKolicina(it.productId, it.kolicina + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-sm font-semibold">{formatRsd(p.cenaRsd * it.kolicina)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-300">Ukupno</p>
            <p className="text-sm font-semibold">{formatRsd(totalRsd)}</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-xs text-slate-400">Dostava</p>
            <p className="text-xs text-slate-200 font-semibold">Besplatno</p>
          </div>
          {items.length > 0 && (
            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                className="rounded-xl bg-cyan-400 text-black font-bold px-4 py-3 hover:brightness-110 transition"
                onClick={() => alert('Nastavak na plaćanje nije implementiran u ovom primeru.')}
              >
                Nastavi na plaćanje
              </button>
              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10 transition"
                onClick={clearCart}
              >
                Isprazni korpu
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
