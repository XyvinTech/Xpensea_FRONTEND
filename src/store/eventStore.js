import { create } from "zustand";
import { addEvent, deleteEvent, getEvent } from "../api/eventapi";
const useEventStore = create((set) => ({
  events: [],
  event: null,
  addEvents: async (eventData) => {
    const newEvent = await addEvent(eventData);
    set((state) => ({ events: [...state.events, newEvent] }));
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
