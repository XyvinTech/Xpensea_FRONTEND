import { create } from "zustand";
import { addPolicy } from "../api/policyapi";

const usePolicyStore = create((set) => ({
  policies: [],
  //   event: null,
  addPolicies: async (data) => {
    const newData = await addPolicy(data);
    set((state) => ({ policies: [...state.policies, newData] }));
  },
  //   fetchEventById: async (eventId) => {
  //     const event = await getEvent(eventId);
  //     set({ event: event.data });
  //   },
  //   updateEvents: async (eventId, newData) => {
  //     const updatedEvent = await updateEvent(eventId, newData);
  //     set((state) => ({
  //       events: state.events.map((event) =>
  //         event._id === eventId ? { ...event, ...updatedEvent } : event
  //       ),
  //       event: updatedEvent,
  //     }));
  //   },
}));

export { usePolicyStore };
