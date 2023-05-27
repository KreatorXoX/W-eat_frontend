import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StripeState {
  sessionId: string | null;
  orderId: string;

  setSession: (sessionId: string | null, orderId: string) => void;

  clearSession: () => void;
}

export const useStripeStore = create<StripeState>()(
  persist(
    (set) => ({
      sessionId: null,
      orderId: "",

      setSession: (sId, oId) => {
        set({ sessionId: sId, orderId: oId });
      },

      clearSession: () => set({ sessionId: null, orderId: "" }),
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
