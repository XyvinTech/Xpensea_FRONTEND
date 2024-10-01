import { create } from "zustand";
import { fetchList, fetchTransaction, getReport } from "../api/listapi";

const useListStore = create((set, get) => ({
  lists: [],
  totalCount: 0,
  rowPerSize: 10,
  pageNo: 1,
  pageInc: () => {
    const { pageNo, totalCount, rowPerSize } = get();
    const totalPages = Math.ceil(totalCount / rowPerSize);

    if (pageNo < totalPages) {
      set({ pageNo: pageNo + 1 });
    }
  },
  pageDec: () => {
    const { pageNo } = get();
    if (pageNo > 1) {
      set({ pageNo: pageNo - 1 });
    }
  },
  rowChange: (value) => {
    set({ rowPerSize: value });
  },
  fetchLists: async (filter) => {
    set({ lists: [] });

    const allData = await fetchList(filter);
    set({ lists: allData?.data || [] });
    set({ totalCount: allData?.totalCount || 0 });
  },
  fetchWallet: async (filter) => {
    set({ lists: [] });

    const allData = await fetchTransaction(filter);
    set({ lists: allData?.data || [] });
    set({ totalCount: allData?.totalCount || 0 });
  },
  fetchReportById: async (userId, filter) => {
    set({ lists: [] });
    const report = await getReport(userId, filter);
    set({ lists: report.data });
  },

}));

export { useListStore };
