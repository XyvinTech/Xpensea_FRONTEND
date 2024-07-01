import axios from "axios";
import axiosInstance from "./axiosintercepter";
import { handleAsync } from "../utils/handleAsync";
const baseURL = "https://dev-api.xpensea.com/api/v1/";
export const getLogin = async (datas) => {
  try {
    const response = await axios.post(`${baseURL}admin/login`, datas);

    console.log("data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error caught:", error);
  }
};

export const getAdmin = async () => {
  try {
    const response = await axiosInstance.get("/admin");
    console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.error("Error caught:", error);
  }
};
export const addAdmin = handleAsync(async (data) => {
  const response = await axiosInstance.post("/admin", data);
  console.log(response);
  return response.data;
});
export const getSingleAdmin = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/admin/${id}`);

  return response.data;
});
export const updateAdmin = handleAsync(async (adminId,data) => {
  const response = await axiosInstance.put(`/admin/admin/${adminId}`,data);
  return response.data;
});
export const deleteAdmin = handleAsync(async (adminId) => {
  const response = await axiosInstance.delete(`/admin/admin/${adminId}`);
  return response.data;
});