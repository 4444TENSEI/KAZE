<template>
  <v-navigation-drawer
    v-model="drawerStore.isDrawerOpen"
    app
    :rail="drawerStore.lgAndUp"
    :expand-on-hover="drawerStore.lgAndUp"
    :temporary="!drawerStore.lgAndUp"
    @update:modelValue="drawerStore.toggleDrawer"
  >
  <v-list>
      <v-list-item
        prepend-avatar="https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/icon/angeldog/angeldog.ico"
        subtitle="xxx@qq.com"
        title="管理喵"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-folder"
        title="文件"
        value="myfiles"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="用户"
        value="shared"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-view-dashboard-outline"
        title="项目"
        value="starred"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useDrawerStore } from '@/stores/components/DrawerStore';
import { useDisplay } from 'vuetify';
import { watch } from 'vue';

const drawerStore = useDrawerStore();
const { lgAndUp } = useDisplay();

watch(lgAndUp, (newValue) => {
  drawerStore.setLgAndUp(newValue);
}, { immediate: true });
</script>