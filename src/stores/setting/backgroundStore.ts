// stores/setting/backgroundStore.ts
import { defineStore } from 'pinia';

export const useBackgroundStore = defineStore('background', {
  state: () => ({
    defaultBackground: 'https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/001.webp', // 默认背景图的URL
    userBackground: null as string | null,
  }),
  actions: {
    async fetchUserBackground() {
      try {
        // 假设这是从后端获取用户背景图的API调用
        const response = await fetch('/api/user/background');
        if (response.ok) {
          const imageUrl = await response.text();
          this.userBackground = imageUrl;
        }
      } catch (error) {
        console.error('未获取到用户背景, 使用默认背景。', error);
      }
    },
    setBackgroundUrl(url: string | null) {
      this.userBackground = url;
    },
    getBackgroundUrl() {
      return this.userBackground || this.defaultBackground;
    }
  }
});
