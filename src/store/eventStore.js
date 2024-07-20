import { create } from "zustand";
import { addEvent, deleteEvent, getEvent } from "../api/eventapi";
import { toast } from "react-toastify";
const useEventStore = create((set) => ({
  events: [],
  event: null,
  addEvents: async (eventData) => {
    try {
    const newEvent = await addEvent(eventData);
    set((state) => ({ events: [...state.events, newEvent] }));
    toast.success(`Event added successfully`);
  } catch (error) {
    toast.error(error);
  }
  },
  fetchEventById: async (eventId) => {
    const event = await getEvent(eventId);
    set({ event: event.data });
  },
  deleteEvents: async (eventId) => {
    await deleteEvent(eventId);
  },
}));

export { useEventStore };
