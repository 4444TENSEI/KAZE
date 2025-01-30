<template>
  <v-app-bar border="b" class="position-fixed" density="comfortable" flat order="1">
    <v-btn icon="mdi-arrow-left" color="info" @click="goBack" />
    <v-app-bar-title
      class="cursor-default font-weight-bold ml-2"
      style="font-size: 1.2rem; letter-spacing: 0rem; line-height: 1"
    >
      {{ barTitle }}
    </v-app-bar-title>
    <slot></slot>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { goBack } from '@/hooks/goBack'
  defineProps({
    barTitle: {
      type: String,
      default: 'KAZE',
    },
  })
</script>
