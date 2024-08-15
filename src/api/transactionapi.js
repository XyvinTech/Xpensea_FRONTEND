import { toast } from "react-toastify";
import axiosInstance from "./axiosintercepter";
import { handleAsync } from "../utils/handleAsync";

export const addTransaction = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/transaction", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const getTransaction = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/transaction/${id}`);

  return response.data;
});
export const updateTransaction = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/admin/transaction/${id}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
