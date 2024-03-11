import { create } from "zustand";

export const useUserStore = create((set) => ({
  User: null,
  updateUser: (user) => set({ User: user }),
}));
