import { create } from "zustand";
import { addEvent, deleteEvent, getEvent, updateEvent } from "../api/eventapi";

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
  updateEvents: async (eventId, newData) => {
    const updatedEvent = await updateEvent(eventId, newData);
    set((state) => ({
      events: state.events.map((event) =>
        event._id === eventId ? { ...event, ...updatedEvent } : event
      ),
      event: updatedEvent,
    }));
  },
  deleteEvents: async (eventId) => {
    await deleteEvent(eventId);
  },
}));

export { useEventStore };
