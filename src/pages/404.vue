<template>
  <v-empty-state
    :style="{ backgroundImage: `url(${randomBackgroundUrl})` }"
    class="d-flex align-center justify-center pa-0 w-100 pa-0"
    style="
      text-align: center;
      max-width: 100vw;
      background-size: cover;
      background-position: center;
    "
  >
    <v-icon size="6rem">mdi-earth-remove</v-icon>
    <h1 class="my-3 font-weight-black">404 页面不存在</h1>
    <h3 class="mb-4 font-weight-medium">来到一个不存在的地方，请返回吧~</h3>
    <v-btn
      size="x-large"
      color="info"
      rounded="pill"
      variant="outlined"
      @click="goBack"
      >返回</v-btn
    >
  </v-empty-state>
</template>

<script setup lang="ts">
import { useBackgroundStore } from "@/stores/setting/backgroundStore";
// 返回上一个正常的页面
const router = useRouter();
const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push("/");
  }
};

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
