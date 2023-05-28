import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CheckoutState {
  orderId: string | null;
  setOrderId: (orderId: string) => void;
  clearStore: () => void;
}

export const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set) => ({
      orderId: null,

      setOrderId: (oId) => {
        set({ orderId: oId });
      },

      clearStore: () => set({ orderId: null }),
    }),
    {
      name: "checkout-info",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
