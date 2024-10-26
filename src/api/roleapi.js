import { toast } from "react-toastify";
import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addRole = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/role", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getRole = async (id) => {
  try {
    const response = await axiosInstance.get(`/admin/role/${id}`);

    return response.data;
  } catch (error) {
    return null;
  }
};

export const updateRole = async (roleId, data) => {
  try {
    const response = await axiosInstance.put(`/admin/role/${roleId}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const deleteRole = async (roleId) => {
  try {
    const response = await axiosInstance.delete(`/admin/role/${roleId}`);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
