import { toast } from "react-toastify";
import axiosInstance from "./axiosintercepter";

export const addPolicy = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/policy", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
