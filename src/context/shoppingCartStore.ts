import { create } from 'zustand'

type CartItem = {
  id: string
  mainProduct: Item
  extras: { name: string; values: OptionSelect[] }[]
  quantity: number
  totalPrice: number
}

interface CartState {
  cart: CartItem[]
  addToCart: (cartItem: CartItem) => void
  removeFromCart: (id: string) => void
  replaceItem: (newItem: CartItem) => void
  getCartTotal: () => number
  clearCart: () => void
}

export const useShoppingCart = create<CartState>()((set, get) => ({
  cart: [],
  totalPrice: 0,
  addToCart: newCartItem => {
    const index = get().cart.findIndex(
      cartItem => cartItem.id === newCartItem.id
    )
    if (index !== -1) {
      // item already in cart, update the items quantity total price and extras
      // just in case they are changed.
      const updatedCartItems = [...get().cart]
      updatedCartItems[index].quantity += 1

      set({ cart: updatedCartItems })
    } else {
      // item not in cart, add to cart
      set(state => ({ cart: [...state.cart, newCartItem] }))
    }
  },

  removeFromCart: id => {
    const index = get().cart.findIndex(cartItem => cartItem.id === id)
    if (index !== -1) {
      // item already in cart, update quantity
      let updatedCartItems = [...get().cart]
      const itemQuantity = updatedCartItems[index].quantity - 1

      if (itemQuantity === 0) {
        updatedCartItems = updatedCartItems.filter(
          cartItem => cartItem.id !== id
        )
      } else {
        updatedCartItems[index].quantity = itemQuantity
        //  updatedCartItems[index].totalPrice -= updatedCartItems[index].totalPrice
      }

      set({ cart: updatedCartItems })
    }
  },
  replaceItem: newItem => {
    const index = get().cart.findIndex(cartItem => cartItem.id === newItem.id)
    console.log(index)
    if (index === -1) return
    const updatedCartItems = [...get().cart]
    updatedCartItems[index] = newItem

    set({ cart: updatedCartItems })
  },
  getCartTotal: () => {
    // get the cartTotal
    const cartTotal = get().cart.reduce(
      (total, cartItem) => total + cartItem.totalPrice * cartItem.quantity,
      0
    )
    return cartTotal
  },

  clearCart: () => {
    set({ cart: [] })
  }
}))
