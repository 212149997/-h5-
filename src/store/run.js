import { defineStore } from 'pinia';

export const useRunStore = defineStore('run', {
  state: () => {
    return {
      km: 0,
      time: 0,
      pace: `0'00''`,
      kilocalorie: 0,
    };
  },
});
