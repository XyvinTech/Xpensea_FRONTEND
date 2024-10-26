import { create } from "zustand";
import { addTier, deleteTier, getTier, updateTier } from "../api/tierapi";
import { toast } from "react-toastify";

const useTierStore = create((set) => ({
  tiers: [],
  tier: null,
  isUpdate: false,
  updateChange: (isUpdate) => {
    set({ isUpdate: !isUpdate });
  },
  addTiers: async (tierData) => {
     await addTier(tierData);
  },
  fetchTierById: async (tierId) => {
    const Tier = await getTier(tierId);
    set({ tier: Tier.data });
  },
  updateTiers: async (tierId, newData) => {
    await updateTier(tierId, newData);
  },
  deleteTiers: async (tierId) => {
    await deleteTier(tierId);
  },
}));

export { useTierStore };
