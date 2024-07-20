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
    try {
      const newTier = await addTier(tierData);
      set((state) => ({ tiers: [...state.tiers, newTier] }));
      toast.success(`Tier added successfully`);
    } catch (error) {
      toast.error(error);
    }
  },
  fetchTierById: async (tierId) => {
    const Tier = await getTier(tierId);
    set({ tier: Tier.data });
  },
  updateTiers: async (tierId, newData) => {
    try {
      const updatedTier = await updateTier(tierId, newData);
      set((state) => ({
        tiers: state.tiers.map((tier) =>
          tier._id === tierId ? { ...tier, ...updatedTier } : tier
        ),
        tier: updatedTier,
      }));
      toast.success(`Tier Updated successfully`);
    } catch (error) {
      toast.error(error);
    }
  },
  deleteTiers: async (tierId) => {
    await deleteTier(tierId);
  },
}));

export { useTierStore };
