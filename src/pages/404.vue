<template>
  <v-contain
    class="bg-surface-light d-flex align-center justify-center pa-ma-0 h-100"
    style="text-align: center"
    :style="{ backgroundImage: `url(${randomBackgroundUrl})` }"
  >
    <v-empty-state>
      <v-icon size="6rem">mdi-earth-remove</v-icon>
      <h1 class="my-4 font-weight-black">404 页面不存在</h1>
      <h3 class="mb-4 font-weight-medium">请往回走叭</h3>
      <v-btn rounded="pill" size="large" color="info" @click="goBack"
        >返回</v-btn
      >
    </v-empty-state>
  </v-contain>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useBackgroundStore } from "@/stores/backgroundStore";
// 随机背景图
const backgroundStore = useBackgroundStore();
const randomBackgroundUrl = computed(
  () => backgroundStore.getCurrentBackgroundUrl
);

// 返回上一个正常的页面
const router = useRouter();
const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push("/");
  }
};
onMounted(() => {
  if (!backgroundStore.getCurrentBackgroundUrl) {
    backgroundStore.setRandomBackground();
  }
});
</script>

<style scoped>
/* 背景图 */
.bg-surface-light {
  background-size: cover;
  background-position: center;
}
</style>
