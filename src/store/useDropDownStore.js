import { create } from "zustand";
import { fetchApprover, fetchList, fetchUser } from "../api/listapi";

const useDropDownStore = create((set) => ({
  tiers: [],
  staffs: [],
  roles: [],
  approvers: [],
  fetchTiers: async () => {
    const filter = { type: "tiers" };
    const response = await fetchList(filter);
    set({ tiers: response?.data || [] });
  },

  fetchStaffs: async (filter) => {
    const response = await fetchUser(filter);
    set({ staffs: response?.data || [] });
  },
  fetchRoles: async () => {
    const filter = { type: "roles" };
    const response = await fetchList(filter);
    set({ roles: response?.data || [] });
  },
  fetchApprovers: async () => {
    const response = await fetchApprover();
    set({ approvers: response?.data || [] });
  },
}));

export { useDropDownStore };
