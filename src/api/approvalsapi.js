import { toast } from "react-toastify";
import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const getApproval = async (id) => {
  try {
    const response = await axiosInstance.get(`/admin/approval/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const updateApproval = async (Id, action, data) => {
  try {
    const response = await axiosInstance.put(
      `/admin/approval/${Id}/${action}`,
      data
    );
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const deleteApproval = handleAsync(async (approvalId) => {
  const response = await axiosInstance.delete(`/admin/approval/${approvalId}`);
  return response.data;
});
export const getFinance = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/finance/${id}`);
  return response.data;
});
export const updateFinance = async (Id, data) => {
  try {
    const response = await axiosInstance.put(`/admin/reimburse/${Id}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const financeDeduct = async (data) => {
  try {
    const response = await axiosInstance.post(`/admin/deduct`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
