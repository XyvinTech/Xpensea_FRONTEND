import { create } from "zustand";
import {
  deleteApproval,
  getApproval,
  updateApproval,
} from "../api/approvalsapi";
import { toast } from "react-toastify";
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
  updateApprovals: async (approvalId, action, data) => {
    try {
      const updatedApproval = await updateApproval(approvalId, action, data);
      set((state) => ({
        ...state,
        approval: updatedApproval.data,
      }));
      toast.success(`Approval ${action}d successfully`);
    } catch (error) {
      toast.error(`Make all expenses mark as authentic`);
    }
  },
}));

export { useApprovalStore };
