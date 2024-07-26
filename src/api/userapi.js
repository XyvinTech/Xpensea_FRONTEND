import { toast } from "react-toastify";
import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addUser = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/user", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const getUser = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/user/${id}`);

  return response.data;
});

export const updateUser = async (userId, data) => {
  try {
    const response = await axiosInstance.put(`/admin/user/${userId}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const deleteUser = handleAsync(async (userId) => {
  const response = await axiosInstance.delete(`/admin/user/${userId}`);
  return response.data;
});
