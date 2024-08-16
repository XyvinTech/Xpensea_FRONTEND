import { create } from "zustand";
import {
  addTransaction,
  getTransaction,
  getWallet,
  updateTransaction,
} from "../api/transactionapi";

const useTransactionStore = create((set) => ({
  transactions: [],
  transaction: null,
  addTransactions: async (data) => {
    const newData = await addTransaction(data);
    set((state) => ({ transactions: [...state.transactions, newData] }));
  },
  fetchTransactionById: async (id) => {
    const newData = await getTransaction(id);
    set({ transaction: newData.data });
  },
  updateTransactions: async (id, newData) => {
    const updatedData = await updateTransaction(id, newData);
    set((state) => ({
      transactions: state.transactions.map((e) =>
        e._id === id ? { ...e, ...updatedData } : e
      ),
      e: updatedData,
    }));
  },
  fetchWallet: async (id) => {
    const newData = await getWallet(id);
    set({ transaction: newData.data });
  },
}));

export { useTransactionStore };
