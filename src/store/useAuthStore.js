import { create } from "zustand";

export const useAuthStore = create((set) => ({

    // isAuth: !!localStorage.getItem('token'),
    isAuth: true,
    loginAuth: (token) => {
        localStorage.setItem('token', token);
        set({ isAuth: true })
    },
    logoutAuth:()=>{
        localStorage.removeItem('token');
        set({ isAuth: false});
    }


}))