<template>
  <AppNavDrawer v-model="drawer" />AppNavDrawer
  <AppNav :drawer="drawer" @update:drawer="drawer = $event" />
</template>
<script setup>
const drawer = ref(false);
</script>