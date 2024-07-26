import { toast } from "react-toastify";
import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addRole = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/role", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const getRole = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/role/${id}`);

  return response.data;
});
export const updateRole = async (roleId, data) => {
  try {
    const response = await axiosInstance.put(`/admin/role/${roleId}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const deleteRole = handleAsync(async (roleId) => {
  const response = await axiosInstance.delete(`/admin/role/${roleId}`);
  return response.data;
});
