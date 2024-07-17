import { create } from "zustand";
import { deleteApproval, getApproval } from "../api/approvalsapi";
const useApprovalStore = create((set) => ({
  approvals: [],
  approval: null,
  fetchApprovalById: async (approvalId) => {
    const approval = await getApproval(approvalId);
    set({ approval: approval.data });
  },
  deleteApprovals: async (approvalId) => {
    await deleteApproval(approvalId);
  },
}));

export { useApprovalStore };
