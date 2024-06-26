import axios from "axios";
import axiosInstance from "./axiosintercepter";
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
