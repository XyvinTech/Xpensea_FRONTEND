import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const fetchList = async (filter) => {
  try {
    const response = await axiosInstance.get("/admin/list", {
      params: filter,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};
export const fetchTransaction = async (filter) => {
  try {
    const response = await axiosInstance.get("/admin/transaction", {
      params: filter,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getReport = async (id, filter) => {
  try {
    const response = await axiosInstance.get(`/admin/report/${id}`, {
      params: filter,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const fetchUser = async (filter) => {
  try {
    const response = await axiosInstance.get(`/admin/users/filtered`, {
      params: filter,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};
export const fetchApprover = async () => {
  try {
    const response = await axiosInstance.get(`/admin/approvers`);
    return response.data;
  } catch (error) {
    return null;
  }
};
