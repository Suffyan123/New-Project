import { create } from "zustand";

export const useBuyerStore = create((set) => ({
  buyer: null,
  updateBuyer: (user) => set({ buyer: user }),
}));
