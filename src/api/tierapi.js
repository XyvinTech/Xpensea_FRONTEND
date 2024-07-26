import { toast } from "react-toastify";
import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addTier = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/tier", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const getTier = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/tier/${id}`);

  return response.data;
});
export const updateTier = async (tierId, data) => {
  try {
    const response = await axiosInstance.put(`/admin/tier/${tierId}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const deleteTier = handleAsync(async (tierId) => {
  const response = await axiosInstance.delete(`/admin/tier/${tierId}`);
  return response.data;
});
