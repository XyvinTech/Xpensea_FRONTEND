import { create } from "zustand";
import { addRole, deleteRole, getRole, updateRole } from "../api/roleapi";
import { toast } from "react-toastify";

const useRoleStore = create((set) => ({
  roles: [],
  role: null,
  isUpdate: false,
  updateChange: (isUpdate) => {
    set({ isUpdate: !isUpdate });
  },
  addRoles: async (roleData) => {
    await addRole(roleData);
  },
  fetchRoleById: async (roleId) => {
    const role = await getRole(roleId);
    set({ role: role.data });
  },
  updateRoles: async (roleId, newData) => {
    await updateRole(roleId, newData);
  },
  deleteRoles: async (roleId) => {
    await deleteRole(roleId);
  },
}));

export { useRoleStore };
