import { toast } from "react-toastify";
import axiosInstance from "./axiosintercepter";

export const addPolicy = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/policy", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getPolicy = async (id) => {
  try {
    const response = await axiosInstance.get(`/admin/policy/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};
export const updatePolicy = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/admin/policy/${id}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
