import { create } from "zustand";
import { fetchList } from "../api/listapi";

const useListStore = create((set) => ({
  lists: [],
  fetchLists: async (filter) => {
    // Clear the lists array before fetching new data
    set({ lists: [] });
    // Fetch new data
    const allData = await fetchList(filter);
    // Update the lists state with the fetched data
    set({ lists: allData?.data || [] });
  },
}));

export { useListStore };