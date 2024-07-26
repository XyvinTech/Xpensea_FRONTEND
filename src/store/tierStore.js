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
    const newTier = await addTier(tierData);
    set((state) => ({ tiers: [...state.tiers, newTier] }));
    toast.success(newTier.message);
  },
  fetchTierById: async (tierId) => {
    const Tier = await getTier(tierId);
    set({ tier: Tier.data });
  },
  updateTiers: async (tierId, newData) => {
    const updatedTier = await updateTier(tierId, newData);
    set((state) => ({
      tiers: state.tiers.map((tier) =>
        tier._id === tierId ? { ...tier, ...updatedTier } : tier
      ),
      tier: updatedTier,
    }));
  },
  deleteTiers: async (tierId) => {
    await deleteTier(tierId);
  },
}));

export { useTierStore };
