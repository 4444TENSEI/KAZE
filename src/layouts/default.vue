<template>
  <v-app>
    <v-main class="pa-0 ma-0 kaze-bg">
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import { useBackgroundStore } from "@/stores/setting/backgroundStore";

const backgroundStore = useBackgroundStore();
</script>
