<template>
  <v-app>
    <v-main
      class="d-flex pa-0 ma-0"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import { useBackgroundStore } from "@/stores/setting/backgroundStore";

const backgroundStore = useBackgroundStore();
const backgroundUrl = computed(() => backgroundStore.getBackgroundUrl());
onMounted(async () => {
  // 在组件挂载后尝试获取用户背景图
  if (!backgroundStore.userBackground) {
    await backgroundStore.fetchUserBackground();
  }
});
</script>
