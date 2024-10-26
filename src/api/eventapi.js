import { toast } from "react-toastify";
import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addEvent = async (data) => {
  try {
    const response = await axiosInstance.post("/admin/event", data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getEvent = async (id) => {
  try {
    const response = await axiosInstance.get(`/admin/event/${id}`);

    return response.data;
  } catch (error) {
    return null;
  }
};
export const updateEvent = async (eventId, data) => {
  try {
    const response = await axiosInstance.put(`/admin/event/${eventId}`, data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const deleteEvent = async (eventId) => {
  try {
    const response = await axiosInstance.delete(`/admin/event/${eventId}`);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
