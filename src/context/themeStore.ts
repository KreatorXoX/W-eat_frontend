import { create } from "zustand";

interface ThemeState {
  dark: boolean;
  toggle: () => void;
}

export const useTheme = create<ThemeState>()((set) => ({
  dark: false,
  toggle: () => set((state) => ({ dark: !state.dark })),
}));
