<template>
  <v-app-bar border="b" class="position-fixed" flat>
    <v-app-bar-nav-icon @click="drawerStore.toggleDrawer" v-if="!drawerStore.lgAndUp" />

    <v-app-bar-title>
      <p
        class="font-weight-black cursor-default"
        style="font-size: 1.8rem; letter-spacing: 0.1em; line-height: 1"
      >
        KAZE
      </p></v-app-bar-title
    >
    <!-- 搜索按钮组件 -->
    <HomeSearch />
    <!-- 昼夜更替按钮 -->
    <ThemeSwitch/>
    <!-- 头像列表 -->
    <UserProfile />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useDrawerStore } from '@/stores/components/DrawerStore';
const drawerStore = useDrawerStore();
</script>