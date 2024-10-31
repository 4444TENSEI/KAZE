<template>
  <Drawer v-model="drawerStore.isDrawerOpen" />
  <Nav
    :drawer="drawerStore.isDrawerOpen"
    @update:drawer="drawerStore.toggleDrawer"
  />
  <DataTable />
</template>

<script setup lang="ts">
import { useDrawerStore } from "@/stores/components/DrawerStore";

const drawerStore = useDrawerStore();
</script>
