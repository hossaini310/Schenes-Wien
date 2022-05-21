import { defineStore } from 'pinia';
// import events from '@/assets/events.json';
import a2z from '@/assets/data/a2z.json';
import events from '@/assets/data/events.json';

export const useSchenesStore = defineStore('schenesStore', {
  state: () => ({
    a2z,
    events,
  }),
});
