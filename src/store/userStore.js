import { create } from "zustand";
import { addUser, deleteUser, getUser, updateUser } from "../api/userapi";
import { toast } from "react-toastify";

const useUserStore = create((set) => ({
  users: [],
  user: null,
  isUpdate: false,
  loading: false,
  updateChange: (isUpdate) => {
    set({ isUpdate: !isUpdate });
  },
  addUsers: async (userData) => {
    await addUser(userData);
  },
  fetchUserById: async (userId) => {
    set({ loading: true });
    const user = await getUser(userId);
    set({ user: user.data });
    set({ loading: false });
  },
  updateUsers: async (userId, newData) => {
    await updateUser(userId, newData);
  },
  deleteUsers: async (userId) => {
    await deleteUser(userId);
  },
}));

export { useUserStore };
