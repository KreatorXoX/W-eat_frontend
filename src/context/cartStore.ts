import { create } from "zustand";

interface CartState {
  items: string[];
  addItems: (item: string) => void;
}

export const useCart = create<CartState>()((set) => ({
  items: [],
  addItems: (item) => set((state) => ({ items: [...state.items, item] })),
}));
