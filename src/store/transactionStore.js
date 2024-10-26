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
    await addTransaction(data);
  },
  fetchTransactionById: async (id) => {
    const newData = await getTransaction(id);
    set({ transaction: newData.data });
  },
  updateTransactions: async (id, newData) => {
    await updateTransaction(id, newData);
  },
  fetchWallet: async (id) => {
    const newData = await getWallet(id);
    set({ transaction: newData.data });
  },
}));

export { useTransactionStore };
