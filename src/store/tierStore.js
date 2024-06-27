import { create } from "zustand";
import { addTier } from "../api/tierapi";

const useTierStore = create((set) => ({
  tiers: [],
  addTiers: async (tierData) => {
    const newTier = await addTier(tierData);
    set((state) => ({ tiers: [...state.tiers, newTier] }));
  },

}));

export { useTierStore };
