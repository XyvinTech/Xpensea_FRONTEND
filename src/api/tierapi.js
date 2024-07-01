import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addTier = handleAsync(async (data) => {
  const response = await axiosInstance.post("/admin/tier", data);

  return response.data;
});
export const getTier = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/tier/${id}`);

  return response.data;
});
export const updateTier = handleAsync(async (tierId,data) => {
  const response = await axiosInstance.put(`/admin/tier/${tierId}`,data);
  return response.data;
});
export const deleteTier = handleAsync(async (tierId) => {
  const response = await axiosInstance.delete(`/admin/tier/${tierId}`);
  return response.data;
});
