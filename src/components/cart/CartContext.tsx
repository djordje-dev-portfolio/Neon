import React from 'react';
import type { Product } from '@/data/products';
import { proizvodi } from '@/data/products';

type CartItem = {
  productId: string;
  kolicina: number;
};

type CartContextValue = {
  items: CartItem[];
  cartCount: number;
  totalRsd: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (productId: string, kolicina?: number) => void;
  setItemKolicina: (productId: string, kolicina: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getProduct: (productId: string) => Product | undefined;
};

const CartContext = React.createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'neonpc_korpa_v1';

function getCartCount(items: CartItem[]) {
  return items.reduce((acc, it) => acc + it.kolicina, 0);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const productsById = React.useMemo(() => {
    return Object.fromEntries(proizvodi.map((p) => [p.id, p])) as Record<string, Product>;
  }, []);

  const [items, setItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as CartItem[];
      if (!Array.isArray(parsed)) return;
      setItems(
        parsed
          .filter((x) => typeof x?.productId === 'string' && typeof x?.kolicina === 'number')
          .map((x) => ({ productId: x.productId, kolicina: Math.max(1, Math.floor(x.kolicina)) }))
      );
    } catch {
      // ignore
    }
  }, []);

  React.useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const cartCount = React.useMemo(() => getCartCount(items), [items]);

  const totalRsd = React.useMemo(() => {
    return items.reduce((acc, it) => {
      const p = productsById[it.productId];
      if (!p) return acc;
      return acc + p.cenaRsd * it.kolicina;
    }, 0);
  }, [items, productsById]);

  const openCart = React.useCallback(() => setIsCartOpen(true), []);
  const closeCart = React.useCallback(() => setIsCartOpen(false), []);

  const addToCart = React.useCallback((productId: string, kolicina: number = 1) => {
    setItems((prev) => {
      const product = productsById[productId];
      if (!product) return prev;
      const qty = Math.max(1, Math.floor(kolicina));
      const idx = prev.findIndex((x) => x.productId === productId);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], kolicina: next[idx].kolicina + qty };
        return next;
      }
      return [...prev, { productId, kolicina: qty }];
    });
  }, [productsById]);

  const setItemKolicina = React.useCallback((productId: string, kolicina: number) => {
    setItems((prev) => {
      const qty = Math.max(0, Math.floor(kolicina));
      if (qty === 0) return prev.filter((x) => x.productId !== productId);
      return prev.map((x) => (x.productId === productId ? { ...x, kolicina: qty } : x));
    });
  }, []);

  const removeFromCart = React.useCallback((productId: string) => {
    setItems((prev) => prev.filter((x) => x.productId !== productId));
  }, []);

  const clearCart = React.useCallback(() => setItems([]), []);

  const getProduct = React.useCallback(
    (productId: string) => productsById[productId],
    [productsById]
  );

  const value: CartContextValue = {
    items, cartCount, totalRsd, isCartOpen,
    openCart, closeCart, addToCart, setItemKolicina, removeFromCart, clearCart, getProduct
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error('useCart mora biti korišćen unutar CartProvider-a.');
  return ctx;
}
