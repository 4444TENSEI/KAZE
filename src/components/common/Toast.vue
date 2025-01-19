<template>
  <Notivue v-slot="item">
    <Notification :item="item" :theme="pastelTheme">
      <NotificationProgress :item="item" />
    </Notification>
  </Notivue>
</template>

<script setup>
  import {
    Notivue,
    NotificationProgress,
    Notification,
    push,
    pastelTheme,
    slateTheme,
  } from 'notivue'
</script>

<style>
  .Notivue__close {
    border-radius: 50% !important;
  }
</style>
