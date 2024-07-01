import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addRole = handleAsync(async (data) => {
  const response = await axiosInstance.post("/admin/role", data);
  console.log(response);
  return response.data;
});
export const getRole = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/role/${id}`);

  return response.data;
});
export const updateRole = handleAsync(async (roleId,data) => {
  const response = await axiosInstance.put(`/admin/role/${roleId}`,data);
  return response.data;
});
export const deleteRole = handleAsync(async (roleId) => {
    const response = await axiosInstance.delete(`/admin/role/${roleId}`);
    return response.data;
  });