import { create } from "zustand";
import {
  addAdmin,
  deleteAdmin,
  getAdmin,
  getSingleAdmin,
  updateAdmin,
} from "../api/adminapi";

const useAdminStore = create((set) => ({
  admin: [],

  isChange: false,
  updateChange: (isChange) => {
    set({ isChange: !isChange });
  },
  admins: null,
  data: [],
  isUpdate: false,
  updateChange: (isUpdate) => {
    set({ isUpdate: !isUpdate });
  },
  getAdmin: async () => {
    const fetch = await getAdmin();
    set({ admin: fetch.data });
  },
  addAdmins: async (adminData) => {
    const newAdmin = await addAdmin(adminData);
    set((state) => ({ data: [...state.data, newAdmin] }));
  },
  fetchAdminById: async (adminId) => {
    const Admin = await getSingleAdmin(adminId);
    set({ admins: Admin.data });
  },
  updateAdmins: async (adminId, newData) => {
    const updatedAdmin = await updateAdmin(adminId, newData);
    set((state) => ({
      data: state.data.map((item) =>
        item.id === adminId ? { ...item, ...updatedAdmin } : item
      ),
      admins: updatedAdmin,
    }));
  },
  deleteAdmins: async (adminId) => {
    await deleteAdmin(adminId);
  },
}));

export { useAdminStore };
