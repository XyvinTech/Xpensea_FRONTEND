import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const getApproval = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/approval/${id}`);
  return response.data;
});
export const updateApproval = handleAsync(async (Id, action, data) => {
  const response = await axiosInstance.put(
    `/admin/approval/${Id}/${action}`, data,
   
  );
  return response.data;
});
export const deleteApproval = handleAsync(async (approvalId) => {
  const response = await axiosInstance.delete(`/admin/approval/${approvalId}`);
  return response.data;
});
