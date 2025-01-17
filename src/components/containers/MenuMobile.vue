<template>
  <v-bottom-navigation class="position-fixed" color="primary" grow mode="shift">
    <v-btn v-for="menuItem in menuMobile" :key="menuItem.id" :to="menuItem.url">
      <v-icon>{{ menuItem.icon }}</v-icon>
      <span>{{ menuItem.name }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script lang="ts" setup>
  const menuMobile = [
    {
      id: 1,
      name: '首页',
      icon: 'mdi-home',
      url: '/home',
    },
    {
      id: 2,
      name: '插件',
      icon: 'mdi-creation-outline',
      url: '/plugin',
    },
    {
      id: 3,
      name: '我',
      icon: 'mdi-account',
      url: '/setting',
    },
  ]
</script>
