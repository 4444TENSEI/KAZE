<template>
  <v-app>
    <v-main
      class="d-flex pa-0"
      :style="{ backgroundImage: `url(${randomBackgroundUrl})` }"
    >
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import { useBackgroundStore } from "@/stores/setting/randomBackgroundStore";
const backgroundStore = useBackgroundStore();
const randomBackgroundUrl = computed(
  () => backgroundStore.getCurrentBackgroundUrl
);
onMounted(() => {
  if (!backgroundStore.getCurrentBackgroundUrl) {
    backgroundStore.setRandomBackground();
  }
});
</script>
