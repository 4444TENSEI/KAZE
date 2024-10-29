// stores/backgroundStore.ts
import { defineStore } from 'pinia';

export const useBackgroundStore = defineStore('background', {
  state: () => ({
    backgroundUrls: [
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/001.webp",
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/002.webp",
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/003.webp",
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/004.webp",
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/005.webp",
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/006.webp",
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/007.webp",
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/008.webp",
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/009.webp",
      "https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/010.webp",
      // ...其他URLs
    ],
    randomBackgroundUrl: '',
  }),
  actions: {
    setRandomBackground() {
      const randomIndex = Math.floor(Math.random() * this.backgroundUrls.length);
      this.randomBackgroundUrl = this.backgroundUrls[randomIndex];
    },
    setBackgroundUrl(url: string) {
      this.randomBackgroundUrl = url;
    },
  },
  getters: {
    getCurrentBackgroundUrl: (state) => state.randomBackgroundUrl,
  },
});
