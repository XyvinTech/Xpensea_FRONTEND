import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addUser = handleAsync(async (data) => {
  const response = await axiosInstance.post("/admin/user", data);
  console.log(response);
  return response.data;
});
export const getUser = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/user/${id}`);

  return response.data;
});
export const updateUser = handleAsync(async (userId,data) => {
  const response = await axiosInstance.put(`/admin/user/${userId}`,data);
  return response.data;
});
export const deleteUser = handleAsync(async (userId) => {
    const response = await axiosInstance.delete(`/admin/user/${userId}`);
    return response.data;
  });