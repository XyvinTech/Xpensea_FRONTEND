import { create } from "zustand";
import { addPolicy, getPolicy, updatePolicy } from "../api/policyapi";

const usePolicyStore = create((set) => ({
  policies: [],
  policy: null,
  addPolicies: async (data) => {
   await addPolicy(data);
  },
  fetchPolicyById: async (id) => {
    const newData = await getPolicy(id);
    set({ policy: newData.data });
  },
  updatePolicies: async (id, newData) => {
    await updatePolicy(id, newData);

  },
}));

export { usePolicyStore };
