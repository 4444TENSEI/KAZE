// stores/drawerStore.ts
import { defineStore } from 'pinia';
export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    isDrawerOpen: false,
    lgAndUp: false,
  }),
  actions: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    setLgAndUp(value: boolean) {
      this.lgAndUp = value;
    },
  },
});