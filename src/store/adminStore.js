import { create } from "zustand";
import {
  addAdmin,
  deleteAdmin,
  getAdmin,
  getDashboard,
  getSingleAdmin,
  updateAdmin,
} from "../api/adminapi";

const useAdminStore = create((set) => ({
  admin: [],
  dashboard: [],
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
    await addAdmin(adminData);
  },
  fetchAdminById: async (adminId) => {
    const Admin = await getSingleAdmin(adminId);
    set({ admins: Admin.data });
  },
  updateAdmins: async (adminId, newData) => {
    await updateAdmin(adminId, newData);
  },
  deleteAdmins: async (adminId) => {
    await deleteAdmin(adminId);
  },
  getDashboardData: async () => {
    const fetch = await getDashboard();
    set({ dashboard: fetch.data });
  },
}));

export { useAdminStore };
