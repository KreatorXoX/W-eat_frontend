import { create } from 'zustand'

type CheckoutFn = {
  whatToChange: string
  isValid: boolean
}
interface CheckoutState {
  canCheckout: boolean
  deliveryTime: string
  paymentMethod: string
  checkoutState: (fnParams: CheckoutFn) => void
}

export const useCheckout = create<CheckoutState>()(set => ({
  canCheckout: false,
  deliveryTime: '',
  paymentMethod: '',
  checkoutState: ({ whatToChange, isValid }: CheckoutFn) => {
    set(state => {
      let change
      if (whatToChange === 'deliveryTime') {
        change = 'deliveryTime'
      } else if (whatToChange === 'paymentMethod') {
        change = 'paymentMethod'
      }
      return {
        ...state,
        [whatToChange]: isValid
      }
    })
  }
}))
