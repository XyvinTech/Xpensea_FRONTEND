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
  finance: [],
  fetchApprovalById: async (approvalId) => {
    const approval = await getApproval(approvalId);
    set({ approval: approval.data });
  },
  setRefresh: () => set((state) => ({ refresh: !state.refresh })),
  deleteApprovals: async (approvalId) => {
    await deleteApproval(approvalId);
  },
  updateApprovals: async (approvalId, action, data) => {
    const updatedApproval = await updateApproval(approvalId, action, data);
    set((state) => ({
      ...state,
      approval: updatedApproval.data,
    }));
  },
  fetchFinanceById: async (id) => {
    const financeid = await getFinance(id);
    set({ finance: financeid.data });
  },
  updateFinances: async (id, data) => {
    const updated = await updateFinance(id, data);
    set((state) => ({
      ...state,
      finance: updated.data,
    }));
  },
  deductWallet: async (data) => {
    await financeDeduct(data);
  },
}));

export { useApprovalStore };
