import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (item) => {
    const existing = get().items.find((p) => p.id === item.id);
    if (existing) {
      set({
        items: get().items.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      });
    } else {
      set({
        items: [...get().items, { ...item, quantity: 1 }],
      });
    }
  },

  decreaseQuantity: (id) => {
    const items = get().items.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    set({ items });
  },

  removeItem: (id) => {
    set({ items: get().items.filter((item) => item.id !== id) });
  },

  clearCart: () => set({ items: [] }),

  toggleCart: () => set({ isOpen: !get().isOpen }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
}));
