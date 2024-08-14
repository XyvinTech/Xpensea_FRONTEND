import { create } from "zustand";
import { addPolicy, getPolicy, updatePolicy } from "../api/policyapi";

const usePolicyStore = create((set) => ({
  policies: [],
  policy: null,
  addPolicies: async (data) => {
    const newData = await addPolicy(data);
    set((state) => ({ policies: [...state.policies, newData] }));
  },
  fetchPolicyById: async (id) => {
    const newData = await getPolicy(id);
    set({ policy: newData.data });
  },
  updatePolicies: async (id, newData) => {
    const updatedPolicy = await updatePolicy(id, newData);
    set((state) => ({
      policies: state.policies.map((e) =>
        e._id === id ? { ...e, ...updatedPolicy } : e
      ),
      e: updatedPolicy,
    }));
  },
}));

export { usePolicyStore };
