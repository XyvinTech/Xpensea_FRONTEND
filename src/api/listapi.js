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
