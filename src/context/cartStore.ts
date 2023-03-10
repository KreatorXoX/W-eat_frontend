import { create } from "zustand";

interface cartState {
  items: string[];
  addItems: (item: string) => void;
}

export const useCart = create<cartState>()((set) => ({
  items: [],
  addItems: (item) => set((state) => ({ items: [...state.items, item] })),
}));

type CartItem = {
  quantity: number;
  totalPrice: number;
} & Omit<Item, "category">;

interface CartState {
  cart: CartItem[];
  totalPrice: number;
  addToCart: (item: Omit<Item, "category">, quantity?: number) => void;
}

export const useCartStore = create<CartState>()((set, get) => ({
  cart: [],
  totalPrice: 0,
  addToCart: (item, quantity = 1) => {
    const index = get().cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      // item already in cart, update quantity
      const updatedCartItems = [...get().cart];
      updatedCartItems[index].quantity += quantity;
      updatedCartItems[index].totalPrice +=
        quantity * updatedCartItems[index].price;
      set({ cart: updatedCartItems });
    } else {
      // item not in cart, add to cart

      const newCartItem: CartItem = {
        ...item,
        quantity,
        totalPrice: item.price,
      };
      set((state) => ({ cart: [...state.cart, newCartItem] }));
    }

    // update itemCount and cartTotal

    const cartTotal = get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    set({ totalPrice: cartTotal });
  },

  clearCart: () => {
    set({ cart: [], totalPrice: 0 });
  },
}));
