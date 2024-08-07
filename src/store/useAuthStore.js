import { create } from "zustand";

export const useAuthStore = create((set) => ({

    // isAuth: !!localStorage.getItem('token'),
    isAuth: true,
    logoutAuth: (navigate) => {
        localStorage.removeItem('token');
        set({ isAuth: false });
        navigate('/');
      }


}))