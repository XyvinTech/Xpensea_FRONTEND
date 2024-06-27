import axiosInstance from "./axiosintercepter";

export const addTier = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/tier", data);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error caught:", error);
  }
};
