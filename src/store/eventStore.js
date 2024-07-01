import { create } from "zustand";
import { addEvent, deleteEvent } from "../api/eventapi";
const useEventStore = create((set) => ({
  events: [],
  addEvents: async (eventData) => {
    const newEvent = await addEvent(eventData);
    set((state) => ({ events: [...state.events, newEvent] }));
  },
  deleteEvents: async (eventId) => {
    await deleteEvent(eventId);
  },
}));

export { useEventStore };
