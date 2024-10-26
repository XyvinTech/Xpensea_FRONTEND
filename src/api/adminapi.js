import axios from "axios";
import axiosInstance from "./axiosintercepter";
import { handleAsync } from "../utils/handleAsync";
import { toast } from "react-toastify";
const baseURL =
  "https://xpensea--backend-393541516579.asia-south1.run.app/api/v1/";
export const getLogin = async (datas) => {
  try {
    const response = await axios.post(`${baseURL}admin/login`, datas);

    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const getAdmin = async () => {
  try {
    const response = await axiosInstance.get("/admin");
    return response.data;
  } catch (error) {
    console.error("Error caught:", error);
  }
};
export const addAdmin = async (data) => {
  try {
    const response = await axiosInstance.post("/admin", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getSingleAdmin = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/admin/${id}`);

  return response.data;
});
export const updateAdmin = async (adminId, data) => {
  try {
    const response = await axiosInstance.put(`/admin/admin/${adminId}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const deleteAdmin = async (adminId) => {
  try {
    const response = await axiosInstance.delete(`/admin/admin/${adminId}`);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getDashboard = async () => {
  try {
    const response = await axiosInstance.get("/admin/dashboard");
    return response.data;
  } catch (error) {
    console.error("Error caught:", error);
  }
};
