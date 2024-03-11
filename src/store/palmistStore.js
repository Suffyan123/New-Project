import { create } from "zustand";

export const usePalmistStore = create((set) => ({
  palmist: null,
  updatePalmist: (user) => set({ palmist: user }),
}));
