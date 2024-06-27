import { create } from "zustand";
import { getAdmin } from "../api/adminapi";


const useAdminStore = create((set) => ({
    admin: [],
    isChange:false,
    updateChange:(isChange)=>{
      set({isChange:!isChange})
    },
    getAdmin:async()=>{
        const fetch = await getAdmin();
        set({ admin: fetch.data });
      },
}));

export { useAdminStore }
