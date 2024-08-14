import { toast } from "react-toastify";
import axiosInstance from "./axiosintercepter";
import { handleAsync } from "../utils/handleAsync";

export const addPolicy = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/policy", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const getPolicy = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/policy/${id}`);

  return response.data;
});
export const updatePolicy = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/admin/policy/${id}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
