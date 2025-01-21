<template>
  <Notivue v-slot="item">
    <NotivueSwipe :item="item">
      <Notification :item="item" :theme="theme">
        <NotificationProgress :item="item" />
      </Notification>
    </NotivueSwipe>
  </Notivue>
</template>

<script lang="ts" setup>
  import {
    Notivue,
    NotivueSwipe,
    NotificationProgress,
    Notification,
    pastelTheme,
    type NotivueTheme,
  } from 'notivue'

  const theme: NotivueTheme = {
    ...pastelTheme,
  }
</script>

<style lang="scss">
  .Notivue__close::after {
    border-radius: 50%;
  }
  .Notivue__content {
    padding-bottom: 8px;
  }
  :root {
    --nv-z: 9999;
  }
</style>
