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
    try {
      const newRole = await addRole(roleData);
      set((state) => ({ roles: [...state.roles, newRole] }));
      toast.success(`Role added successfully`);
    } catch (error) {
      toast.error(error);
    }
  },
  fetchRoleById: async (roleId) => {
    const role = await getRole(roleId);
    set({ role: role.data });
  },
  updateRoles: async (roleId, newData) => {
    try {
      const updatedRole = await updateRole(roleId, newData);
      set((state) => ({
        roles: state.roles.map((role) =>
          role._id === roleId ? { ...role, ...updatedRole } : role
        ),
        role: updatedRole,
      }));
      toast.success(`Role updated successfully`);
    } catch (error) {
      toast.error(error);
    }
  },
  deleteRoles: async (roleId) => {
    await deleteRole(roleId);
  },
}));

export { useRoleStore };
