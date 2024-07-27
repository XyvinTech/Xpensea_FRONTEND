import { toast } from "react-toastify";
import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addEvent = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/event", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const getEvent = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/event/${id}`);

  return response.data;
});
export const updateEvent = async (eventId, data) => {
  try {
    const response = await axiosInstance.put(`/admin/event/${eventId}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const deleteEvent = async (eventId) => {
  try {
    const response = await axiosInstance.delete(`/admin/event/${eventId}`);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
