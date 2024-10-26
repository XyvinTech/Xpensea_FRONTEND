import { create } from "zustand";
import { addEvent, deleteEvent, getEvent, updateEvent } from "../api/eventapi";

const useEventStore = create((set) => ({
  events: [],
  event: null,
  addEvents: async (eventData) => {
    await addEvent(eventData);
  },
  fetchEventById: async (eventId) => {
    const event = await getEvent(eventId);
    set({ event: event.data });
  },
  updateEvents: async (eventId, newData) => {
    await updateEvent(eventId, newData);
  },
  deleteEvents: async (eventId) => {
    await deleteEvent(eventId);
  },
}));

export { useEventStore };
