import axiosInstance from "./axiosintercepter";

export const fetchList = async (filter) => {
  try {
    const response = await axiosInstance.get("/admin/list", {
      params: filter,
    });
    console.log("resonse",response)
    return response.data;
  } catch (error) {
    console.error("Error caught:", error);
  }
};
