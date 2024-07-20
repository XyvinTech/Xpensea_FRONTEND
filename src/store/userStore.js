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
    try {
      const newUser = await addUser(userData);
      set((state) => ({ users: [...state.users, newUser] }));
      toast.success(`staff added successfully`);
    } catch (error) {
      toast.error(error);
    }
  },
  fetchUserById: async (userId) => {
    const user = await getUser(userId);
    set({ user: user.data });
  },
  updateUsers: async (userId, newData) => {
    try {
      const updatedUser = await updateUser(userId, newData);
      set((state) => ({
        users: state.users.map((user) =>
          user._id === userId ? { ...user, ...updatedUser } : user
        ),
        user: updatedUser,
      }));
      toast.success(`staff updated successfully`);
    } catch (error) {
      toast.error(error);
    }
  },
  deleteUsers: async (userId) => {
    await deleteUser(userId);
  },
}));

export { useUserStore };
