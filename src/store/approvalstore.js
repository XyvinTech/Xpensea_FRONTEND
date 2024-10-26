import { create } from "zustand";
import {
  deleteApproval,
  financeDeduct,
  getApproval,
  getFinance,
  updateApproval,
  updateFinance,
} from "../api/approvalsapi";
const useApprovalStore = create((set) => ({
  approvals: [],
  approval: null,
  refresh: false,
  loading: false,
  finance: [],
  fetchApprovalById: async (approvalId) => {
    set({ loading: true });
    const approval = await getApproval(approvalId);
    set({ approval: approval.data });
    set({ loading: false });
  },

  deleteApprovals: async (approvalId) => {
    await deleteApproval(approvalId);
  },
  updateApprovals: async (approvalId, action, data) => {
    await updateApproval(approvalId, action, data);
  },
  fetchFinanceById: async (id) => {
    set({ loading: true });
    const financeid = await getFinance(id);
    set({ finance: financeid.data });
    set({ loading: false });
  },
  updateFinances: async (id, data) => {
    await updateFinance(id, data);
  },
  deductWallet: async (data) => {
    await financeDeduct(data);
  },
  setRefresh: () => set((state) => ({ refresh: !state.refresh })),
}));

export { useApprovalStore };
