import { create } from "zustand";

export type CartItem = {
  id: string;
  mainProduct: Item;
  extras: { name: string; values: OptionSelect[] }[];
  quantity: number;
  totalPrice: number;
  notes?: string;
};

interface CartState {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (id: string) => void;
  replaceItem: (newItem: CartItem) => void;
  getCartTotal: () => number;
  clearCart: () => void;
  addNote: (id: string, note: string) => void;
  removeNote: (id: string) => void;
}

export const useShoppingCart = create<CartState>()((set, get) => ({
  cart: [],
  totalPrice: 0,
  addToCart: (newCartItem) => {
    const index = get().cart.findIndex(
      (cartItem) => cartItem.id === newCartItem.id
    );
    if (index !== -1) {
      // item already in cart, update the items quantity total price and extras
      // just in case they are changed.
      const updatedCartItems = [...get().cart];
      updatedCartItems[index].quantity += 1;

      set({ cart: updatedCartItems });
    } else {
      // item not in cart, add to cart
      set((state) => ({ cart: [...state.cart, newCartItem] }));
    }
  },

  removeFromCart: (id) => {
    const index = get().cart.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1) {
      // item already in cart, update quantity
      let updatedCartItems = [...get().cart];
      const itemQuantity = updatedCartItems[index].quantity - 1;

      if (itemQuantity === 0) {
        updatedCartItems = updatedCartItems.filter(
          (cartItem) => cartItem.id !== id
        );
      } else {
        updatedCartItems[index].quantity = itemQuantity;
        //  updatedCartItems[index].totalPrice -= updatedCartItems[index].totalPrice
      }

      set({ cart: updatedCartItems });
    }
  },
  replaceItem: (newItem) => {
    const index = get().cart.findIndex(
      (cartItem) => cartItem.id === newItem.id
    );

    if (index === -1) return;

    // get the notes if there are any
    const updatedCartItems = [...get().cart];
    const notes = updatedCartItems[index].notes;

    if (notes) newItem.notes = notes;

    updatedCartItems[index] = newItem;

    set({ cart: updatedCartItems });
  },
  getCartTotal: () => {
    // get the cartTotal
    const cartTotal = get().cart.reduce(
      (total, cartItem) => total + cartItem.totalPrice * cartItem.quantity,
      0
    );
    return cartTotal;
  },

  clearCart: () => {
    set({ cart: [] });
  },
  addNote: (id, note) => {
    const index = get().cart.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1) {
      let updatedCartItems = [...get().cart];

      updatedCartItems[index].notes = note;

      console.log(updatedCartItems[index]);

      set({ cart: updatedCartItems });
    }
  },
  removeNote: (id) => {
    const index = get().cart.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1) {
      let updatedCartItems = [...get().cart];

      updatedCartItems[index].notes = undefined;

      set({ cart: updatedCartItems });
    }
  },
}));
