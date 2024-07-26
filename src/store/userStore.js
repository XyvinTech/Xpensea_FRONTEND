import { create } from "zustand";
import { addUser, deleteUser, getUser, updateUser } from "../api/userapi";
import { toast } from "react-toastify";

const useUserStore = create((set) => ({
  users: [],
  user: null,
  isUpdate: false,
  updateChange: (isUpdate) => {
    set({ isUpdate: !isUpdate });
  },
  addUsers: async (userData) => {
    const newUser = await addUser(userData);
    set((state) => ({ users: [...state.users, newUser] }));
  },
  fetchUserById: async (userId) => {
    const user = await getUser(userId);
    set({ user: user.data });
  },
  updateUsers: async (userId, newData) => {
    const updatedUser = await updateUser(userId, newData);
    set((state) => ({
      users: state.users.map((user) =>
        user._id === userId ? { ...user, ...updatedUser } : user
      ),
      user: updatedUser,
    }));
  },
  deleteUsers: async (userId) => {
    await deleteUser(userId);
  },
}));

export { useUserStore };
