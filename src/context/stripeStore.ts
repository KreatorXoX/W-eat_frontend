import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StripeState {
  sessionId: string | null;
  order: any;
  setSession: (id: string) => void;
  setOrder: (order: any) => void;
  clearSession: () => void;
}

export const useStripeStore = create<StripeState>()(
  persist(
    (set) => ({
      sessionId: null,
      order: null,
      setSession: (id) => {
        set({ sessionId: id });
      },
      setOrder: (newOrder) => {
        set({ order: newOrder });
      },
      clearSession: () => set({ sessionId: null, order: null }),
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
