import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const fetchList = handleAsync(async (filter) => {
  const response = await axiosInstance.get("/admin/list", {
    params: filter,
  });
  return response.data;
});

export const getReport = handleAsync(async (id, filter) => {
  const response = await axiosInstance.get(`/admin/user/reports/${id}`, {
    params: filter,
  });
  return response.data;
});
export const getWallet = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/wallet/${id}`);
  return response.data;
});
export const fetchUser = handleAsync(async (filter) => {
  const response = await axiosInstance.get(`/admin/users/filtered`, {
    params: filter,
  });

  return response.data;
});
export const fetchApprover = handleAsync(async () => {
  const response = await axiosInstance.get(`/admin/approvers`);

  return response.data;
});
