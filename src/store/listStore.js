import { create } from "zustand";
import { fetchList } from "../api/listapi";
const useListStore = create((set) => ({
    lists: [],
    fetchLists: async (filter) => {
      const allData = await fetchList(filter);
      set({ lists: allData?.data });
    },
  
   
  }));
  
  export { useListStore };