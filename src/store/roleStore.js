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
    const newRole = await addRole(roleData);
    set((state) => ({ roles: [...state.roles, newRole] }));
  },
  fetchRoleById: async (roleId) => {
    const role = await getRole(roleId);
    set({ role: role.data });
  },
  updateRoles: async (roleId, newData) => {
    const updatedRole = await updateRole(roleId, newData);
    set((state) => ({
      roles: state.roles.map((role) =>
        role._id === roleId ? { ...role, ...updatedRole } : role
      ),
      role: updatedRole,
    }));
  },
  deleteRoles: async (roleId) => {
    await deleteRole(roleId);
  },
}));

export { useRoleStore };
