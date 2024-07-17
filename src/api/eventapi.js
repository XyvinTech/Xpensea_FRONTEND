
import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addEvent = handleAsync(async (data) => {
  const response = await axiosInstance.post("/admin/event", data);
  return response.data;
});
export const getEvent = handleAsync(async (id) => {
  const response = await axiosInstance.get(`/admin/events/${id}`);

  return response.data;
});
export const deleteEvent = handleAsync(async (eventId) => {
  const response = await axiosInstance.delete(`/admin/event/${eventId}`);
  return response.data;
});