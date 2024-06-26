
import { handleAsync } from "../utils/handleAsync";
import axiosInstance from "./axiosintercepter";

export const addEvent = handleAsync(async (data) => {
  const response = await axiosInstance.post("/admin/event", data);
  console.log(response);
  return response.data;
});
export const deleteEvent = handleAsync(async (eventId) => {
  const response = await axiosInstance.delete(`/admin/event/${eventId}`);
  return response.data;
});