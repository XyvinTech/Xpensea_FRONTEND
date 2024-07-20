import { create } from "zustand";
import {
  addAdmin,
  deleteAdmin,
  getAdmin,
  getSingleAdmin,
  updateAdmin,
} from "../api/adminapi";
import { toast } from "react-toastify";

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
    try {
      const newAdmin = await addAdmin(adminData);
      set((state) => ({ data: [...state.data, newAdmin] }));
      toast.success(`Admin added successfully`);
    } catch (error) {
      toast.error(error);
    }
  },
  fetchAdminById: async (adminId) => {
    const Admin = await getSingleAdmin(adminId);
    set({ admins: Admin.data });
  },
  updateAdmins: async (adminId, newData) => {
    try {
      const updatedAdmin = await updateAdmin(adminId, newData);
      set((state) => ({
        data: state.data.map((item) =>
          item.id === adminId ? { ...item, ...updatedAdmin } : item
        ),
        admins: updatedAdmin,
      }));
      toast.success(`Admin updated successfully`);
    } catch (error) {
      toast.error(error);
    }
  },
  deleteAdmins: async (adminId) => {
    await deleteAdmin(adminId);
  },
}));

export { useAdminStore };
