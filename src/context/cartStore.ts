import { create } from "zustand";

type CartItem = {
  quantity: number;
  totalPrice: number;
} & Item;

interface CartState {
  cart: CartItem[];
  totalPrice: number;
  addToCart: (item: Item, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
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

    // update the cartTotal

    const cartTotal = get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    set({ totalPrice: cartTotal });
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
        updatedCartItems[index].totalPrice -= updatedCartItems[index].price;
      }

      set({ cart: updatedCartItems });

      // update the cartTotal
      const cartTotal = get().cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      set({ totalPrice: cartTotal });
    } else {
      // item not in cart, add to cart
      return;
    }
  },

  clearCart: () => {
    set({ cart: [], totalPrice: 0 });
  },
}));
