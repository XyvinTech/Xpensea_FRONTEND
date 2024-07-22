import { create } from "zustand";
import { addEvent, deleteEvent, getEvent, updateEvent } from "../api/eventapi";
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
  updateEvents: async (eventId, newData) => {
    try {
      const updatedEvent = await updateEvent(eventId, newData);
      set((state) => ({
        events: state.events.map((event) =>
          event._id === eventId ? { ...event, ...updatedEvent } : event
        ),
        event: updatedEvent,
      }));
      toast.success(`staff updated successfully`);
    } catch (error) {
      toast.error(error);
    }
  },
  deleteEvents: async (eventId) => {
    await deleteEvent(eventId);
  },
}));

export { useEventStore };
